import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import OrderForm from "./components/OrderForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ArrowUp, Sparkles, MessageSquare } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("tentang-saya");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scrolling to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 200; // Offset for trigger accuracy

      const sections = [
        { id: "tentang-saya", top: document.getElementById("tentang-saya")?.offsetTop || 0 },
        { id: "layanan", top: document.getElementById("layanan")?.offsetTop || 0 },
        { id: "portfolio", top: document.getElementById("portfolio")?.offsetTop || 0 },
        { id: "order", top: document.getElementById("order")?.offsetTop || 0 },
        { id: "kontak", top: document.getElementById("kontak")?.offsetTop || 0 },
      ];

      // Sort by offset top descending to get the topmost intersection
      const current = sections
        .filter((sec) => sec.top <= scrollPosition)
        .reverse()[0];

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-gold selection:text-brand-black">
      {/* Sticky Header Nav */}
      <Header activeSection={activeSection} />

      {/* Hero Header Area */}
      <Hero />

      {/* Wrap modular sections with fade up transition effects of motion */}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Portfolio />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <OrderForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer System with required copyright info */}
      <Footer />

      {/* SCROLL-TO-TOP FLOATING ACTION BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-button"
          className="fixed bottom-6 right-6 z-40 bg-brand-black text-[#A68D4C] border border-brand-gold/60 p-3.5 rounded-full select-none cursor-pointer hover:bg-brand-red hover:text-white transition duration-300 shadow-xl flex items-center justify-center animate-fadeIn"
          title="Kembali ke Atas"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* QUICK WHATSAPP FLOATING CONVERSATION BUTTON */}
      <a
        href="https://wa.me/6282144140837"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-emerald-500 text-white p-3.5 rounded-full shadow-xl hover:bg-emerald-600 transition duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 border border-emerald-400 cursor-pointer"
        title="Hubungi WhatsApp Tim"
      >
        <MessageSquare size={18} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-[10px] font-bold uppercase tracking-wider block">
          Live Chat WA
        </span>
      </a>

    </div>
  );
}
