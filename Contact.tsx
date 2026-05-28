import React from "react";
import { 
  Mail, Phone, Facebook, Instagram, Video, Youtube, 
  MapPin, Clock, ShieldCheck, ExternalLink, MessageCircle
} from "lucide-react";
import { SocialContact } from "../types";

export default function Contact() {
  const socials: SocialContact[] = [
    {
      id: "soc-wa",
      platform: "WhatsApp",
      username: "+62 821-4414-0837",
      href: "https://wa.me/6282144140837",
      color: "hover:bg-emerald-50 hover:border-emerald-500",
      icon: "MessageCircle"
    },
    {
      id: "soc-email",
      platform: "Email",
      username: "hello@arielabs18.my.id",
      href: "mailto:hello@arielabs18.my.id",
      color: "hover:bg-red-50 hover:border-brand-red",
      icon: "Mail"
    },
    {
      id: "soc-fb",
      platform: "Facebook",
      username: "Kfl Leaniry",
      href: "https://www.facebook.com/arie.kurniawanfl",
      color: "hover:bg-blue-50 hover:border-blue-600",
      icon: "Facebook"
    },
    {
      id: "soc-ig",
      platform: "Instagram",
      username: "Arie Kurniawanfl",
      href: "https://www.instagram.com/ariekurniawanfl?igsh=aGwwNThoMjBkbGxv",
      color: "hover:bg-pink-50 hover:border-pink-600",
      icon: "Instagram"
    },
    {
      id: "soc-tiktok",
      platform: "TikTok",
      username: "Arie Kurniawanfl",
      href: "tiktok.com/@ariekurniawanfl",
      color: "hover:bg-sky-50 hover:border-zinc-800",
      icon: "Video"
    },
    {
      id: "soc-yt",
      platform: "YouTube",
      username: "ariekurniawanfl",
      href: "https://youtube.com/@ariekurniawanfl7195?si=j8bHgb7zN0jKy6hl",
      color: "hover:bg-red-50 hover:border-red-650",
      icon: "Youtube"
    }
  ];

  const renderIcon = (platform: string) => {
    switch (platform) {
      case "WhatsApp":
        return <MessageCircle className="text-emerald-500 w-5 h-5" />;
      case "Email":
        return <Mail className="text-brand-red w-5 h-5" />;
      case "Facebook":
        return <Facebook className="text-blue-600 w-5 h-5" />;
      case "Instagram":
        return <Instagram className="text-pink-600 w-5 h-5" />;
      case "TikTok":
        return <Video className="text-zinc-800 w-5 h-5" />;
      case "YouTube":
        return <Youtube className="text-red-650 w-5 h-5" />;
      default:
        return <Mail className="text-brand-red w-5 h-5" />;
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-brand-red font-bold uppercase">
            Hubungi Tim Developer
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-brand-black mt-2">
            Saluran Kontak & Sosial
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Butuh konsultasi teknis mendalam? Hubungi kami langsung melalui salah satu saluran media sosial di bawah ini. Kami aktif merespon anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: QUICK DETAILS */}
          <div className="lg:col-span-5 text-left bg-gray-50 border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-sans font-extrabold text-lg text-brand-black tracking-tight mb-4">
              Arielabs18 Headquarters
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
              Kami berbasis di Kupang, Nusa Tenggara Timur (NTT). Mendukung digitalisasi administrasi gereja lokal, sistem kelulusan sekolah, administrasi yayasan sosial, dan pengarsipan kearsipan digital se-Indonesia.
            </p>

            {/* Micro list info info */}
            <div className="space-y-4 font-sans text-sm pb-6 border-b border-gray-100">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-brand-black font-semibold">Alamat Kantor:</strong>
                  <span className="text-xs text-gray-500">Jl. Kebun Raja, Naikoten 1, Kota Kupang, Nusa Tenggara Timur (NTT), Indonesia</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-brand-gold w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-brand-black font-semibold">Jam Respon Operasional:</strong>
                  <span className="text-xs text-gray-500">Senin - Sabtu: 08.00 - 17.00 WITA (GMT+8)</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-brand-black font-semibold">Keamanan & Performa:</strong>
                  <span className="text-xs text-gray-400">Arsitektur SSL + Backups Terjadwal Harian Guna Proteksi</span>
                </div>
              </div>
            </div>

            {/* Quick alert bar */}
            <div className="bg-brand-red/5 p-4 rounded-2xl border border-brand-red/10 text-xs mt-6">
              <span className="block font-bold text-brand-red font-mono uppercase tracking-wider mb-1">
                ⚠️ PERHATIAN KEAMANAN
              </span>
              <p className="text-gray-600 leading-relaxed">
                Kami tidak pernah meminta kata sandi admin atau informasi pembayaran pribadi di luar email penawaran resmi dari domain <strong className="text-brand-black">arielabs18.my.id</strong>.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: SOCIAL LINKS GRIDS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-white border border-gray-200 rounded-2xl p-5 text-left flex items-center justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-md ${soc.color} group`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center p-2 border shadow-inner">
                      {renderIcon(soc.platform)}
                    </div>
                    <div className="truncate">
                      <span className="block text-[10px] uppercase font-mono tracking-wider font-extrabold text-gray-400 leading-none">
                        {soc.platform}
                      </span>
                      <span className="text-xs font-bold text-brand-black tracking-tight block mt-1.5 truncate max-w-[160px] sm:max-w-none">
                        {soc.username}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-gray-300 group-hover:text-brand-red transition" />
                </a>
              ))}
            </div>

            {/* FAQ Helper indicator */}
            <div className="mt-8 bg-brand-black text-brand-gold p-6 rounded-3xl text-left border border-brand-gold/30 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/25 text-brand-gold shrink-0">
                <Phone className="w-5 h-5 text-brand-gold animate-wiggle" />
              </div>
              <div className="font-sans">
                <h4 className="font-bold text-sm text-white leading-tight">Konsultasi Teleconference Instan?</h4>
                <p className="text-[11px] text-gray-400 mt-1">
                  Kami siap melakukan meeting via Google Meet/Zoom Meeting guna menyepakati workflow dan skema bisnis portal Anda secara cuma-cuma. Hubungi kami pada Telegram atau WhatsApp!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
