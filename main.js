let currentActiveTab = 0;
let currentMainTab = 1;

// object variable for storing all content
const contentPublik = [
  {
    id: 0,
    title: "DUMAS Kanwil Kemenag DKI Jakarta",
    btnText: "DUMAS",
    context: `Pengaduan Masyarakat (DUMAS) Kanwil Kemenag DKI Jakarta adalah layanan pengaduan yang ditujukan untuk masyarakat yang ingin menyampaikan keluhan, saran, atau masukan terkait layanan publik yang diberikan oleh Kementerian Agama di wilayah DKI Jakarta.`,
    alurLayanan: [
      "Pemohon menyerahkan identitas dan menyampaikan maksud permohonan melalui FO atau website DUMAS;",
      "FO akan mengkonfirmasi Tim Dumas Kanwil;",
      "Berkas akan diterima langsung oleh Tim Dumas, Tim Dumas mengecek persyaratan, setelah Persyaratan lengkap, Tim Dumas akan memberikan tanda terima berkas pengaduan, mengkonfirmasi alamat/nomor kontak penyampaian surat jawaban hasil tindak lanjut Dumas serta memberikan perkiraan waktu penyelesaian tindak lanjut Dumas tersebut;",
      "Tim Dumas memberikan informasi terkait surat jawaban/hasil tindak lanjut Dumas yang akan disampaikan;",
      "Tim Dumas mengirimkan surat jawaban/hasil tindak lanjut Dumas melalui pos/surat elektronik ataupun menyampaikan langsung kepada pelapor melalui PTSP;",
      "Pemohon menandatangani formulir tanda terima surat jawaban/hasil tindak lanjut Dumas;",
      "Tim Dumas mengarsipkan tanda terima surat jawaban/hasil tindak lanjut Dumas yang telah ditandatangani pemohon, jika penyampaian hasil dilakukan melalui pos/surat elektronik, maka Tim Dumas mengarsipkan bukti pengirimannya",
    ],
    dokumenPersyaratan: ["KTP atau identitas diri lainnya", "Bukti Pendukung Dumas"],
    waktuLayanan: "Layanan ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Tim Kerja Informasi dan Humas",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://dki.kemenag.go.id/dumas/",
  },
  {
    id: 1,
    title: "Layanan Informasi Publik",
    btnText: "Informasi Publik (PPID)",
    context: `Layanan Informasi Publik (PPID) Kanwil Kemenag DKI Jakarta adalah layanan yang menyediakan akses informasi publik kepada masyarakat sesuai dengan Undang-Undang Keterbukaan Informasi Publik. Layanan ini bertujuan untuk meningkatkan transparansi dan akuntabilitas dalam penyelenggaraan pemerintahan.`,
    alurLayanan: [
      "Pemohon mengajukan permohonan informasi melalui meja informasi;",
      "Petugas meja informasi meneruskan permohonan ke PPID;",
      "PPID memberikan jawaban atas permohonan informasi dalam waktu 10 + 7 hari;",
      "Jika pemohon puas, maka selesai;",
      "Jika pemohon tidak puas, maka dapat mengajukan keberatan dalam waktu 30 hari melalui meja informasi;",
      "Atasan PPID memberikan jawaban atas keberatan dalam waktu 30 hari;",
      "Jika pemohon puas atas jawaban keberatan, maka selesai;",
      "Jika pemohon tidak puas, maka dapat mengajukan sengketa informasi ke Komisi Informasi dalam waktu 14 hari.",
    ],
    dokumenPersyaratan: [
      "surat permohonan ijin penelitian resmi dari institusi yang bersangkutan",
      "Foto copy Kartu Mahasiswa/ KTP (identitas)",
      "Proposal penelitian yang ditandatangani dosen pembimbing.",
    ],
    waktuLayanan: "Layanan ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Petugas PTSP",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://dki.kemenag.go.id/ppid/",
  },
  {
    id: 2,
    title: "Izin Penelitian Di Kanwil Kemenag DKI Jakarta",
    btnText: "Izin Penelitian",
    context: `Layanan Izin Penelitian di Kanwil Kemenag DKI Jakarta adalah layanan yang memberikan izin kepada peneliti untuk melakukan penelitian di lingkungan Kementerian Agama di wilayah DKI Jakarta. Layanan ini bertujuan untuk mendukung penelitian yang berkaitan dengan kebijakan dan program Kementerian Agama.`,
    alurLayanan: [
      "Pemohon membawa Surat Permohonan ke PTSP;",
      "PTSP memberikan tanda terima bagi pemohon;",
      "Berkas dinaikkan ke Kakanwil untuk diberikan disposisi pimpinan;",
      "Bagian yang menerima disposisi meneliti, menelaah, dan memvalidasi apakah izin penelitian dapat diberikan atau tidak;",
      "Apabila diizinkan, akan memberikan balasan kepada pemohon;",
      "Surat Izin Penelitian dimintakan tanda tangan oleh Kepala Kantor Wilayah atau Pejabat yang berwenang;",
      "Petugas akan memberikan Surat Izin Penelitian kepada pemohon.",
    ],
    dokumenPersyaratan: [
      "Membawa surat permohonan resmi dari institusi yang bersangkutan",
      "Foto copy Kartu Pelajar/Identitas",
    ],
    waktuLayanan: "Layanan ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Petugas PTSP",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://dki.kemenag.go.id/ptsp/",
  },
  {
    id: 3,
    title: "Izin Magang Di Kanwil Kemenag DKI Jakarta",
    btnText: "Izin Magang",
    context: `Layanan Izin Magang di Kanwil Kemenag DKI Jakarta adalah layanan yang memberikan izin kepada mahasiswa atau pelajar untuk melakukan magang di lingkungan Kementerian Agama di wilayah DKI Jakarta. Layanan ini bertujuan untuk mendukung pengembangan kompetensi dan pengalaman kerja bagi mahasiswa atau pelajar.`,
    alurLayanan: [
      "Pengguna mengakses layanan Izin Magang Kanwil Kemenag DKI Jakarta.",
      "Pengguna mengisi formulir permohonan izin magang yang telah disediakan dengan informasi yang diperlukan.",
      "Pengguna mengirimkan formulir permohonan izin magang tersebut.",
      "Petugas akan memproses permohonan izin magang dan memberikan tanggapan kepada pengguna.",
    ],
    dokumenPersyaratan: [
      "KTP atau identitas diri lainnya",
      "Deskripsi magang yang akan dilakukan dengan jelas dan lengkap",
      "Surat rekomendasi dari lembaga atau institusi pendidikan yang menyatakan bahwa pengguna adalah mahasiswa atau pelajar yang sedang menempuh pendidikan",
    ],
    waktuLayanan: "Layanan ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Petugas PTSP",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://dki.kemenag.go.id/ptsp/",
  },
  {
    id: 4,
    title: "Website Resmi Kanwil Kemenag DKI Jakarta",
    btnText: "Website Resmi",
    context: `Website Resmi Kanwil Kemenag DKI Jakarta adalah portal informasi yang menyediakan berbagai informasi terkait Kementerian Agama di wilayah DKI Jakarta. Website ini bertujuan untuk memberikan akses informasi yang transparan dan akuntabel kepada masyarakat.`,
    alurLayanan: [
      "Pengguna mengakses website resmi Kanwil Kemenag DKI Jakarta.",
      "Pengguna dapat mencari informasi yang dibutuhkan melalui menu atau fitur pencarian yang tersedia di website.",
      "Pengguna dapat menghubungi petugas melalui kontak yang tersedia di website jika membutuhkan informasi lebih lanjut.",
    ],
    dokumenPersyaratan: [
      "Tidak ada dokumen persyaratan yang diperlukan untuk mengakses website resmi.",
    ],
    waktuLayanan: "Website ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Petugas PTSP",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://dki.kemenag.go.id/",
  },
];

