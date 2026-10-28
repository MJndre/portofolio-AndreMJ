/**
 * ============================================================
 * MAIN SCRIPT - ANDRE MAULANA JAYUDIN HYBRID PORTFOLIO
 * Mengatur Mode Switcher, Interaktivitas Sandbox,
 * Modal Case Study, Animasi Kursor, dan Filter Proyek
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // State aplikasi
  let currentMode = 'design'; // 'design' | 'code'
  let activeFilter = 'all';

  // Inisialisasi Audio FX (Web Audio API synth sederhana)
  const playModeSound = (isCode) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = isCode ? 'square' : 'sine';
      osc.frequency.setValueAtTime(isCode ? 440 : 587.33, audioCtx.currentTime); // A4 atau D5
      osc.frequency.exponentialRampToValueAtTime(isCode ? 880 : 880, audioCtx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  };

  /* ============================================================
     1. DUAL MODE SWITCHER (DESIGN VIEW vs CODE VIEW)
     ============================================================ */
  const htmlRoot = document.documentElement;
  const btnModeDesign = document.getElementById('btnModeDesign');
  const btnModeCode = document.getElementById('btnModeCode');
  const bannerToggleTrigger = document.getElementById('bannerToggleTrigger');
  const bannerToggleLabel = document.getElementById('bannerToggleLabel');
  const cursorBadge = document.getElementById('cursorBadge');
  const inspectorText = document.getElementById('inspectorText');
  const heroSubGreeting = document.getElementById('heroSubGreeting');
  const brandRoleLabel = document.getElementById('brandRoleLabel');

  function setMode(mode) {
    currentMode = mode;
    htmlRoot.setAttribute('data-mode', mode);

    const isCode = mode === 'code';
    playModeSound(isCode);

    if (btnModeDesign && btnModeCode) {
      btnModeDesign.classList.toggle('active', !isCode);
      btnModeCode.classList.toggle('active', isCode);
    }

    if (bannerToggleLabel) {
      bannerToggleLabel.textContent = isCode ? 'Ganti ke Design View 🎨' : 'Ganti ke Code View 💻';
    }

    if (inspectorText) {
      inspectorText.textContent = isCode ? 'Inspector: Dev Terminal & Tech Active' : 'Inspector: UI/UX Canvas Active';
    }

    if (brandRoleLabel) {
      brandRoleLabel.textContent = isCode ? 'Creative Coder' : 'UI/UX & Code';
    }

    // Update stat labels in hero
    document.querySelectorAll('.stat-lbl').forEach(lbl => {
      const designText = lbl.getAttribute('data-design-lbl');
      const codeText = lbl.getAttribute('data-code-lbl');
      lbl.textContent = isCode ? codeText : designText;
    });

    // Update workflow timeline descriptions
    renderWorkflow();
    
    // Update toast notification
    showToast(`Mode beralih ke: ${isCode ? 'Code View 💻' : 'Design View 🎨'}`);
  }

  if (btnModeDesign) btnModeDesign.addEventListener('click', () => setMode('design'));
  if (btnModeCode) btnModeCode.addEventListener('click', () => setMode('code'));
  if (bannerToggleTrigger) {
    bannerToggleTrigger.addEventListener('click', () => {
      setMode(currentMode === 'design' ? 'code' : 'design');
    });
  }

  /* ============================================================
     2. RENDER PROYEK (DUAL PERSPECTIVE)
     ============================================================ */
  const projectsGrid = document.getElementById('projectsGrid');

  function renderProjects() {
    if (!projectsGrid || !PORTFOLIO_DATA.projects) return;

    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      if (activeFilter === 'all') return true;
      return p.category === activeFilter;
    });

    projectsGrid.innerHTML = filtered.map(p => `
      <article class="project-card" data-id="${p.id}" data-category="${p.category}">
        <div class="project-media">
          <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
          <span class="project-category-badge">${p.designView.badge}</span>
        </div>
        
        <div class="project-info">
          <div class="project-header-row">
            <h3 class="project-card-title">${p.title}</h3>
            <span class="project-client">${p.year}</span>
          </div>

          <!-- Tampilan Desain -->
          <div class="view-design-panel">
            <p class="project-card-desc">${p.designView.summary}</p>
            <ul class="deliverables-list">
              ${p.designView.deliverables.map(d => `<li><i class="fas fa-check-circle" style="color:var(--secondary);font-size:0.7rem;margin-right:4px;"></i>${d}</li>`).join('')}
            </ul>
          </div>

          <!-- Tampilan Koding -->
          <div class="view-code-panel">
            <p class="project-card-desc">${p.codeView.summary}</p>
            <ul class="tech-stack-list">
              ${p.codeView.techStack.map(t => `<li>&lt;${t} /&gt;</li>`).join('')}
            </ul>
            <div class="mini-code-box"><code>${escapeHtml(p.codeView.snippet.substring(0, 160))}...</code></div>
          </div>

          <div class="project-card-footer">
            <button class="btn-open-modal" onclick="openProjectModal('${p.id}')">
              <span>Baca Case Study Lengkap</span>
              <i class="fas fa-arrow-right"></i>
            </button>
            <span style="font-family:var(--font-code);font-size:0.75rem;color:var(--text-muted);">${p.client}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Helper untuk escape HTML pada code snippet
  function escapeHtml(string) {
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  /* ============================================================
     3. MODAL DETAIL CASE STUDY
     ============================================================ */
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  window.openProjectModal = function(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !caseStudyModal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-media-showcase">
        <img src="${project.image}" alt="${project.title}" class="modal-media-img">
      </div>
      
      <div class="modal-header-info" style="margin-bottom:1.5rem;">
        <span class="project-category-badge" style="position:static;display:inline-block;margin-bottom:0.5rem;">${project.designView.badge}</span>
        <h2 style="font-size:2rem;font-weight:900;margin-bottom:0.5rem;">${project.title}</h2>
        <p style="color:var(--text-muted);font-family:var(--font-code);font-size:0.85rem;">
          Klien: <strong style="color:#fff;">${project.client}</strong> • Tahun: ${project.year}
        </p>
      </div>

      <div class="modal-section-block" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;">
        <div style="background:#090d16;padding:1.5rem;border-radius:14px;border:1px solid var(--border-bold);">
          <h4 style="color:var(--primary);margin-bottom:0.8rem;display:flex;align-items:center;gap:0.5rem;">
            <i class="fas fa-palette"></i> Desain &amp; User Experience
          </h4>
          <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6;">
            ${project.designView.summary}
          </p>
          <div style="font-size:0.82rem;font-weight:700;margin-bottom:0.5rem;">Deliverables:</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.4rem;font-size:0.82rem;color:var(--text-main);">
            ${project.designView.deliverables.map(d => `<li><i class="fas fa-check" style="color:var(--secondary);margin-right:6px;"></i>${d}</li>`).join('')}
          </ul>
        </div>

        <div style="background:#090d16;padding:1.5rem;border-radius:14px;border:1px solid var(--border-bold);">
          <h4 style="color:var(--secondary);margin-bottom:0.8rem;display:flex;align-items:center;gap:0.5rem;">
            <i class="fas fa-code"></i> Implementasi Frontend &amp; Arsitektur
          </h4>
          <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6;">
            ${project.codeView.summary}
          </p>
          <div style="font-size:0.82rem;font-weight:700;margin-bottom:0.5rem;">Tech Stack:</div>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
            ${project.codeView.techStack.map(t => `<span style="font-family:var(--font-code);font-size:0.75rem;background:rgba(255,255,255,0.06);padding:3px 8px;border-radius:4px;border:1px solid var(--border-subtle);">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div style="background:#000;border:1px solid var(--border-bold);border-radius:12px;padding:1.2rem;margin-bottom:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem;">
          <span style="font-family:var(--font-code);font-size:0.78rem;color:var(--secondary);">Snippet Komponen:</span>
          <button class="btn-copy-code" onclick="copySnippetText(this)" style="background:transparent;border:1px solid var(--border-subtle);color:var(--text-muted);padding:3px 8px;border-radius:4px;cursor:pointer;">
            <i class="fas fa-copy"></i> Salin
          </button>
        </div>
        <pre style="font-family:var(--font-code);font-size:0.8rem;color:#93c5fd;overflow-x:auto;line-height:1.5;"><code>${escapeHtml(project.codeView.snippet)}</code></pre>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;border-top:1px solid var(--border-subtle);padding-top:1.5rem;">
        <span style="font-size:0.85rem;color:var(--secondary);font-weight:700;">
          <i class="fas fa-chart-line"></i> Hasil: ${project.designView.metrics}
        </span>
        <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Tutup Modal</button>
      </div>
    `;

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    if (caseStudyModal) {
      caseStudyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeProjectModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  window.copySnippetText = function(btn) {
    const pre = btn.closest('div').nextElementSibling;
    if (pre) {
      navigator.clipboard.writeText(pre.innerText).then(() => {
        showToast('Kode snippet disalin! 📋');
      });
    }
  };

  /* ============================================================
     4. STANDOUT FEATURE: LIVE DESIGN & CODE SANDBOX
     ============================================================ */
  const sandboxCard = document.getElementById('sandboxCard');
  const sbRadius = document.getElementById('sbRadius');
  const sbBorder = document.getElementById('sbBorder');
  const sbRotate = document.getElementById('sbRotate');
  const sbShadow = document.getElementById('sbShadow');
  const sbCardText = document.getElementById('sbCardText');
  const sbDisplayTitle = document.getElementById('sbDisplayTitle');
  const sbGeneratedCode = document.getElementById('sandboxGeneratedCode');
  const btnResetSandbox = document.getElementById('btnResetSandbox');
  const btnCopySandboxCode = document.getElementById('btnCopySandboxCode');

  let sbState = {
    color: '#6366f1',
    radius: 24,
    border: 3,
    rotate: -2,
    shadow: 8,
    text: "Design that Works, Code that Plays."
  };

  function updateSandbox() {
    if (!sandboxCard) return;

    // Terapkan ke CSS Variables di elemen kartu
    sandboxCard.style.setProperty('--sb-color', sbState.color);
    sandboxCard.style.setProperty('--sb-radius', `${sbState.radius}px`);
    sandboxCard.style.setProperty('--sb-border-w', `${sbState.border}px`);
    sandboxCard.style.setProperty('--sb-rotate', `${sbState.rotate}deg`);
    sandboxCard.style.setProperty('--sb-shadow', `${sbState.shadow}px`);

    if (sbDisplayTitle) sbDisplayTitle.textContent = sbState.text;

    // Update label indikator angka
    document.getElementById('valRadius').textContent = `${sbState.radius}px`;
    document.getElementById('valBorder').textContent = `${sbState.border}px`;
    document.getElementById('valRotate').textContent = `${sbState.rotate}deg`;
    document.getElementById('valShadow').textContent = `${sbState.shadow}px`;

    // Generate output CSS real-time yang bisa disalin
    const generatedCSS = `/* CSS Generated secara Real-Time */
.interactive-card {
  background: #182238;
  border-radius: ${sbState.radius}px;
  border: ${sbState.border}px solid #000000;
  box-shadow: ${sbState.shadow}px ${sbState.shadow}px 0px ${sbState.color};
  transform: rotate(${sbState.rotate}deg);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.interactive-card:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: ${sbState.shadow + 4}px ${sbState.shadow + 4}px 0px ${sbState.color};
}`;

    if (sbGeneratedCode) sbGeneratedCode.textContent = generatedCSS;
  }

  // Listeners untuk kontrol slider & text
  if (sbRadius) sbRadius.addEventListener('input', (e) => { sbState.radius = e.target.value; updateSandbox(); });
  if (sbBorder) sbBorder.addEventListener('input', (e) => { sbState.border = e.target.value; updateSandbox(); });
  if (sbRotate) sbRotate.addEventListener('input', (e) => { sbState.rotate = e.target.value; updateSandbox(); });
  if (sbShadow) sbShadow.addEventListener('input', (e) => { sbState.shadow = e.target.value; updateSandbox(); });
  if (sbCardText) sbCardText.addEventListener('input', (e) => { sbState.text = e.target.value || 'Custom Title'; updateSandbox(); });

  // Color Pickers
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      sbState.color = dot.getAttribute('data-color');
      updateSandbox();
    });
  });

  // Reset Sandbox
  if (btnResetSandbox) {
    btnResetSandbox.addEventListener('click', () => {
      sbState = { color: '#6366f1', radius: 24, border: 3, rotate: -2, shadow: 8, text: "Design that Works, Code that Plays." };
      if (sbRadius) sbRadius.value = 24;
      if (sbBorder) sbBorder.value = 3;
      if (sbRotate) sbRotate.value = -2;
      if (sbShadow) sbShadow.value = 8;
      if (sbCardText) sbCardText.value = sbState.text;
      document.querySelectorAll('.color-dot').forEach((d, i) => d.classList.toggle('active', i === 0));
      updateSandbox();
      showToast('Sandbox direset ke default! ✨');
    });
  }

  // Copy Generated CSS
  if (btnCopySandboxCode) {
    btnCopySandboxCode.addEventListener('click', () => {
      if (sbGeneratedCode) {
        navigator.clipboard.writeText(sbGeneratedCode.textContent).then(() => {
          showToast('CSS berhasil disalin! 🚀');
        });
      }
    });
  }

  window.triggerCardWiggle = function() {
    if (sandboxCard) {
      sandboxCard.animate([
        { transform: `rotate(${sbState.rotate}deg) scale(1)` },
        { transform: `rotate(${Number(sbState.rotate) + 6}deg) scale(1.08)` },
        { transform: `rotate(${Number(sbState.rotate) - 6}deg) scale(0.96)` },
        { transform: `rotate(${sbState.rotate}deg) scale(1)` }
      ], {
        duration: 400,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      });
      playModeSound(false);
    }
  };

  /* ============================================================
     5. RENDER WORKFLOW TIMELINE
     ============================================================ */
  const processTimeline = document.getElementById('processTimeline');

  function renderWorkflow() {
    if (!processTimeline || !PORTFOLIO_DATA.workflow) return;

    processTimeline.innerHTML = PORTFOLIO_DATA.workflow.map(item => `
      <div class="process-step-card">
        <span class="step-num">${item.step}</span>
        <h3 class="step-title">${item.title}</h3>
        <p class="step-desc">
          ${currentMode === 'code' ? item.codeDesc : item.designDesc}
        </p>
      </div>
    `).join('');
  }

  /* ============================================================
     6. DRAGGABLE PLAYFUL STICKERS
     ============================================================ */
  const stickers = document.querySelectorAll('.draggable');
  stickers.forEach(sticker => {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    sticker.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = sticker.getBoundingClientRect();
      const parentRect = sticker.parentElement.getBoundingClientRect();
      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;
      sticker.style.zIndex = 100;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      sticker.style.left = `${initialLeft + dx}px`;
      sticker.style.top = `${initialTop + dy}px`;
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        sticker.style.zIndex = 10;
      }
    });
  });

  /* ============================================================
     7. CUSTOM CURSOR & MOUSE TRACKING
     ============================================================ */
  const customCursor = document.getElementById('customCursor');
  if (customCursor) {
    window.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
      if (cursorBadge) {
        const icon = currentMode === 'code' ? '&lt;/&gt;' : '🎨';
        cursorBadge.innerHTML = `${icon} ${e.clientX}, ${e.clientY}`;
      }
    });

    // Expand cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .draggable, .project-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
    });
  }

  /* ============================================================
     8. LIVE JAKARTA WIB CLOCK
     ============================================================ */
  const liveClock = document.getElementById('liveClock');
  function updateClock() {
    if (!liveClock) return;
    const now = new Date();
    // Gunakan zona waktu Asia/Jakarta (WIB)
    const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    liveClock.textContent = `${now.toLocaleTimeString('id-ID', options)} WIB`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  /* ============================================================
     9. TOAST NOTIFICATION UTILITY
     ============================================================ */
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 2800);
  }

  // Copy Email Button
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail && PORTFOLIO_DATA.profile.email) {
    btnCopyEmail.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        showToast('Email disalin ke clipboard! 📋');
      });
    });
  }

  /* ============================================================
     10. SOCIAL LINKS RENDERING
     ============================================================ */
  const contactSocials = document.getElementById('contactSocials');
  if (contactSocials && PORTFOLIO_DATA.socials) {
    contactSocials.innerHTML = PORTFOLIO_DATA.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" title="${s.name}">
        <i class="${s.icon}"></i>
      </a>
    `).join('');
  }

  /* ============================================================
     11. CONTACT FORM & CONFETTI CELEBRATION
     ============================================================ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;

      // Ledakan Confetti yang meriah!
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.7 }
        });
      }

      showToast(`Terima kasih ${name}! Pesanmu terkirim 🎉`);
      contactForm.reset();
    });
  }

  /* ============================================================
     12. EXPERIENCE & EDUCATION TABS (SYNCED WITH CV)
     ============================================================ */
  const expTabsNav = document.getElementById('expTabsNav');
  const expContentGrid = document.getElementById('expContentGrid');
  let activeExpTab = 'work'; // 'work' | 'org' | 'edu'

  function renderExperience(tab = activeExpTab) {
    if (!expContentGrid) return;
    activeExpTab = tab;

    // Highlight active tab button
    if (expTabsNav) {
      expTabsNav.querySelectorAll('.exp-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-exp-tab') === tab);
      });
    }

    if (tab === 'work') {
      const items = PORTFOLIO_DATA.workExperience || [];
      expContentGrid.innerHTML = items.map(w => `
        <article class="exp-card highlight-card">
          <div class="exp-card-header">
            <div class="exp-role-group">
              <span class="exp-badge">${w.badge}</span>
              <h3 class="exp-role-title">${w.role}</h3>
              <div class="exp-company-row">
                <span class="exp-company"><i class="fas fa-building"></i> ${w.company}</span>
                <span class="exp-type">${w.type}</span>
                <span class="exp-location"><i class="fas fa-map-pin"></i> ${w.location}</span>
              </div>
            </div>
            <div class="exp-period-pill">
              <i class="fas fa-calendar-days"></i> ${w.period}
            </div>
          </div>

          <p class="exp-description">${w.description}</p>

          <div class="exp-highlights-title">Tanggung Jawab &amp; Kontribusi Kunci:</div>
          <ul class="exp-highlights-list">
            ${w.highlights.map(h => `<li><i class="fas fa-check-circle"></i><span>${h}</span></li>`).join('')}
          </ul>

          <div class="exp-tools-footer">
            <span class="exp-tools-label">Tools &amp; Metodologi:</span>
            <div class="exp-tools-tags">
              ${w.tools.map(t => `<span class="exp-tool-pill">${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
    } else if (tab === 'org') {
      const items = PORTFOLIO_DATA.organization || [];
      expContentGrid.innerHTML = items.map(o => `
        <article class="exp-card">
          <div class="exp-card-header">
            <div class="exp-role-group">
              <span class="exp-badge">${o.badge}</span>
              <h3 class="exp-role-title">${o.role}</h3>
              <div class="exp-company-row">
                <span class="exp-company"><i class="fas fa-users"></i> ${o.orgName}</span>
              </div>
            </div>
            <div class="exp-period-pill">
              <i class="fas fa-calendar-days"></i> ${o.period}
            </div>
          </div>

          <div class="exp-highlights-title">Pencapaian &amp; Peran:</div>
          <ul class="exp-highlights-list">
            ${o.highlights.map(h => `<li><i class="fas fa-angle-right"></i><span>${h}</span></li>`).join('')}
          </ul>
        </article>
      `).join('');
    } else if (tab === 'edu') {
      const items = PORTFOLIO_DATA.education || [];
      expContentGrid.innerHTML = items.map(e => `
        <article class="exp-card edu-card">
          <div class="exp-card-header">
            <div class="exp-role-group">
              <span class="exp-badge">${e.badge}</span>
              <h3 class="exp-role-title">${e.degree}</h3>
              <div class="exp-company-row">
                <span class="exp-company"><i class="fas fa-school"></i> ${e.institution}</span>
                <span class="exp-type">${e.status}</span>
              </div>
            </div>
            <div class="exp-period-pill">
              <i class="fas fa-calendar-days"></i> ${e.period}
            </div>
          </div>
          <p class="exp-description" style="margin-top:0.6rem;">${e.details}</p>
        </article>
      `).join('');
    }
  }

  if (expTabsNav) {
    expTabsNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.exp-tab-btn');
      if (btn) {
        const targetTab = btn.getAttribute('data-exp-tab');
        renderExperience(targetTab);
      }
    });
  }

  /* ============================================================
     13. CV PREVIEW MODAL CONTROLS
     ============================================================ */
  const cvModal = document.getElementById('cvModal');
  const btnDownloadCV = document.getElementById('btnDownloadCV');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');

  window.openCVModal = function() {
    if (cvModal) {
      cvModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCVModal = function() {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (btnDownloadCV) {
    btnDownloadCV.addEventListener('click', (e) => {
      e.preventDefault();
      openCVModal();
    });
  }

  if (cvModalCloseBtn) {
    cvModalCloseBtn.addEventListener('click', closeCVModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCVModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCVModal();
    }
  });

  /* ============================================================
     14. MOBILE MENU DRAWER
     ============================================================ */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('mobile-active');
      mobileMenuBtn.classList.toggle('active', isOpen);
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  /* ============================================================
     15. INISIALISASI PERTAMA KALI
     ============================================================ */
  renderProjects();
  renderExperience('work');
  renderWorkflow();
  updateSandbox();
});
