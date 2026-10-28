/**
 * ============================================================
 * PORTFOLIO CONFIGURATION DATA
 * Andre Maulana Jayudin — Hybrid Portfolio (Design & Code)
 * Data sinkronisasi lengkap berdasarkan CV Resmi
 * ============================================================
 */

const PORTFOLIO_DATA = {
  // Profil Utama
  profile: {
    name: "Andre Maulana Jayudin",
    nickname: "Andre",
    roleDesign: "UI/UX & Graphic Designer",
    roleCode: "Informatics Student & Creative Coder",
    university: "Universitas Muhammadiyah Cirebon (UMC)",
    major: "S1 Teknik Informatika — Semester 5",
    academicYear: "2023 - Sekarang",
    taglineDesign: "Crafting bold visual identities, human-centered UI/UX, & engaging multimedia content.",
    taglineCode: "Bridging computer science fundamentals, interactive frontend, & solid software logic.",
    status: "🟢 Available for Freelance, Project & Internship",
    location: "Cirebon, Jawa Barat, Indonesia 🇮🇩",
    address: "Jl. Abdi Negara IV No. 216 B KORPRI RT.003/RW.007, Kelurahan Tukmudal, Kecamatan Sumber",
    email: "andremaulanaj@gmail.com",
    phone: "+62 821-2720-2462",
    whatsappUrl: "https://wa.me/6282127202462?text=Halo%20Andre,%20saya%20tertarik%20untuk%20berkolaborasi%20proyek!",
    avatar: "assets/images/avatar.jpg",
    resumeUrl: "#cv-preview", // Membuka preview interaktif CV di website
    bio: "Mahasiswa S1 Teknik Informatika Universitas Muhammadiyah Cirebon (Semester 5) yang aktif berorganisasi dengan keahlian paduan antara Pemrograman, Desain Grafis, dan Video Editing. Terbiasa bekerja dengan tenggat waktu ketat melalui rutinitas produksi konten mingguan dan manajemen publikasi organisasi. Memiliki kemampuan komunikasi yang baik, adaptabilitas tinggi terhadap teknologi baru, serta pemahaman teknis komputer yang mumpuni. Siap berkontribusi dalam tim yang dinamis dengan membawa etos kerja disiplin dan kreatif."
  },

  // Statistik & Fun Metrics
  stats: [
    { number: "5th", label: "Semester TI UMC", codeLabel: "Mahasiswa Semester 5" },
    { number: "2", label: "Proyek Unggulan", codeLabel: "Featured Projects" },
    { number: "100%", label: "Pixel Perfect UI", codeLabel: "Clean Code & Logic" },
    { number: "∞", label: "Ide Kreatif", codeLabel: "git commit -m 'spark'" }
  ],

  // Link Media Sosial & Kontak
  socials: [
    { name: "WhatsApp", url: "https://wa.me/6282127202462", icon: "fab fa-whatsapp", color: "#25d366" },
    { name: "Dribbble", url: "https://dribbble.com/andre-maulana-j", icon: "fab fa-dribbble", color: "#ea4c89" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/andre-maulana-jayudin-7726702b4", icon: "fab fa-linkedin-in", color: "#0a66c2" },
    { name: "GitHub", url: "https://github.com/MJndre", icon: "fab fa-github", color: "#ffffff" },
    { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram", color: "#e1306c" }
  ],

  // Keahlian Lengkap (Hard Skills & Soft Skills dari CV)
  skills: {
    softSkills: [
      {
        name: "Manajemen Waktu",
        desc: "Mampu mengatur prioritas pekerjaan dan menyelesaikan tugas tepat waktu.",
        icon: "fas fa-clock"
      },
      {
        name: "Kerja Sama Tim",
        desc: "Mampu bekerja sama secara adaptif dan komunikatif untuk mencapai tujuan bersama.",
        icon: "fas fa-users"
      },
      {
        name: "Komunikasi",
        desc: "Mampu menyampaikan informasi teknis dan gagasan kreatif dengan jelas dan terstruktur.",
        icon: "fas fa-comments"
      },
      {
        name: "Problem Solving",
        desc: "Mampu menganalisis masalah secara logis dan menemukan solusi praktis efisien.",
        icon: "fas fa-lightbulb"
      }
    ],

    hardSkills: {
      design: [
        { name: "UI/UX Design", level: "95%", icon: "fas fa-pen-nib", tag: "Design Thinking, Wireframing, User Flow, Usability Test" },
        { name: "Graphic Design & Branding", level: "92%", icon: "fas fa-palette", tag: "Visual Identity, Poster, Banner, Sertifikat, Feed Media Sosial" },
        { name: "Video Editing", level: "88%", icon: "fas fa-video", tag: "Filmora, Konten Mingguan, Dokumentasi Acara, PDD" },
        { name: "Figma Prototyping", level: "96%", icon: "fab fa-figma", tag: "Auto-layout, Components, Interactive Prototypes, Dev Handoff" },
        { name: "Creative Software", level: "90%", icon: "fas fa-bezier-curve", tag: "Canva, Adobe Photoshop, Illustrator" }
      ],
      code: [
        { name: "HTML5, CSS3, & Modern JS", level: "95%", icon: "fab fa-js", tag: "Semantic Markup, Responsive Layout, DOM Manipulation, Async JS" },
        { name: "Frontend Frameworks & UI", level: "88%", icon: "fab fa-react", tag: "React JS, Tailwind CSS, Modern CSS Variables" },
        { name: "Backend & Server Scripting", level: "84%", icon: "fab fa-php", tag: "PHP, Laravel Framework, Python Programming" },
        { name: "Databases & Data Modeling", level: "86%", icon: "fas fa-database", tag: "MySQL, SQLite, MySQL Workbench" },
        { name: "Tools, Version Control & Mobile", level: "89%", icon: "fab fa-github", tag: "VS Code, Git & GitHub, Dasar Dart & Flutter" }
      ]
    }
  },

  // Pengalaman Kerja (PKL / Magang)
  workExperience: [
    {
      id: "work-1",
      role: "UI/UX Designer",
      company: "Trusmi Group",
      type: "PKL / Magang",
      period: "November 2025 - Februari 2026",
      location: "Cirebon, Indonesia",
      badge: "💼 Pengalaman Kerja Nyata",
      description: "Bertanggung jawab dalam perancangan produk digital internal perusahaan yang digunakan oleh ratusan karyawan.",
      highlights: [
        "Merancang tampilan dan alur penggunaan aplikasi internal perusahaan agar lebih intuitif dan efisien.",
        "Mengembangkan desain UI/UX untuk aplikasi Absensi Internal dan Dashboard Analytics Internal.",
        "Menyusun wireframe, mockup, serta interactive prototype sebagai panduan proses pengembangan oleh tim developer.",
        "Berkoordinasi secara aktif dengan tim developer untuk memastikan hasil koding sesuai dengan standar desain dan kemudahan pengguna.",
        "Mengoptimalkan desain berdasarkan evaluasi masukan pengguna serta feedback tim menggunakan metode Design Thinking.",
        "Menghasilkan ide desain inovatif yang mendukung efisiensi operasional kerja dan kebutuhan bisnis perusahaan."
      ],
      tools: ["Figma", "Design Thinking", "Interactive Prototyping", "Wireframing", "Developer Handoff"]
    }
  ],

  // Pengalaman Organisasi & Kepanitiaan
  organization: [
    {
      id: "org-1",
      role: "Ketua Departemen DOKOMINFO",
      orgName: "Himpunan Mahasiswa Jurusan Teknik Informatika (Himasantika)",
      period: "September 2025 - Desember 2025",
      badge: "🏛️ Kepemimpinan Organisasi",
      highlights: [
        "Memimpin divisi DOKOMINFO dalam merancang dan mengeksekusi strategi branding visual serta publikasi informasi organisasi di media sosial.",
        "Bertanggung jawab atas manajemen konten rutin mingguan, meliputi penerbitan 'Mading Biner', konten edukasi teknologi, serta konten interaktif untuk menjaga engagement.",
        "Mengoordinasikan layanan desain grafis dan dokumentasi untuk memfasilitasi kebutuhan publikasi program kerja departemen lain dalam himpunan.",
        "Bertugas sebagai Penanggung Jawab Sie PDD dalam acara Dies Natalis Himasantika ke-13."
      ]
    },
    {
      id: "org-2",
      role: "Staf Departemen DOKOMINFO",
      orgName: "Himpunan Mahasiswa Jurusan Teknik Informatika (Himasantika)",
      period: "Februari 2024 - Agustus 2025",
      badge: "🎨 Kreatif & Multimedia",
      highlights: [
        "Berkontribusi aktif dalam perencanaan dan eksekusi konten digital departemen, termasuk pembuatan 'Mading Biner' dan konten edukatif mingguan.",
        "Bertanggung jawab menyusun konten interaktif dan hiburan media sosial untuk meningkatkan interaksi pengikut.",
        "Membantu divisi lain dalam pembuatan aset visual (desain poster, banner, dan sertifikat) untuk berbagai program kerja himpunan.",
        "Bertugas sebagai Staf PDD (Publikasi, Dekorasi, Dokumentasi) pada berbagai acara resmi Himpunan Mahasiswa."
      ]
    },
    {
      id: "org-3",
      role: "Staf Sub Divisi Proyek Teknologi",
      orgName: "Unit Kegiatan Mahasiswa Computer Education (UKM CE)",
      period: "6 Januari 2025 - Sekarang",
      badge: "💻 Software & Tech Project",
      highlights: [
        "Berkontribusi dalam pembuatan aplikasi berbasis desktop dan web, termasuk perancangan alur sistem, arsitektur data, dan database.",
        "Bertugas sebagai Penanggung Jawab Sie PDD dalam acara MAKRAB UKM COMPUTER EDUCATION."
      ]
    },
    {
      id: "org-4",
      role: "Anggota Aktif & Pembelajar",
      orgName: "Komunitas Mobile Development",
      period: "2024 - Sekarang",
      badge: "📱 Mobile & Version Control",
      highlights: [
        "Berpartisipasi aktif dalam kegiatan kolaborasi proyek teknologi dan pelatihan komunitas.",
        "Mengikuti program pelatihan intensif yang mencakup dasar-dasar pemrograman Dart dan Flutter.",
        "Mempelajari dan mengimplementasikan Git dan GitHub sebagai alat utama kolaborasi tim, version control, dan deployment proyek mobile."
      ]
    }
  ],

  // Riwayat Pendidikan
  education: [
    {
      id: "edu-1",
      institution: "Universitas Muhammadiyah Cirebon (UMC)",
      degree: "S1 Teknik Informatika",
      period: "2023 - Sekarang (Semester 5)",
      status: "Aktif Mahasiswa",
      badge: "🎓 Perguruan Tinggi",
      details: "Mempelajari rekayasa perangkat lunak, algoritma & struktur data, pemrograman berorientasi objek, basis data, interaksi manusia & komputer, serta pengembangan web & mobile."
    },
    {
      id: "edu-2",
      institution: "SMA Negeri 1 Sumber",
      degree: "Jurusan Ilmu Pengetahuan Alam (IPA)",
      period: "2020 - 2023",
      status: "Lulus",
      badge: "🏫 Sekolah Menengah Atas",
      details: "Menempa logika matematika analitis, metode ilmiah pemecahan masalah, serta dasar teknologi informasi."
    }
  ],

  // Proyek Showcase Unggulan (Hanya 2 Proyek Nyata dengan Tangkapan Layar Resmi)
  projects: [
    {
      id: "project-1",
      category: "web",
      title: "Website WebGIS Pemetaan Potensi Desa Ciledug Lor",
      client: "KKN UMC 2026 & Pemdes Ciledug Lor",
      year: "2026",
      image: "assets/images/project-ciledug.png",
      designView: {
        badge: "🗺️ WebGIS & Geospasial",
        summary: "Perancangan dan pengembangan website Sistem Informasi Geografis (WebGIS) responsif untuk memetakan dan mempublikasikan sebaran potensi ekonomi lokal, lahan pertanian produktif, serta fasilitas umum Desa Ciledug Lor.",
        deliverables: [
          "Antarmuka WebGIS Peta Interaktif Ramah Pengguna & Aksesibel",
          "Visualisasi Koordinat Potensi Desa dengan Marker Digital & Pop-up Informasi",
          "Panel Statistik Ringkasan Potensi (UMKM, Pertanian, Sarana Umum)",
          "Tata Letak Responsif Optimal untuk Smartphone Warga & Aparatur Desa"
        ],
        tools: ["WebGIS", "Figma", "OpenStreetMap / Leaflet", "GeoJSON", "HTML5 & CSS3"],
        metrics: "Memetakan 9 potensi lokal desa dan meningkatkan akses informasi masyarakat"
      },
      codeView: {
        badge: "💻 Frontend & GIS Architecture",
        summary: "Website interaktif berbasis Leaflet dan OpenStreetMap yang mengintegrasikan data spasial geolokasi. Menyajikan layer interaktif, filter instan berdasarkan sektor usaha, dan rendering marker cepat.",
        techStack: ["HTML5", "Modern CSS3", "JavaScript ES6+", "Leaflet API", "GeoJSON Data"],
        snippet: `// Inisialisasi Peta Potensi Desa Ciledug Lor\nconst map = L.map('potensiMap').setView([-6.9012, 108.7345], 14);\nL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n  attribution: '© OpenStreetMap contributors'\n}).addTo(map);\n// Render data spasial GeoJSON potensi desa\nloadVillagePotentialGeoJSON(map);`,
        github: "https://github.com",
        demoUrl: "#"
      }
    },
    {
      id: "project-2",
      category: "uiux",
      title: "Trusmi Group: Internal Mobile Attendance & Dashboard",
      client: "Trusmi Group (PKL / Magang)",
      year: "2025 - 2026",
      image: "assets/images/project-trusmi.png",
      designView: {
        badge: "📱 UI/UX Enterprise Case Study",
        summary: "Perancangan UI/UX menyeluruh untuk aplikasi mobile absensi karyawan Trusmi Group. Menyajikan alur presensi manual, pemilihan kendala (jaringan, perangkat, aplikasi), unggah bukti visual, dan konfirmasi presensi instan.",
        deliverables: [
          "User Research & Journey Mapping Alur Presensi Staf Lapangan & Kantor",
          "High-Fidelity Mobile App Prototype di Figma (Auto-layout & Variables)",
          "Design System Internal (Palet Merah Trusmi, Tipografi, & Komponen Reusable)",
          "Alur Absensi Manual dengan Dialog Konfirmasi 'Absen Berhasil'"
        ],
        tools: ["Figma", "Design Thinking", "Auto-layout", "Component Tokens", "Wireframing"],
        metrics: "Memudahkan presensi manual karyawan dan meminimalisir kegagalan absensi"
      },
      codeView: {
        badge: "💻 Mobile UI Ready Architecture",
        summary: "Spesifikasi desain interaktif terperinci dengan panduan developer handoff. Memudahkan implementasi komponen mobile React Native / Flutter dengan alur validasi formulir dan upload bukti presensi.",
        techStack: ["Figma Tokens", "React Native Ready", "Tailwind CSS", "REST API Spec", "State Management"],
        snippet: `// Form Submit Handler Absensi Manual Trusmi Group\nconst handleManualAttendance = async (formData) => {\n  const payload = {\n    employeeId: formData.id,\n    attendanceType: formData.type, // 'Masuk' | 'Pulang'\n    issueReason: formData.reason,   // 'Jaringan' | 'Perangkat' | etc.\n    proofPhoto: formData.file\n  };\n  return await api.post('/attendance/manual-submit', payload);\n};`,
        github: "https://github.com",
        demoUrl: "#"
      }
    }
  ],

  // Alur Kerja Kreatif (Workflow)
  workflow: [
    {
      step: "01",
      title: "Discover & Empathize",
      designDesc: "Memahami target audiens, kebutuhan user, serta moodboard visual untuk menemukan arah estetik yang tepat.",
      codeDesc: "Menganalisis kebutuhan sistem, pemodelan database, pemilihan teknologi terbaik, dan target performa website."
    },
    {
      step: "02",
      title: "Wireframe & Identity",
      designDesc: "Membuat sketsa wireframe lo-fi, eksplorasi palet warna, tipografi, dan elemen visual branding yang ekspresif.",
      codeDesc: "Menyiapkan repository Git, fondasi CSS variables/design tokens, dan struktur semantik HTML."
    },
    {
      step: "03",
      title: "Craft & Prototype",
      designDesc: "Membangun antarmuka hi-fi di Figma dengan auto-layout, micro-interaction yang hidup, dan clickable prototype.",
      codeDesc: "Mengoding komponen reaktif, integrasi logika backend/database, dan pengujian responsif di berbagai perangkat."
    },
    {
      step: "04",
      title: "Ship & Iterate",
      designDesc: "Review konsistensi visual, usability testing dengan pengguna nyata, dan penyusunan panduan aset siap pakai.",
      codeDesc: "Optimasi performa (Lighthouse 95+), version control via GitHub, dan deployment cepat."
    }
  ]
};
