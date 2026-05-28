import React, { useState } from "react";
import { ExternalLink, Layers, Globe, GraduationCap, Landmark, Sparkles, Code2, ClipboardList } from "lucide-react";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const portfolioItems: PortfolioItem[] = [
    {
      id: "port-smkn4",
      title: "Sistem E-Piket Resmi SMKN 4 Kupang",
      description: "Pusat informasi akademik sekolah, administrasi piket, kelulusan, penerimaan siswa baru, informasi kejuruan, serta agenda internal guru.",
      url: "https://smkn4kupang.rf.gd",
      category: "Pendidikan",
      tags: ["Portal Akademik", "Bootstrap", "PHP", "School CMS"],
      features: ["Sistem Pengumuman Kelulusan", "Direktori Data Guru", "Galeri Kejuruan Teknik"]
    },
    {
      id: "port-getsemani",
      title: "Web Portal Jemaat GMIT Getsemani Mere",
      description: "Portal digital untuk optimalisasi pelayanan jemaat, laporan warta jemaat, tata ibadah, keuangan persembahan, dan rekap aksi sosial.",
      url: "https://gmitgetsemanimere.rf.gd",
      category: "Keagamaan",
      tags: ["Church Portal", "Church Management", "PHP MySQL"],
      features: ["Laporan Keuangan Transparan", "Jadwal Majelis & Pengkhotbah", "Sensus Jemaat Baptis"]
    },
    {
      id: "port-uppprof",
      title: "Portal Unit Pelayanan (UPP-Prof) GMIT JKK",
      description: "Portal pendukung komisi bidang profesional GMIT Jemaat Koinonia Kupang untuk sinkronisasi aksi kemitraan dan bakti masyarakat NTT.",
      url: "https://upp-prof-gmitjkk.rf.gd",
      category: "Keagamaan",
      tags: ["Admin System", "Relational Database", "Corporate Web"],
      features: ["Agenda Kegiatan Kemitraan", "Database Anggota Profesi", "Sistem Arsip Proposal"]
    },
    {
      id: "port-absenmhs",
      title: "Aplikasi Absensi Mahasiswa Online",
      description: "Prototipe sistem presensi digital mahasiswa terpadu dengan otentikasi login admin, rekapitulasi data absen mingguan, dan rekap PDF.",
      url: "https://ariekfl.xo.je/absensi_mahasiswa/index.php",
      category: "Sistem Admin",
      tags: ["Web App", "Absensi Siswa", "PHP System"],
      features: ["Otentikasi Login Dosen", "Unduh Rekap Spreadsheet", "Pencatatan Presensi Real-Time"]
    },
    {
      id: "port-absenjemaat",
      title: "Sistem Kehadiran Kegiatan GMIT Mere",
      description: "Sub-module automasi rekap absensi jemaat pada ibadah pelayan jemaat, pemuda, dan kegiatan kepanitiaan hari besar gereja.",
      url: "https://gmitgetsemanimere.rf.gd/absensi_kegiatan_gmitgmere",
      category: "Keagamaan",
      tags: ["RFID Tracker", "Activity Log", "Specialized Web"],
      features: ["QR Presensi Cepat", "Sistem Database Log Kehadiran", "Statistik Partisipasi Kegiatan"]
    }
  ];

  const categories = ["All", "Pendidikan", "Keagamaan", "Sistem Admin"];

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono tracking-widest text-brand-red font-bold uppercase">
            Hasil Karya Nyata
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-brand-black mt-2">
            Galeri & Portfolio Sistem
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Kumpulan aplikasi web fungsional yang telah dipublikasikan dan aktif membantu efisiensi birokrasi di instansi sekolah, gereja, maupun sistem administrasi perguruan tinggi.
          </p>
        </div>

        {/* Categories Tab button selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-portfolio-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-brand-red text-white border-brand-red shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat === "All" ? "Semua Proyek" : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-150 rounded-2.5xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold transition duration-350 text-left flex flex-col h-full"
            >
              {/* Card Browser Mockup Header */}
              <div className="bg-brand-charcoal text-white px-4 py-3 flex items-center justify-between border-b border-brand-gold/25">
                <div className="flex space-x-1.5 items-center">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block" />
                  <span className="w-2.5 h-2.5 bg-brand-gold rounded-full inline-block" />
                  <span className="w-2.5 h-2.5 bg-green-600 rounded-full inline-block" />
                </div>
                <div className="flex items-center space-x-1 bg-brand-black px-2.5 py-0.5 rounded-md font-mono text-[9px] text-brand-gold border border-brand-gold/15 truncate max-w-[150px]">
                  <Globe size={9} />
                  <span>{item.url.replace("https://", "")}</span>
                </div>
              </div>

              {/* CARD CONTENTS BODY */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category icon tag and label */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-extrabold uppercase rounded-md border border-brand-gold/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Verified Active Link</span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-brand-black leading-snug tracking-tight mb-2 group-hover:text-brand-red transition duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans mb-5">
                    {item.description}
                  </p>

                  {/* Modules Bullets highlights */}
                  {item.features && (
                    <div className="border-t border-gray-100 pt-3 mb-4">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Modul Terpasang:
                      </span>
                      <ul className="space-y-1.5">
                        {item.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start space-x-1.5 text-[11px] text-gray-700 font-semibold leading-tight font-sans">
                            <span className="text-brand-red text-xs mt-[-2px]">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tags and trigger button row */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {item.tags.map((tg, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 text-gray-500 text-[9px] font-mono px-2 py-0.5 rounded-md border border-gray-100"
                      >
                        #{tg}
                      </span>
                    ))}
                  </div>

                  {/* Outbound Link Trigger Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-brand-black hover:bg-brand-red text-white flex items-center justify-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider border border-brand-gold hover:border-brand-red transition duration-300 cursor-pointer"
                  >
                    Buka Website Resmi
                    <ExternalLink size={12} className="text-brand-gold group-hover:text-white transition" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Additional dsb (and others) alert */}
        <div className="mt-12 text-center text-xs text-gray-500 font-sans italic bg-gray-50 p-4 border border-dashed border-gray-200 rounded-xl max-w-xl mx-auto">
          💡 Banyak sistem administrasi kustom internal instansi lainnya yang dijalankan di jaringan intranet tertutup / lokal demi menjaga kerahasiaan data sensitif instansi klien.
        </div>

      </div>
    </section>
  );
}