const contentPegawai = [
  {
    id: 0,
    title: "Sistem Informasi Kepegawaian",
    btnText: "SIMPEG",
    context: `Sistem Informasi Kepegawaian (SIMPEG) Kanwil Kemenag DKI Jakarta adalah sistem yang digunakan untuk mengelola data kepegawaian di lingkungan Kementerian Agama di wilayah DKI Jakarta. Sistem ini bertujuan untuk meningkatkan efisiensi dan transparansi dalam pengelolaan data kepegawaian.`,
    alurLayanan: [
      "Pegawai mengakses Sistem Informasi Kepegawaian (SIMPEG) Kanwil Kemenag DKI Jakarta.",
      "Pegawai melakukan login menggunakan akun yang telah diberikan.",
      "Pegawai dapat mengakses berbagai fitur yang tersedia, seperti pengelolaan data pribadi, pengajuan cuti, dan lain-lain.",
      "Pegawai dapat mengajukan permohonan atau melakukan perubahan data sesuai kebutuhan.",
      "Petugas akan memproses permohonan atau perubahan data yang diajukan oleh pegawai.",
    ],
    dokumenPersyaratan: [
      "KTP atau identitas diri lainnya",
      "Data kepegawaian yang diperlukan sesuai dengan fitur yang digunakan",
    ],
    waktuLayanan: "Sistem ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Bagian Tata Usaha - Tim Fungsi Kepegawaian",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "https://simpeg5.kemenag.go.id/",
  },
  {
    id: 1,
    title: "Absensi Kemenag",
    btnText: "Absensi",
    context: `Layanan Absensi Kemenag Kanwil DKI Jakarta adalah sistem yang digunakan untuk mencatat kehadiran pegawai di lingkungan Kementerian Agama di wilayah DKI Jakarta. Sistem ini bertujuan untuk meningkatkan disiplin dan akuntabilitas pegawai.`,
    alurLayanan: [
      "Pegawai mengakses sistem Absensi Kemenag Kanwil DKI Jakarta.",
      "Pegawai melakukan login menggunakan akun yang telah diberikan.",
      "Pegawai mencatat kehadiran dengan melakukan absensi melalui sistem.",
      "Sistem akan mencatat waktu masuk dan keluar pegawai secara otomatis.",
      "Petugas dapat memantau kehadiran pegawai melalui laporan yang tersedia di sistem.",
    ],
    dokumenPersyaratan: [
      "KTP atau identitas diri lainnya",
      "Akun pegawai yang telah dibuat di sistem Absensi Kemenag",
    ],
    waktuLayanan: "Sistem ini tersedia 24 jam setiap hari.",
    penanggungJawab: "Bagian Tata Usaha - Tim Fungsi Kepegawaian",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "http://absensi.kemenag.go.id/",
  },
  {
    id: 2,
    title: "Sistem Informasi Kinerja Absensi Pegawai",
    btnText: "SIKAP",
    context: `Sistem Informasi Kinerja Absensi Pegawai (SIKAP) Kanwil Kemenag DKI Jakarta adalah sistem yang digunakan untuk mengelola data kinerja dan absensi pegawai di lingkungan Kementerian Agama di wilayah DKI Jakarta. Sistem ini bertujuan untuk meningkatkan transparansi dan akuntabilitas dalam pengelolaan kinerja pegawai.`,
    alurLayanan: [
      "Pegawai mengakses Sistem Informasi Kinerja Absensi Pegawai (SIKAP) Kanwil Kemenag DKI Jakarta.",
    ],
    dokumenPersyaratan: [""],
    waktuLayanan: "",
    penanggungJawab: "Bagian Tata Usaha - Tim Fungsi Kepegawaian",
    biaya: "Layanan ini tidak dikenakan biaya.",
    kontak: "",
    link: "http://sikap.kanwilkemenagprovdki.id:82/login",
  },
];

