import React, { useState, useEffect } from "react";
import { Shield, Menu, X, Settings2, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Tentang Saya", href: "#tentang-saya", key: "tentang-saya" },
    { label: "Layanan & Engine", href: "#layanan", key: "layanan" },
    { label: "Galeri & Portfolio", href: "#portfolio", key: "portfolio" },
    { label: "Order Layanan", href: "#order", key: "order" },
    { label: "Kontak", href: "#kontak", key: "kontak" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b-2 border-brand-gold/30 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Brand area */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-gold rounded-full opacity-60 group-hover:opacity-100 blur-sm transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center w-10 h-10 bg-brand-black border border-brand-gold rounded-full text-brand-gold font-bold">
                  <Shield size={18} className="text-brand-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-tight text-brand-black text-xl leading-none">
                  Arie<span className="text-brand-red">labs</span>
                  <span className="text-brand-gold">18</span>
                </span>
                <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-0.5 font-bold leading-none">
                  Portal & Automation
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1.5 items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.key}`}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-350 relative ${
                    isActive
                      ? "text-brand-red bg-red-50/70 border-b-2 border-brand-gold"
                      : "text-gray-700 hover:text-brand-red hover:bg-gray-100/70"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-gold rounded-full animate-ping" />
                  )}
                </a>
              );
            })}
            <a
              href="#order"
              id="cta-nav-button"
              className="ml-4 px-5 py-2.5 bg-brand-black text-white rounded-full text-xs font-bold uppercase tracking-wider border border-brand-gold hover:bg-brand-red hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-brand-red/20 flex items-center gap-1.5"
            >
              <Sparkles size={11} className="text-brand-gold animate-pulse" />
              Sewa Framework
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-red p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-white/98 backdrop-blur-lg border-b-4 border-brand-gold shadow-xl absolute top-full left-0 right-0 py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.href}
                  id={`mobile-nav-link-${item.key}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? "text-white bg-brand-red"
                      : "text-gray-800 hover:bg-gray-100 hover:text-brand-red"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#order"
              id="mobile-nav-cta"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-brand-black text-white hover:bg-brand-red rounded-xl font-extrabold uppercase tracking-wide border border-brand-gold transition-colors block"
            >
              Form Order
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
