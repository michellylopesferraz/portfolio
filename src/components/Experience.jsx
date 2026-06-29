import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">
            Sobre Mim
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Construindo experiências digitais há mais de 10 anos.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Texto */}
          <div className="space-y-6 text-slate-400 leading-8">
            <p>
              Sou{" "}
              <strong className="text-white">Desenvolvedora Front-end</strong>,
              com mais de 10 anos de experiência em tecnologia e produtos
              digitais. Minha trajetória começou com desenvolvimento e gestão de
              conteúdo para grandes empresas, participando de projetos desde o
              levantamento de requisitos até a implementação e manutenção de
              soluções web.
            </p>

            <p>
              Trabalhei com plataformas como
              <span className="text-cyan-400">
                {" "}
                Salesforce CMS, Drupal, Magento, VTEX e WordPress
              </span>
              , desenvolvendo landing pages, e-mails em HTML/CSS, automações e
              experiências digitais.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
              <Briefcase className="text-cyan-400 mb-4" size={30} />
              <h3 className="text-lg font-semibold mb-2">Experiência</h3>
              <p className="text-slate-400">
                +10 anos atuando com desenvolvimento e plataformas digitais.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
              <GraduationCap className="text-cyan-400 mb-4" size={30} />
              <h3 className="text-lg font-semibold mb-2">Formação</h3>
              <p className="text-slate-400">
                Gestão da Tecnologia da Informação
                <br />
                Universidade Estácio
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
              <Code2 className="text-cyan-400 mb-4" size={30} />
              <h3 className="text-lg font-semibold mb-2">Especialidades</h3>
              <p className="text-slate-400">
                React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS e Git.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
              <MapPin className="text-cyan-400 mb-4" size={30} />
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-slate-400">São Paulo • Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
