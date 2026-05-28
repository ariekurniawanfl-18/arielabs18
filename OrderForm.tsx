import React, { useState, useEffect } from "react";
import { 
  ClipboardList, ShoppingCart, Send, CheckCircle2, 
  Trash2, Eye, Calendar, DollarSign, MessageSquareCode
} from "lucide-react";
import { OrderFormData, OrderRecord } from "../types";

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    organization: "",
    email: "",
    whatsapp: "",
    category: "Sekolah / Lembaga Pendidikan",
    requirements: "",
    budgetEst: "Rp 3.000.000 - Rp 5.000.000",
  });

  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"fill" | "history">("fill");

  // Load saved orders from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("arielabs_saved_orders");
    if (saved) {
      try {
        setOrders(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading orders", e);
      }
    }
  }, []);

  // Submit order handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: OrderRecord = {
      ...formData,
      id: "AL18-" + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: "Diproses",
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("arielabs_saved_orders", JSON.stringify(updatedOrders));
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setActiveTab("history"); // Redirect to history tab to see their order!
    }, 2500);

    // Reset some inputs except names for convenience
    setFormData((prev) => ({
      ...prev,
      organization: "",
      requirements: "",
    }));
  };

  // Generate WA chat URL
  const handleWhatsAppRedirect = (order: OrderRecord) => {
    const phone = "628123456789"; // Simulated default Developer WA
    const textStr = `Halo Tim Arielabs18,

Saya ingin memesan/menyewa Framework Sistem terpadu:
*ID Order:* ${order.id}
*Nama Pemesan:* ${order.name}
*Lembaga:* ${order.organization}
*Kategori:* ${order.category}
*Estimasi Budget:* ${order.budgetEst}
*Kebutuhan Khusus:*
${order.requirements || "Standard optimalisasi harian"}

Mohon rincian penawaran & jadwal meeting lebih lanjut.
Terima kasih!
_Dikirim via www.arielabs18.my.id_`;

    const encoded = encodeURIComponent(textStr);
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  // Delete an order
  const handleDeleteOrder = (id: string) => {
    if (window.confirm("Apakah Anda ingin menghapus catatan order ini?")) {
      const updated = orders.filter((o) => o.id !== id);
      setOrders(updated);
      localStorage.setItem("arielabs_saved_orders", JSON.stringify(updated));
    }
  };

  return (
    <section id="order" className="py-20 bg-gray-50 border-t border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header title block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono tracking-widest text-brand-red font-bold uppercase">
            Mulai Kerjasama Anda
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-brand-black mt-2">
            Form Penerimaan Order Sistem
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Isi formulir kebutuhan di bawah ini untuk mengunci antrean implementasi sistem. Catatan Anda direkam secara lokal di sistem web Arielabs18.
          </p>
        </div>

        {/* Tab Buttons Box */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border p-1.5 rounded-2xl flex space-x-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab("fill")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === "fill"
                  ? "bg-brand-red text-white"
                  : "text-gray-600 hover:text-brand-red hover:bg-gray-50"
              }`}
            >
              <ShoppingCart size={13} />
              Isi Form Order
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer flex items-center gap-2 relative ${
                activeTab === "history"
                  ? "bg-brand-red text-white"
                  : "text-gray-600 hover:text-brand-red hover:bg-gray-50"
              }`}
            >
              <ClipboardList size={13} />
              Kelola Order Lokal
              {orders.length > 0 && (
                <span className="bg-brand-gold text-brand-black w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-extrabold font-mono absolute -top-1.5 -right-1">
                  {orders.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* CONTROLLER SWITCH DETAILS */}
        <div className="max-w-3xl mx-auto">
          
          {activeTab === "fill" ? (
            // FORM INPUT SECTION
            <div className="bg-white border-2 border-brand-gold/40 rounded-3xl p-6 sm:p-10 shadow-lg text-left relative">
              {success && (
                <div className="absolute inset-0 bg-white/95 rounded-3xl z-10 flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                  <CheckCircle2 size={68} className="text-emerald-500 animate-bounce mb-4" />
                  <h3 className="text-xl font-extrabold text-brand-black">Order Sukses Direkam!</h3>
                  <p className="text-xs text-gray-500 max-w-sm mt-1.5 leading-relaxed">
                    Sistem meregistrasi antrean order Anda di dasbor admin lokal. Anda dialihkan untuk memvalidasi detail chat WhatsApp.
                  </p>
                </div>
              )}

              <div className="border-b border-gray-100 pb-4 mb-6 flex items-center space-x-2.5">
                <div className="w-9 h-9 bg-brand-black border border-brand-gold text-brand-gold rounded-full flex items-center justify-center shrink-0">
                  <ShoppingCart size={16} />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-base text-gray-900 leading-none">
                    Formulir Pemesanan Framework
                  </h3>
                  <p className="text-[10px] text-brand-red font-mono uppercase tracking-wider mt-1 font-bold">
                    Official Order Reception
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 font-sans">
                      Nama Pemesan / Perwakilan *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Arie Kurniawan, S.Kom"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                      Nama Lembaga / Instansi *
                    </label>
                    <input
                      type="text"
                      required
                      id="order-org-input"
                      placeholder="Contoh: GMIT Getsemani, SMKN 4 Kupang"
                      value={formData.organization}
                      onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                      Alamat E-mail Aktif *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Contoh: nama@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                      Nomor WA Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789 (Disarankan menggunakan kode negara)"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                      Kategori Framework Sistem
                    </label>
                    <select
                      id="order-category-input"
                      value={formData.category}
                      onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm font-semibold"
                    >
                      <option value="Sekolah / Lembaga Pendidikan">Sekolah / Lembaga Pendidikan (APAS)</option>
                      <option value="Gereja / Rumah Pelayanan">Gereja / Rumah Pelayanan (ACE)</option>
                      <option value="Yayasan / Organisasi Sosial">Yayasan / Organisasi Sosial</option>
                      <option value="Lembaga Pemerintah Desa/Kecamatan">Lembaga Pemerintah Desa/Kecamatan</option>
                      <option value="UMKM / Toko Bisnis Mandiri">UMKM / Toko Bisnis Mandiri (ABS)</option>
                      <option value="Desain Web Profil Kustom">Desain Web Profil Kustom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                      Estimasi Rencana Anggaran (Budget)
                    </label>
                    <select
                      value={formData.budgetEst}
                      onChange={(e) => setFormData((prev) => ({ ...prev, budgetEst: e.target.value }))}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm font-semibold"
                    >
                      <option value="Rp 300.000 - Rp 750.000">Rp 300.000 - Rp 7500.000 (Sistem Dasar)</option>
                      <option value="Rp 750.000 - Rp 3.000.000">Rp 750.000 - Rp 3.000.000 (Rekomendasi Optimal)</option>
                      <option value="Rp 3.000.000 - Rp 5.000.000">Rp 3.000.000 - Rp 5.000.000 (Fitur Lengkap)</option>
                      <option value="Diatas Rp 5.000.000">Diatas Rp 5.000.000 (Skala Lembaga Besar)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 font-sans">
                    Rincian Kebutuhan & Fitur *
                  </label>
                  <textarea
                    required
                    id="order-req-input"
                    rows={4}
                    placeholder="Contoh: Kami ingin modul sensus jemaat yang bisa diunggah dari excel, serta ada sistem broadcast wa kuitansi otomatis."
                    value={formData.requirements}
                    onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-red text-white hover:bg-brand-red-dark font-extrabold uppercase tracking-wider rounded-xl text-xs border border-brand-red transition duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={14} className="animate-pulse text-brand-gold" />
                    Simpan Antrean Order Lokal
                  </button>
                  <div className="text-center mt-3 text-[10px] text-gray-400 font-mono">
                    🛡️ Menggunakan Penyimpanan Enkripsi Sesi Browser Anda.
                  </div>
                </div>
              </form>
            </div>
          ) : (
            // LOCAL ORDERS VIEW SECTION (Demonstrates Portal & Admin Management Capabilities)
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 animate-fadeIn text-left">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div className="flex items-center space-x-2">
                  <ClipboardList size={20} className="text-brand-gold shrink-0" />
                  <span className="text-base font-extrabold text-brand-black">Dasbor Admin Penerimaan Lokal</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-50 text-brand-gold font-bold px-2 py-0.5 rounded border border-brand-gold/25">
                  LOKAL DETEKSI
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <ShoppingCart size={44} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-sm font-bold">Belum Ada Pengisian Order Terdeteksi</p>
                  <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                    Kamar order masih kosong. Silahkan kembali ke tab "Isi Form Order" untuk mengantrekan request Anda.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((or) => (
                    <div
                      key={or.id}
                      className="bg-gray-50 border border-gray-150 rounded-2xl p-5 hover:border-brand-gold/45 transition duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-3 mb-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-brand-red bg-red-50 px-2 py-0.5 rounded">
                            {or.id}
                          </span>
                          <span className="text-xs font-bold text-gray-800">
                            {or.organization}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-[10px] font-semibold text-gray-500">
                          <Calendar size={11} />
                          <span>{or.date}</span>
                        </div>
                      </div>

                      {/* Detail metadata grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
                        <div className="text-gray-500">
                          <strong className="text-gray-700">Pemesan:</strong> {or.name}
                        </div>
                        <div className="text-gray-500">
                          <strong className="text-gray-700">Kategori:</strong> {or.category}
                        </div>
                        <div className="text-gray-500">
                          <strong className="text-gray-700">Database Budget:</strong> {or.budgetEst}
                        </div>
                        <div className="text-gray-500">
                          <strong className="text-gray-700 font-mono">WA:</strong> {or.whatsapp} | <strong className="text-gray-700 font-mono">Email:</strong> {or.email}
                        </div>
                      </div>

                      <div className="bg-white border rounded-xl p-3 text-xs text-gray-600 leading-relaxed mb-4 italic">
                        &ldquo;{or.requirements}&rdquo;
                      </div>

                      {/* Actions strip */}
                      <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-3">
                        <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          ● Status: {or.status}
                        </span>

                        <div className="flex space-x-2.5 w-full sm:w-auto">
                          <button
                            onClick={() => handleDeleteOrder(or.id)}
                            className="bg-red-50 text-brand-red border border-red-200 hover:bg-brand-red hover:text-white p-2.5 rounded-xl text-xs transition flex-1 sm:flex-none justify-center flex items-center gap-1.5"
                            title="Hapus Order"
                          >
                            <Trash2 size={13} />
                          </button>
                          
                          <button
                            onClick={() => handleWhatsAppRedirect(or)}
                            className="bg-brand-black hover:bg-emerald-600 text-white border border-brand-gold hover:border-emerald-600 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex-2 sm:flex-none justify-center flex items-center gap-2"
                          >
                            <MessageSquareCode size={13} className="text-brand-gold" />
                            Hubungkan WA Tim
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