function loadCard(id) {
  const title = document.getElementById("card-title");
  if (title) {
    title.textContent = contentPublik[id].title;
  }

  const cardText = document.getElementById("card-text");
  if (cardText) {
    cardText.textContent = contentPublik[id].context;
  }

  const btnLink = document.getElementById("btn_link");
  if (btnLink) {
    btnLink.href = contentPublik[id].link;
    btnLink.target = "_blank";
  }

  const alurLayanan = document.getElementById("alur-layanan");
  if (alurLayanan) {
    alurLayanan.innerHTML = "";
    contentPublik[id].alurLayanan.forEach((item, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${item}`;
      alurLayanan.appendChild(p);
    });
  }

  const dokumenPersyaratan = document.getElementById("dokumen-persyaratan");
  if (dokumenPersyaratan) {
    dokumenPersyaratan.innerHTML = "";
    contentPublik[id].dokumenPersyaratan.forEach((item, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${item}`;
      dokumenPersyaratan.appendChild(p);
    });
  }

  const waktuLayanan = document.getElementById("waktu-layanan");
  if (waktuLayanan) {
    waktuLayanan.textContent = contentPublik[id].waktuLayanan;
  }

  const penanggungJawab = document.getElementById("penanggung-jawab");
  if (penanggungJawab) {
    penanggungJawab.textContent = contentPublik[id].penanggungJawab;
  }
}

