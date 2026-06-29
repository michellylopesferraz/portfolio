import fotoPerfil from "../assets/perfil.png";
import curriculo from "../assets/MichellyFerraz.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-[#0a0f1a]"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h2 className="text-cyan-400 font-mono tracking-widest mb-4 text-sm uppercase font-bold">
            Sênior Front-End Developer
          </h2>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
            Michelly
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Ferraz.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed font-light">
            Mais de 10 anos de experiência em desenvolvimento web, gestão de
            conteúdo e plataformas digitais, com atuação em Salesforce CMS,
            Drupal, Magento, VTEX e WordPress. Especialista em HTML, CSS,
            automação de processos e otimização de operações digitais.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href={curriculo}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                />
              </svg>
              Baixar currículo
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #React
            </span>

            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #JavaScript
            </span>

            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #TypeScript
            </span>

            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #TailwindCSS
            </span>

            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #HTML
            </span>

            <span className="px-4 py-2 bg-slate-800 rounded-full text-xs text-cyan-400 border border-cyan-500/20">
              #CSS
            </span>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-20" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-transform hover:scale-105 duration-500">
              <img
                src={fotoPerfil}
                alt="Michelly Ferraz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
