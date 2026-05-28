import React, { useState } from "react";
import { 
  Building2, School, Landmark, GraduationCap, RefreshCw, 
  Sparkles, Check, Database, Share2, ClipboardList, HelpCircle, Eye, ArrowRight
} from "lucide-react";

// Micro-parser for markdown to present Gemini plans securely without imports issues
function ElegantMarkdownParser({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="markdown-body space-y-4 text-left leading-relaxed font-sans select-text">
      {lines.map((line, idx) => {
        let trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-2" />;

        // Header ###
        if (trimmed.startsWith("###")) {
          const content = trimmed.replace(/^###\s*/, "");
          return (
            <h3 key={idx} className="text-lg font-bold text-brand-black border-l-4 border-brand-red pl-3 mt-6 mb-2">
              {content}
            </h3>
          );
        }

        // Header ####
        if (trimmed.startsWith("####")) {
          const content = trimmed.replace(/^####\s*/, "");
          return (
            <h4 key={idx} className="text-sm font-bold uppercase tracking-wider text-brand-gold mt-4 mb-2">
              {content}
            </h4>
          );
        }

        // List item starting with "*" or "-"
        if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
          const content = trimmed.replace(/^[\*\-]\s*/, "");
          // Bold processing
          const boldParts = content.split("**");
          return (
            <div key={idx} className="flex items-start space-x-2.5 ml-3 my-1">
              <span className="text-brand-red shrink-0 text-md mt-0.5">•</span>
              <p className="text-sm text-gray-700">
                {boldParts.map((part, pIdx) => {
                  return pIdx % 2 === 1 ? <strong key={pIdx} className="font-extrabold text-brand-black">{part}</strong> : part;
                })}
              </p>
            </div>
          );
        }

        // Raw code inline or block
        if (trimmed.startsWith("`") && trimmed.endsWith("`")) {
          const content = trimmed.slice(1, -1);
          return (
            <pre key={idx} className="bg-brand-black text-brand-gold/90 p-3 rounded-xl font-mono text-xs overflow-x-auto border border-brand-gold/10 my-2">
              <code>{content}</code>
            </pre>
          );
        }

        // Regular paragraph with bold ** support
        const boldParts = trimmed.split("**");
        return (
          <p key={idx} className="text-sm text-gray-600 leading-relaxed my-1.5">
            {boldParts.map((part, pIdx) => {
              return pIdx % 2 === 1 ? <strong key={pIdx} className="font-extrabold text-[#111]">{part}</strong> : part;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function Services() {
  // Simulator input state
  const [institutionType, setInstitutionType] = useState("Sekolah / Lembaga Pendidikan");
  const [institutionName, setInstitutionName] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [loading, setLoading] = useState(false);
  const [stdoutLogs, setStdoutLogs] = useState<string[]>([]);
  const [renderedPlan, setRenderedPlan] = useState<any | null>(null);

  // Layanan Portal Cards Data
  const servicesList = [
    {
      id: "srv-school",
      icon: <GraduationCap size={24} className="text-brand-red" />,
      title: "Framework Portal Sekolah",
      shortDesc: "Automasi rekap nilai, absensi, keuangan SPP & koordinasi wali murid.",
      features: [
        "Sistem Absensi RFID kartu pelajar",
        "Otomatisasi cetak dokumen Rapor siswa",
        "Tagihan SPP Virtual Account & WA Otomatis",
        "E-Arsip data guru & absensi mengajar"
      ]
    },
    {
      id: "srv-church",
      icon: <Landmark size={24} className="text-brand-gold" />,
      title: "Church Portal Engine",
      shortDesc: "Manajemen sensus pelayan jemaat, keuangan koinonia, dan persuratan digital.",
      features: [
        "Sensus KK jemaat & data baptis/sidi",
        "QR Code presensi kegiatan & ibadah",
        "Generator Piagam Baptis otomatis dalam dtk",
        "Laporan keuangan mingguan real-time terpadu"
      ]
    },
    {
      id: "srv-gov-ngo",
      icon: <Building2 size={24} className="text-brand-red-dark" />,
      title: "Sistem Administrasi Yayasan & Desa",
      shortDesc: "Optimasi pendaftaran bantuan, kearsipan surat pengantar, dan aset logistik.",
      features: [
        "Pencatatan database donatur terenkripsi",
        "Sistem disposisi surat masuk & keluar",
        "Generator surat pengantar desa ber-QR Code",
        "Pelacakan aset & pergudangan yayasan"
      ]
    },
    {
      id: "srv-umkm",
      icon: <Database size={24} className="text-emerald-600" />,
      title: "Business System & POS UMKM",
      shortDesc: "Manajemen pencatatan transaksi kasir, e-catalog interaktif, dan notifikasi stok.",
      features: [
        "E-Catalog produk siap share WhatsApp",
        "Rekap laba kotor & bersih mingguan",
        "Pengurang stok real-time saat produk laku",
        "Otomatisasi pembuatan nota belanja / invoice"
      ]
    }
  ];

  // Run Blueprint AI Generator Simulation
  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!institutionName.trim()) {
      alert("Harap masukkan Nama Lembaga terlebih dahulu.");
      return;
    }

    setLoading(true);
    setRenderedPlan(null);
    setStdoutLogs([]);

    const runLogs = [
      "🔄 Menginisiasi koneksi ke Arielabs18 Administrative Cloud...",
      "🔍 Menganalisis parameter instansi: " + institutionType,
      "⚙️ Memetakan kebutuhan khusus dan alur kertas kerja tradisional...",
      "📊 Menyusun rekomendasi skema schema database relasional aman...",
      "🧠 Mengaktifkan Arielabs AI System (Gemini-3.5-flash) untuk optimalisasi..."
    ];

    // Stream logs inside developer look
    for (let i = 0; i < runLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setStdoutLogs((prev) => [...prev, runLogs[i]]);
    }

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          entityType: institutionType,
          entityName: institutionName,
          requirements: specialNeeds
        })
      });

      const data = await response.json();
      if (data.success) {
        setRenderedPlan(data);
        setStdoutLogs((prev) => [...prev, "🚀 Blueprint berhasil diciptakan dengan aman! Menyiapkan dasbor peninjau..."]);
      } else {
        throw new Error(data.error || "Gagal menghasilkan rancangan.");
      }
    } catch (err: any) {
      console.error(err);
      setStdoutLogs((prev) => [...prev, "❌ Terjadi masalah koneksi server. Menampilkan draf cadangan..."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="layanan" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-brand-red font-bold uppercase">
            Layanan Unggulan Framework Bisnis
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-brand-black mt-2">
            Portal Engine & Administrative Automation
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Menghapus beban kerja administratif manual yang melelahkan. Kami merakit sistem backend pintar yang melakukan pengisian formulir, pencatatan transaksi, absensi, dan penagihan secara otomatis.
          </p>
        </div>

        {/* SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-gold/60 transition duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-2 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-brand-black tracking-tight leading-none">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-6 font-sans">
                  {service.shortDesc}
                </p>

                {/* Bullets feature list */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-gray-700 font-semibold font-sans">
                      <Check size={13} className="text-brand-red shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-brand-gold tracking-wider">
                  ⚡ Ready Framework
                </span>
                <a 
                  href="#order"
                  className="font-bold text-brand-red hover:underline flex items-center gap-1 hover:text-brand-red-dark"
                >
                  Pesan Sistem <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE COMPONENT: SIMULATOR PORTAL CODES (AI POWERED) */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Decorative halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-black rounded-3xl blur-md opacity-20 pointer-events-none" />
          
          <div className="relative bg-white border-2 border-brand-gold/60 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-150">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 bg-brand-black border border-brand-gold text-brand-gold rounded-xl flex items-center justify-center">
                  <Sparkles size={16} className="animate-spin duration-3500 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-brand-black tracking-tight">
                    Arielabs Blueprint Planner Demo
                  </h3>
                  <p className="text-[11px] font-mono text-brand-red font-bold uppercase mt-0.5 tracking-wider">
                    Interactive AI System Simulator
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-center text-[10px] font-mono bg-brand-black text-brand-gold font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-brand-gold/30">
                Core v4.0 Active
              </span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
              Masukkan informasi dasar lembaga Anda di bawah ini, dan saksikan mesin algoritma kami merancang rencana penataan database, alur kerja otomatis (before vs after), serta estimasi timeline pengerjaan portal secara instan!
            </p>

            {/* Simulated Inputs Form */}
            <form onSubmit={handleGeneratePlan} className="grid grid-cols-1 sm:grid-cols-12 gap-5">
              <div className="col-span-12 sm:col-span-4">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                  Sektor Lembaga Anda *
                </label>
                <select
                  value={institutionType}
                  onChange={(e) => setInstitutionType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-xs font-semibold text-brand-black"
                >
                  <option value="Sekolah / Lembaga Pendidikan">Sekolah / Lembaga Pendidikan</option>
                  <option value="Gereja / Rumah Pelayanan">Gereja / Rumah Pelayanan</option>
                  <option value="Yayasan / Organisasi Sosial">Yayasan / Organisasi Sosial</option>
                  <option value="Lembaga Pemerintah Desa/Kecamatan">Lembaga Pemerintah Desa/Kecamatan</option>
                  <option value="UMKM / Toko Bisnis Mandiri">UMKM / Toko Bisnis Mandiri</option>
                </select>
              </div>

              <div className="col-span-12 sm:col-span-4">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                  Nama Lembaga / Bisnis *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMKN 4 Kupang, GMIT Getsemani"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-xs bg-white text-brand-black placeholder:text-gray-400"
                />
              </div>

              <div className="col-span-12 sm:col-span-4 flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[36px] bg-brand-black text-brand-gold border border-brand-gold font-extrabold uppercase text-xs tracking-wider rounded-xl transition duration-300 hover:bg-brand-red hover:text-white flex items-center justify-center gap-2 hover:shadow-md cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={13} className="animate-spin text-brand-gold" />
                      Mengkalkulasi...
                    </>
                  ) : (
                    <>
                      <Sparkles size={13} className="text-brand-gold animate-bounce" />
                      Rancang Blueprint
                    </>
                  )}
                </button>
              </div>

              <div className="col-span-12">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                  Kebutuhan Sistem Khusus (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Cetak piagam digital sidi otomatis, Notifikasi Slip Gaji Guru..."
                  value={specialNeeds}
                  onChange={(e) => setSpecialNeeds(e.target.value)}
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-xs bg-white text-brand-black"
                />
              </div>
            </form>

            {/* LIVE CONSOLE LOGS SCREEN */}
            {(loading || stdoutLogs.length > 0) && (
              <div className="mt-6 bg-brand-charcoal border border-brand-gold/30 rounded-2xl p-4 font-mono text-xs text-left overflow-hidden">
                <span className="block text-[10px] text-gray-400 border-b border-brand-gold/10 pb-1.5 mb-2 font-bold uppercase">
                  📡 Live Compilation Progress Logs
                </span>
                <div className="space-y-1.5 max-h-[130px] overflow-y-auto pr-1">
                  {stdoutLogs.map((log, i) => (
                    <div key={i} className="flex space-x-2 text-brand-gold/85">
                      <span className="text-brand-red font-bold">&gt;</span>
                      <p>{log}</p>
                    </div>
                  ))}
                  {loading && (
                    <div className="h-5 flex items-center space-x-1.5 text-white italic animate-pulse">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce delay-150" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce delay-300" />
                      <span className="text-[11px] pl-1">Menunggu respon server Arielabs AI...</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* COMPLETED RENDERING RENDERED BOARD */}
            {renderedPlan && (
              <div className="mt-6 animate-fadeIn">
                <div className="bg-red-50/25 border-2 border-brand-gold/50 rounded-2xl p-6 relative overflow-hidden">
                  
                  {/* Decorative stamp shadow */}
                  <div className="absolute top-2 right-2 flex items-center space-x-1 font-mono text-[9px] bg-brand-gold text-brand-black font-extrabold px-2 py-0.5 rounded-md uppercase">
                    <span>{renderedPlan.mode === "ai" ? "Gemini AI Generated" : "Pre-Compiled Schema"}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4 border-b border-brand-gold/20 pb-2.5">
                    <ClipboardList size={18} className="text-brand-red shrink-0" />
                    <span className="text-sm font-extrabold text-brand-black font-sans">
                      Arsip Rancangan Blueprint Sistem: {institutionName}
                    </span>
                  </div>

                  {/* Generated Plan Detail Rendering */}
                  <ElegantMarkdownParser text={renderedPlan.planText} />

                  {/* Warning label if fallbacked */}
                  {renderedPlan.warning && (
                    <div className="mt-4 p-2.5 bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500 rounded-md text-[11px] font-semibold text-left leading-relaxed">
                      💡 {renderedPlan.warning}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-brand-gold/25 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-[10px] text-gray-500 font-mono">
                      Cetak biru siap diimplementasikan. Gunakan rujukan ini untuk formulir order di bawah.
                    </p>
                    <a
                      href="#order"
                      onClick={() => {
                        // Smoothly scroll and pre-fill some fields in Order Form if needed (can trigger by standard element manipulation or simple dispatch)
                        const catInput = document.getElementById("order-category-input") as HTMLSelectElement;
                        if (catInput) catInput.value = institutionType;
                        const insInput = document.getElementById("order-org-input") as HTMLInputElement;
                        if (insInput) insInput.value = institutionName;
                        const reqInput = document.getElementById("order-req-input") as HTMLTextAreaElement;
                        if (reqInput) reqInput.value = `Rancangan sistem AI: ${institutionType} untuk ${institutionName}. ${specialNeeds}`;
                      }}
                      className="px-5 py-2 bg-brand-red text-white hover:bg-brand-red-dark font-extrabold uppercase text-xs tracking-wider rounded-xl transition duration-300 flex items-center gap-1 leading-none shadow-sm cursor-pointer"
                    >
                      Pindahkan ke Form Order
                      <ArrowRight size={12} />
                    </a>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