function loadCardPegawai(id) {
  const title = document.getElementById("card-title-pegawai");
  if (title) {
    title.textContent = contentPegawai[id].title;
  }

  const cardText = document.getElementById("card-text-pegawai");
  if (cardText) {
    cardText.textContent = contentPegawai[id].context;
  }

  const btnLink = document.getElementById("btn_link");
  if (btnLink) {
    btnLink.href = contentPegawai[id].link;
    btnLink.target = "_blank";
  }

  const alurLayanan = document.getElementById("alur-layanan-pegawai");
  if (alurLayanan) {
    alurLayanan.innerHTML = "";
    contentPegawai[id].alurLayanan.forEach((item, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${item}`;
      alurLayanan.appendChild(p);
    });
  }

  const dokumenPersyaratan = document.getElementById("dokumen-persyaratan-pegawai");
  if (dokumenPersyaratan) {
    dokumenPersyaratan.innerHTML = "";
    contentPegawai[id].dokumenPersyaratan.forEach((item, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${item}`;
      dokumenPersyaratan.appendChild(p);
    });
  }

  const waktuLayanan = document.getElementById("waktu-layanan-pegawai");
  if (waktuLayanan) {
    waktuLayanan.textContent = contentPegawai[id].waktuLayanan;
  }

  const penanggungJawab = document.getElementById("penanggung-jawab-pegawai");
  if (penanggungJawab) {
    penanggungJawab.textContent = contentPegawai[id].penanggungJawab;
  }
}

function loadNav() {
  const navList = document.getElementById("nav-list");
  navList.innerHTML = ""; // Clear existing buttons
  for (let i = 0; i < contentPublik.length; i++) {
    if (i === 0) {
      const button = document.createElement("button");
      button.className = "btn btn-lg fs-6 text-start text-uppercase btn-brand-2 w-100";
      button.id = `l-pub-${i}`;
      button.textContent = contentPublik[i].btnText;
      button.onclick = function () {
        changeButtonColor(i);
      };
      navList.appendChild(button);
    } else {
      const button = document.createElement("button");
      button.className = "btn btn-lg fs-6 text-start text-uppercase btn-outline-brand-2 w-100";
      button.id = `l-pub-${i}`;
      button.textContent = contentPublik[i].btnText;
      button.onclick = function () {
        changeButtonColor(i);
      };
      navList.appendChild(button);
    }
  }
}

function loadNavPegawai() {
  const navList = document.getElementById("nav-list-pegawai");
  // Clear existing buttons
  navList.innerHTML = "";
  for (let i = 0; i < contentPegawai.length; i++) {
    if (i === 0) {
      const button = document.createElement("button");
      button.className = "btn btn-lg fs-6 text-start text-uppercase btn-brand-2 w-100";
      button.id = `l-peg-${i}`;
      button.textContent = contentPegawai[i].btnText;
      button.onclick = function () {
        changeButtonColorPegawai(i);
      };
      navList.appendChild(button);
    } else {
      const button = document.createElement("button");
      button.className = "btn btn-lg fs-6 text-start text-uppercase btn-outline-brand-2 w-100";
      button.id = `l-peg-${i}`;
      button.textContent = contentPegawai[i].btnText;
      button.onclick = function () {
        changeButtonColorPegawai(i);
      };
      navList.appendChild(button);
    }
  }
}

window.onload = function () {
  loadCard(currentActiveTab);
  loadNav();
  loadNavPegawai();
};

function changeButtonColor(id) {
  const activetab = document.getElementById(`l-pub-${currentActiveTab}`);
  activetab.classList.remove("btn-brand-2");
  activetab.classList.add("btn-outline-brand-2");

  const button = document.getElementById(`l-pub-${id}`);
  if (button) {
    button.classList.remove("btn-outline-brand-2");
    button.classList.add("btn-brand-2");
  }
  loadCard(id);
  currentActiveTab = id;
}

