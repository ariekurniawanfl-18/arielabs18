import React from "react";
import { Shield, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-[#A68D4C] border-t-4 border-brand-gold pt-12 pb-8 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-brand-gold/15">
          {/* Brand description footer */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold">
                <Shield size={14} className="text-brand-gold" />
              </div>
              <span className="font-sans font-extrabold tracking-tight text-white text-lg">
                Arie<span className="text-brand-red">labs</span>18
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Kerangka framework bisnis handal untuk efisiensi tak terbatas. Memangkas birokrasi, menghemat pengarsipan fisik, dan menyempurnakan alur pelaporan administrasi harian.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Peta Jalan Portal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#tentang-saya" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-white transition">Layanan Portal</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Galeri & Portfolio</a></li>
              <li><a href="#order" className="hover:text-white transition">Form Sewa Sistem</a></li>
            </ul>
          </div>

          {/* Technology Highlights */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Framework Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React 19", "Vite JS", "Express API", "Tailwind v4", "Gemini 3.5", "SQL Relational", "RFID/QR System"].map((stk, idx) => (
                <span
                  key={idx}
                  className="bg-brand-charcoal text-[9px] text-[#C5A85C] px-2.5 py-1 rounded border border-brand-gold/10 font-mono font-bold uppercase"
                >
                  {stk}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR WITH CLIENTS REQUESTED LITERAL STRING */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-400">
          <div className="flex flex-col space-y-1 text-center sm:text-left">
            {/* LITERAL EXACT MANDATED LINE */}
            <p className="font-bold text-gray-200 uppercase tracking-wide">
              copyright @ www.arielabs18.my.id_design by 41213
            </p>
            <p className="text-[10px] text-gray-500 font-mono">
              All Rights Reserved &bull; Kupang (NTT) Indonesia &bull; v4.2.0
            </p>
          </div>

          <p className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
            <span>Powered with</span>
            <Heart size={10} className="text-brand-red animate-pulse" />
            <span>by Arielabs18 Tim</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
