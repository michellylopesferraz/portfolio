import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Code2 } from "lucide-react";
const Footer = () => {
  return (
    <footer
      id="contato"
      className="py-16 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Redes */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/michellyferraz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/michellylopesferraz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <div className="pt-8 border-t border-white/5 w-full">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Michelly Ferraz. Todos os direitos
            reservados.
          </p>

          <p className="text-slate-600 text-xs mt-2 flex items-center justify-center gap-2">
            <Code2 size={14} />
            Site desenvolvido por mim com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