function changeButtonColorPegawai(id) {
  const activetab = document.getElementById(`l-peg-${currentActiveTab}`);
  if (activetab) {
    activetab.classList.remove("btn-brand-2");
    activetab.classList.add("btn-outline-brand-2");
  }

  const button = document.getElementById(`l-peg-${id}`);
  if (button) {
    button.classList.remove("btn-outline-brand-2");
    button.classList.add("btn-brand-2");
  }
  loadCardPegawai(id);
  currentActiveTab = id;
}

function changeMainTab(id) {
  const tab = id === 1 ? "pub" : "peg";
  document.getElementById(`tab-${currentMainTab}`).classList.remove("active");
  document.getElementById(`tab-${currentMainTab}`).classList.remove("font-bold");
  document.getElementById(`tab-${id}`).classList.add("active");
  document.getElementById(`tab-${id}`).classList.add("font-bold");
  document.getElementById(`l-${currentMainTab}`).classList.add("d-none");
  document.getElementById(`l-${id}`).classList.remove("d-none");
  currentActiveTab = 0;
  if (id === 1) {
    loadCard(0);
    loadNav();
  } else {
    loadCardPegawai(0);
    loadNavPegawai();
  }

  //   document.getElementById(`l-${tab}-${0}`).classList.remove("btn-brand-2");
  //   document.getElementById(`l-${tab}-${0}`).classList.add("btn-outline-brand-2");
  currentMainTab = id;
}

let searchTimeout;
let searchInputCount = 0;

function debounceSearch(input) {
  searchInputCount = input.length;
  if (searchInputCount % 3 !== 0) return;

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(input);
  }, 300);

  if (searchInputCount >= 1) {
    const searchIcon = document.getElementById("search-icon");
    const searchIconPegawai = document.getElementById("search-icon-pegawai");
    searchIcon.classList.remove("bi-search");
    searchIcon.classList.add("bi-x-circle");
    searchIconPegawai.classList.remove("bi-search");
    searchIconPegawai.classList.add("bi-x-circle");
    setSearchIconToClear(searchIcon, "search-input");
    setSearchIconToClear(searchIconPegawai, "search-input-pegawai");
  } else {
    const searchIcon = document.getElementById("search-icon");
    const searchIconPegawai = document.getElementById("search-icon-pegawai");
    searchIcon.classList.remove("bi-x-circle");
    searchIcon.classList.add("bi-search");
    searchIconPegawai.classList.remove("bi-x-circle");
    searchIconPegawai.classList.add("bi-search");
  }
}

function setSearchIconToClear(icon, inputId) {
  icon.onclick = function () {
    const input = document.getElementById(inputId);
    if (input) {
      input.value = "";
      performSearch("");
      icon.classList.remove("bi-x-circle");
      icon.classList.add("bi-search");
    }
  };
}

function performSearch(query) {
  const lowerQuery = query.trim().toLowerCase();
  let results = [];
  if (currentMainTab === 1) {
    results = contentPublik.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.btnText.toLowerCase().includes(lowerQuery)
    );

    updateNavList("nav-list", results, "pub");
  } else if (currentMainTab === 2) {
    results = contentPegawai.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.btnText.toLowerCase().includes(lowerQuery)
    );

    updateNavList("nav-list-pegawai", results, "peg");
  }
}

function updateNavList(navId, items, type) {
  const navList = document.getElementById(navId);
  if (!navList) return;
  navList.innerHTML = "";
  items.forEach((item, i) => {
    const button = document.createElement("button");
    button.className =
      i === 0
        ? "btn btn-lg fs-6 text-start text-uppercase btn-brand-2 w-100"
        : "btn btn-lg fs-6 text-start text-uppercase btn-outline-brand-2 w-100";
    button.id = `l-${type}-${item.id}`;
    button.textContent = item.btnText;
    button.onclick = function () {
      if (type === "pub") {
        changeButtonColor(item.id);
      } else {
        // Implement changeButtonColorPegawai if needed
        loadCardPegawai(item.id);
      }
    };
    navList.appendChild(button);
  });
}

// Example usage: Attach to your search input
document
  .getElementById("search-input")
  .addEventListener("input", (e) => debounceSearch(e.target.value));
document
  .getElementById("search-input-pegawai")
  .addEventListener("input", (e) => debounceSearch(e.target.value));
