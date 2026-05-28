import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Activity, Terminal, Code2, Users2, ShieldAlert } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-50/40 via-white to-red-50/10 overflow-hidden"
    >
      {/* Decorative Elegant Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-gold/10 to-brand-red/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid Canvas Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A85C10_1px,transparent_1px),linear-gradient(to_bottom,#C5A85C10_1px,transparent_1px)] bg-[size:30px_30px] opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content area */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-black/5 border border-brand-gold text-brand-black text-xs font-bold tracking-wider uppercase max-w-max"
            >
              <Sparkles size={13} className="text-brand-gold animate-bounce" />
              <span>Arielabs18 Business Framework</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-gray-900 leading-[1.1]"
            >
              Otomasi Administrasi <br />
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">Portal Digital</span> Terpadu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed font-sans"
            >
              Transformasikan birokrasi dan administrasi lembaga Anda menjadi serba otomatis. 
              Sistem dinamis berbasis web yang disesuaikan khusus untuk **Sekolah**, **Gereja**, **Yayasan**, dan **UMKM**. 
              Bebas repot, efisien, aman, dan berkelas dunia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#layanan"
                id="hero-cta-simulate"
                className="px-8 py-4 bg-brand-red text-white font-extrabold uppercase tracking-wider rounded-xl text-sm border-2 border-brand-red hover:bg-white hover:text-brand-red transition-all duration-300 shadow-lg shadow-brand-red/10 hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Coba Engine Simulator
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#order"
                id="hero-cta-order"
                className="px-8 py-4 bg-white text-brand-black hover:text-brand-red font-extrabold uppercase tracking-wider rounded-xl text-sm border-2 border-brand-gold hover:border-brand-red transition-all duration-300 flex items-center justify-center gap-2"
              >
                Pesan Sistem / Kerangka
              </a>
            </motion.div>

            {/* Micro Stats indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100"
            >
              <div>
                <span className="block text-3xl font-extrabold text-brand-black">100%</span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Otomatis / Paperless</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-brand-red">&lt; 15 dtk</span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Waktu Cetak Berkas</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-[#9A8446]">Cloud</span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">Database Relasional</span>
              </div>
            </motion.div>

          </div>

          {/* Graphical/Emblem Showcase Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[390px]"
            >
              {/* Gold glowing aura behind logo frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-red via-brand-gold to-brand-black rounded-[2.5rem] blur-xl opacity-30 animate-pulse" />
              
              <div className="relative bg-white border-2 border-brand-gold/40 rounded-[2.25rem] p-7 shadow-2xl overflow-hidden">
                {/* Header ribbon */}
                <div className="absolute top-0 right-0 bg-brand-black text-brand-gold border-b border-l border-brand-gold px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase font-bold rounded-bl-xl">
                  Official Emblem
                </div>

                <div className="flex flex-col items-center">
                  {/* Emblem Frame with original PNG */}
                  <div className="w-48 h-48 bg-gray-50 rounded-2xl border-2 border-brand-gold/60 p-4 shadow-inner flex items-center justify-center mt-4">
                    <img
                      src="https://res.cloudinary.com/dhcquhxeu/image/upload/v1779865660/ChatGPT_Image_27_Mei_2026_14.05.53_aayo7u.png"
                      alt="Arielabs18 Logo Emblem"
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full object-contain rounded-lg hover:scale-105 transition-transform duration-350"
                      onError={(e) => {
                        console.error("Logo failed to load");
                        // Fallback text symbol if image fails
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const placeholder = document.createElement('div');
                          placeholder.className = "flex flex-col items-center text-center p-3 text-red-700";
                          placeholder.innerHTML = `<span class="text-4xl font-extrabold tracking-tighter">AL18</span><span class="text-xs uppercase tracking-widest text-yellow-600 font-bold mt-2">Arielabs18</span>`;
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold font-sans text-brand-black tracking-tight leading-none">
                      www.arielabs18.my.id
                    </h3>
                    <p className="text-xs text-brand-red font-mono font-bold tracking-widest uppercase mt-1">
                      Enterprise Framework
                    </p>
                  </div>

                  {/* System Terminal Simulation Grid */}
                  <div className="w-full bg-brand-black rounded-xl p-3.5 mt-6 border border-brand-gold/20 font-mono text-[11px] text-[#A68D4C] flex flex-col space-y-2">
                    <div className="flex items-center justify-between border-b border-brand-gold/10 pb-1.5">
                      <span className="flex items-center gap-1.5 text-white font-bold text-[10px] uppercase">
                        <Terminal size={11} className="text-brand-red animate-pulse" />
                        System Diagnostics
                      </span>
                      <span className="text-[9px] bg-brand-red/20 text-brand-red font-bold px-1.5 py-0.5 rounded-md uppercase">
                        STANDBY
                      </span>
                    </div>
                    <div className="flex space-x-1 justify-between">
                      <span className="text-gray-400">HOST DOMAIN:</span>
                      <span className="text-white font-semibold">arielabs18.my.id</span>
                    </div>
                    <div className="flex space-x-1 justify-between">
                      <span className="text-gray-400">ENGINE PORTAL:</span>
                      <span className="text-white font-semibold">Core v4.2.14</span>
                    </div>
                    <div className="flex space-x-1 justify-between">
                      <span className="text-gray-400">SECURE SHELL:</span>
                      <span className="text-brand-gold font-bold">SHA-256 ACTIVE</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
