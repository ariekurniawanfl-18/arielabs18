var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var PORT = 3e3;
var aiClient = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
function getFallbackPlanText(entityType, entityName, requirements) {
  const reqStr = requirements ? `"${requirements}"` : "Standar optimalisasi administrasi harian";
  if (entityType.toLowerCase().includes("sekolah")) {
    return `### \u{1F3DB}\uFE0F Blueprint Portal Administrasi Akademik - ${entityName}
*Dirancang khusus oleh Tim Ahli Arielabs18 untuk efisiensi sistem pendidikan.*

#### 1. \u2699\uFE0F Rekomendasi Fitur Portal Akademik
*   **Sistem Absensi Karyawan & Guru Real-time:** Sistem pencatatan absensi berbasis RFID/Geofencing yang terintegrasi langsung dengan rekapitulasi slip gaji bulanan.
*   **Arielabs Portal Akademik Siswa (APAS):** Dasbor digital siswa dan orang tua untuk melihat nilai rapor, riwayat SPP, pengumuman sekolah, serta tugas daring dalam satu aplikasi terpadu.
*   **Administrative Document Automation (E-Arsip):** Generator otomatis surat keterangan aktif sekolah, mutasi siswa, dan pencetakan rapor berformat PDF resmi dengan QR Code tanda tangan terverifikasi.

#### 2. \u26A1 Manfaat Alur Kerja Otomatis (Workflow Transformation)
*   **Sebelum (Manual):** Orang tua mengantre di kasir untuk membayar SPP; staf tata usaha mencatat pembayaran secara manual pada lembar Excel berisiko duplikasi data.
*   **Sesudah (Otomatis):** Pembayaran SPP terintegrasi dengan Payment Gateway virtual account. Pembayaran langsung memicu status "Lunas" di portal ortu dan mengirim kuitansi otomatis via WhatsApp Notifikasi.

#### 3. \u{1F4CA} Skema Utama Database Administrasi
*   \`Tabel_Siswa\`: nisn (PK), nama, kelas, id_ortu, status_aktif
*   \`Tabel_Pembayaran\`: id_bayar (PK), nisn, nominal, tanggal_bayar, status (pending/lunas), token_gateway
*   \`Tabel_Presensi\`: id_presensi (PK), nisn, tanggal, waktu_masuk, waktu_keluar, keterangan

#### 4. \u{1F680} Jadwal Implementasi Arielabs18
*   **Minggu 1:** Analisis kebutuhan & setup cloud server database aman.
*   **Minggu 2-3:** Integrasi portal login guru-siswa dan sistem SMS/WA gateway.
*   **Minggu 4:** Demo operasional, pelatihan staf TU (Tata Usaha), dan Go-Live!`;
  }
  if (entityType.toLowerCase().includes("gereja")) {
    return `### \u26EA Blueprint Arielabs Church Engine (ACE) - ${entityName}
*Dirancang khusus untuk mendukung pelayanan jemaat yang transparan dan efisien.*

#### 1. \u2699\uFE0F Rekomendasi Fitur ACE
*   **Sensus & Database Digital Jemaat (SDDJ):** Perekaman data jemaat terstruktur (kk jemaat, wilayah pelayanan, status baptis/sidi) dengan hak akses berjenjang.
*   **Sistem Absensi Kegiatan Pelayanan:** Memantau partisipasi jemaat dan pelayan ibadah secara digital (QR code presensi jemaat) untuk kegiatan ibadah utama, pemuda, sekolah minggu, dsb.
*   **E-Kas & Portal Keuangan Transparan:** Otomasi kompilasi laporan persembahan, persepuluhan, dan kas diakonia yang dapat dipublikasikan real-time di portal atau dicetak instan menjadi rincian mingguan.

#### 2. \u26A1 Manfaat Alur Kerja Otomatis (Workflow Transformation)
*   **Sebelum (Manual):** Sekretariat gereja mengetik piagam sidi/baptis berulang-ulang dari template Word, mencari surat fisik di dalam lemari berkas tua yang memakan waktu berjam-jam.
*   **Sesudah (Otomatis):** Cukup cari nama jemaat di dasbor admin, pilih jenis dokumen, dan sistem secara otomatis mengisikan detail identitas jemaat ke formulir sertifikat digital resmi yang siap diunduh atau dicetak dalam 5 detik.

#### 3. \u{1F4CA} Skema Utama Database Pelayanan
*   \`Tabel_Jemaat\`: id_jemaat (PK), nama, tgl_lahir, status_baptis, status_sidi, id_sektor
*   \`Tabel_Kegiatan\`: id_kegiatan (PK), nama_kegiatan, tgl_pelaksanaan, id_pelayan_firman
*   \`Tabel_Keuangan\`: id_transaksi (PK), jenis_kas, nominal, tgl_masuk, keterangan, id_pencatat

#### 4. \u{1F680} Jadwal Implementasi Arielabs18
*   **Minggu 1:** Imigrasi data jemaat lama dari Excel/fisik ke database cloud relasional.
*   **Minggu 2-3:** Kustomisasi fitur pengelolaan persembahan & modul persuratan gereja.
*   **Minggu 4:** Pengujian sistem (UAT), training majelis gereja/sekretaris, dan peluncuran resmi.`;
  }
  if (entityType.toLowerCase().includes("yayasan") || entityType.toLowerCase().includes("lembaga")) {
    return `### \u{1F3E2} Blueprint Sistem Manajemen Yayasan Terpadu - ${entityName}
*Standarisasi alur operasional yayasan sosial & komersial demi akuntabilitas prima.*

#### 1. \u2699\uFE0F Rekomendasi Fitur Unggulan
*   **Manajemen Donatur & Sponsor Terpadu:** Sistem pencatatan status donatur, history donasi, serta pengiriman tanda terima donasi PDF otomatis via email/WA.
*   **Sistem Administrasi Inventaris & Logistik:** Otomasi pelacakan aset yayasan, penerimaan bantuan logistik, serta modul inventarisasi stok gudang.
*   **Arielabs Project Tracker (APT):** Panel pemantauan program kerja yayasan, anggaran realisasinya, dan laporan pertanggungjawaban program yang terpadu.

#### 2. \u26A1 Manfaat Alur Kerja Otomatis (Workflow Transformation)
*   **Sebelum (Manual):** Pelaporan hasil kegiatan sosial diketik manual, pengumpulan foto dari berbagai handphone panitia dilakukan secara terpisah-pisah lewat WA yang menurunkan resolusi gambar.
*   **Sesudah (Otomatis):** Tim lapangan dapat mengunggah laporan hasil program berupa deskripsi & foto langsung melalui web portal Arielabs di smartphone mereka; data langsung tersusun rapi menjadi draf laporan resmi sistem.

#### 3. \u{1F4CA} Skema Utama Database Yayasan
*   \`Tabel_Donatur\`: id_donatur (PK), nama, email, no_telp, alamat, status_kategori
*   \`Tabel_Laporan_Kegiatan\`: id_laporan (PK), nama_program, tgl_kegiatan, anggaran_terpakai, dokumentasi_url
*   \`Tabel_Aset_Invertaris\`: id_barang (PK), nama_barang, jumlah, kondisi, sumber_dana

#### 4. \u{1F680} Jadwal Implementasi Arielabs18
*   **Minggu 1:** Setup server, instalasi framework dasar database relasional.
*   **Minggu 2:** Pembuatan modul administrasi donasi dan pelaporan keuangan.
*   **Minggu 3-4:** Sesi uji coba operasional internal, training pengawas yayasan, dan Go-Live!`;
  }
  if (entityType.toLowerCase().includes("umkm") || entityType.toLowerCase().includes("bisnis")) {
    return `### \u{1F6D2} Blueprint Arielabs Business System (ABS) - ${entityName}
*Dibuat untuk melipatgandakan produktivitas usaha kecil-menengah melalui digitalisasi proses.*

#### 1. \u2699\uFE0F Rekomendasi Fitur Unggulan
*   **Order & POS Engine Ringkas:** Pencatatan transaksi penjualan harian yang terintegrasi langsung dengan pemotongan stok gudang otomatis.
*   **E-Catalog & Landing Page Dinamis:** Pembuatan katalog produk digital yang responsif dengan tombol checkout pesan WhatsApp langsung ke bagian admin penjualan.
*   **Dasbor Keuangan & Analisa Laba Rugi:** Grafik analitis bulanan untuk memantau pendapatan kotor, pengeluaran operasional, serta keuntungan bersih secara langsung.

#### 2. \u26A1 Manfaat Alur Kerja Otomatis (Workflow Transformation)
*   **Sebelum (Manual):** Melakukan stok opname berkala secara manual, sering kali terjadi kecolongan stok barang habis tanpa disadari admin sehingga kehilangan calon customer.
*   **Sesudah (Otomatis):** Setiap kali inventory menyentuh ambang kuantitas batas minimum, sistem otomatis memunculkan tanda waspada (warning) di dasbor admin dan menyusun rancangan PO (Purchase Order) baru siap kirim ke supplier.

#### 3. \u{1F4CA} Skema Utama Database UMKM
*   \`Tabel_Produk\`: id_produk (PK), nama_produk, harga_jual, harga_beli, stok_minimum, stok_sekarang
*   \`Tabel_Pelanggan\`: id_pelanggan (PK), nama, no_hp, total_pembelian, tgl_terakhir_order
*   \`Tabel_Transaksi_Penjualan\`: id_transaksi (PK), id_pelanggan, id_produk, qty, total_bayar, tanggal

#### 4. \u{1F680} Jadwal Implementasi Arielabs18
*   **Minggu 1:** Setup e-catalog produk dan integrasi mobile-friendly design.
*   **Minggu 2:** Pembangunan modul backend pencatatan stok dan kas kasir (POS).
*   **Minggu 3:** Pelatihan instan operasional harian, transfer database aman, dan peluncuran produk!`;
  }
  return `### \u2699\uFE0F Blueprint Arielabs Administrative Automation - ${entityName} (Tipe: ${entityType})
*Kerangka automasi operasional generik berstandar premium untuk meningkatkan efisiensi organisasi.*

#### 1. \u2699\uFE0F Rekomendasi Fitur Portal & Sistem
*   **Database Management System Terpusat:** Sistem penyimpanan data yang teratur, cepat diakses, terenkripsi aman, dan mendukung filter instan.
*   **Generator Surat & Dokumen Mandiri:** Membantu pembuatan dokumen organisasi berbasis parameter masukan secara dinamis dan menghasilkan file siap cetak PDF.
*   **Dasbor Analitik Kegiatan:** Menyajikan infografis, status penyelesaian pekerjaan, riwayat aktivitas, dan notifikasi kelancaran alur kerja.

#### 2. \u26A1 Manfaat Alur Kerja Otomatis (Workflow Transformation)
*   **Sebelum (Manual):** Melakukan koordinasi manual lewat WA berulang-ulang, pencatatan tumpang tindih, dan administrasi rentan terhadap kesalahan manusia (human error).
*   **Sesudah (Otomatis):** Seluruh laporan tersimpan dalam sistem cloud terpusat. Setiap kemajuan tugas diperbarui langsung dan draf laporan administratif tersaji secara instan setiap waktu.

#### 3. \u{1F4CA} Skema Utama Database Dasar
*   \`Tabel_Entitas\`: id_entitas (PK), nama, tipe_kategori, tanggal_pembuatan, status_aktif
*   \`Tabel_Administrasi\`: id_dokumen (PK), id_entitas, jenis_dokumen, isi_data_json, tgl_dibuat
*   \`Tabel_Log_Sistem\`: id_log (PK), aksi, pelaku, tanggal_waktu, status_koneksi

#### 4. \u{1F680} Jadwal Implementasi Arielabs18
*   **Minggu 1:** Sesi konsultasi mendalam (In-depth discovery session) & pemetaan arsitektur basis data.
*   **Minggu 2-3:** Koding kustomisasi panel dasbor administrasi sistem terpadu.
*   **Minggu 4:** Pengujian performa, training administrator sistem, dan peluncuran sukses!`;
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  const PROFILE_FILE = import_path.default.join(process.cwd(), "profile_db.json");
  const getProfileData = () => {
    try {
      if (import_fs.default.existsSync(PROFILE_FILE)) {
        return JSON.parse(import_fs.default.readFileSync(PROFILE_FILE, "utf-8"));
      }
    } catch (e) {
      console.error("Error reading profile_db.json", e);
    }
    return {
      name: "Arie Kurniawan FL",
      title: "Software Architect & Founder Arielabs18",
      bio: "Saya adalah seorang Software Engineer dan Admin System Specialist yang berdedikasi tinggi dalam menciptakan inovasi automasi administrasi modern (administrative automation). Melalui Arielabs18, saya berkomitmen mendelegasikan komputasi harian Anda menjadi koding otomatis yang andal, aman, dan siap pakai untuk berbagai sektor instansi dan bisnis di NTT maupun nasional."
    };
  };
  const saveProfileData = (data) => {
    try {
      import_fs.default.writeFileSync(PROFILE_FILE, JSON.stringify(data, null, 2), "utf-8");
    } catch (e) {
      console.error("Error writing profile_db.json", e);
    }
  };
  const ADMIN_DB = {
    username: "admin",
    password: "arielabs18password"
    // Secure Admin Access
  };
  app.get("/api/admin/profile", (req, res) => {
    res.json(getProfileData());
  });
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_DB.username && password === ADMIN_DB.password) {
      res.json({
        success: true,
        token: "session_token_arielabs18_secure_g18",
        message: "Login Berhasil! Sesi admin lokal diaktifkan."
      });
    } else {
      res.status(401).json({
        success: false,
        error: "Konfirmasi Gagal! Kombinasi Username atau Password salah."
      });
    }
  });
  app.post("/api/admin/update-profile", (req, res) => {
    const { token, name, title, bio } = req.body;
    if (token !== "session_token_arielabs18_secure_g18") {
      return res.status(403).json({
        success: false,
        error: "Sesi Kedaluwarsa atau Batil! Hubungi admin untuk akses relasional."
      });
    }
    if (!name || !title || !bio) {
      return res.status(400).json({ success: false, error: "Seluruh kolom data wajib diisi." });
    }
    const newData = { name, title, bio };
    saveProfileData(newData);
    res.json({ success: true, message: "Informasi diri berhasil diperbarui secara permanen!" });
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/generate-plan", async (req, res) => {
    try {
      const { entityType, entityName, requirements } = req.body;
      if (!entityType || !entityName) {
        return res.status(400).json({ error: "entityType and entityName are required" });
      }
      const keyExists = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY" && process.env.GEMINI_API_KEY.trim() !== "";
      if (!keyExists) {
        const simulatedText = getFallbackPlanText(entityType, entityName, requirements);
        return res.json({
          success: true,
          mode: "simulated",
          planText: simulatedText
        });
      }
      const client = getGeminiClient();
      const prompt = `Anda adalah seorang konsultan andal, pakar portal web terpadu, dan sistem automasi administrasi bisnis di Arielabs18 (arielabs18.my.id).
Berikan analisis, rekomendasi fitur, manfaat alur kerja otomatis, dan struktur database dasar untuk:
Nama Lembaga: ${entityName}
Tipe Lembaga: ${entityType}
Kebutuhan Khusus: ${requirements || "Peningkatan efisiensi kerja dan digitalisasi data administrasi umum"}

Tulis rancangan Anda sepenuhnya dalam Bahasa Indonesia dengan format markdown terstruktur yang elegan dan rapi.
Gunakan poin-poin yang jelas, gunakan emoji representatif gratis untuk setiap ikon judul, gunakan gaya penulisan profesional yang optimis dan ramah.
Sertakan 4 bab bahasan utama berikut secara berurutan:
1. Rekomendasi Fitur Portal (Min 3 fitur beserta penjelasan rinci kegunaan fungsionalnya).
2. Transformasi Alur Kerja (Workflow Before vs After).
3. Struktur Database Dasar yang Direkomendasikan (Tabel utama dan kolom deskriptif singkat).
4. Estimasi Waktu & Tahapan Pemasangan Sistem oleh Arielabs18.
Hindari pengulangan instruksi ini dan berikan langsung hasil rancangan dari Arielabs18.`;
      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt
      });
      res.json({
        success: true,
        mode: "ai",
        planText: response.text
      });
    } catch (error) {
      console.error("Gemini API error during generation:", error);
      try {
        const fallbackText = getFallbackPlanText(req.body.entityType, req.body.entityName, req.body.requirements);
        res.json({
          success: true,
          mode: "fallback",
          planText: fallbackText,
          warning: "Koneksi AI terhambat, menyajikan blueprint template cerdas."
        });
      } catch (innerError) {
        res.status(500).json({
          success: false,
          error: error.message || "Gagal memproses rancangan sistem"
        });
      }
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted in development mode.");
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
    console.log("Serving static production files from dist.");
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Arielabs18 Server] Running securely on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
