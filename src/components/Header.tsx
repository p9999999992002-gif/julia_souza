"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Início", "Áreas", "Sobre", "Depoimentos", "Contato"];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#060810]/95 shadow-[0_1px_0_rgba(200,169,110,0.15)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <a href="#inicio" className="group flex flex-col leading-none">
          <span className="font-['Cormorant_Garamond'] text-2xl font-semibold tracking-wide text-white transition group-hover:text-[#c8a96e]">
            Julia Souza
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.5em] text-[#c8a96e]/70">
            Advocacia Trabalhista · OAB/SP
          </span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("í", "i").replace("á", "a").replace("ê", "e")}`}
              className="relative text-[13px] font-light tracking-wider text-white/50 transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c8a96e] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden rounded-none border border-[#c8a96e]/40 px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[#c8a96e] transition duration-300 hover:bg-[#c8a96e] hover:text-[#060810] md:block"
          >
            Consulta Gratuita
          </a>

          {/* Hamburguer Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-500 md:hidden ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="border-t border-white/10 bg-[#060810]/98 px-8 pb-6 pt-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("í", "i").replace("á", "a").replace("ê", "e")}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-light tracking-widest text-white/60 transition hover:text-[#c8a96e]"
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-4 block border border-[#c8a96e]/40 py-3 text-center text-xs uppercase tracking-[0.2em] text-[#c8a96e]"
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </header>
  );
}