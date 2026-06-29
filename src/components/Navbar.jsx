import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Projetos", href: "#projetos" },
    { name: "Portfólio", href: "#portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white uppercase">
          Michelly Ferraz
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-sm text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[11px]"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contato"
            className="bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-full font-bold text-xs hover:scale-105 transition-all"
          >
            CONTATO
          </a>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-20 left-0 w-full bg-slate-950 border-b border-white/5 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "opacity-100 visible h-auto pb-8" : "opacity-0 invisible h-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-center gap-6 pt-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-slate-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-bold"
          >
            CONTATO
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
