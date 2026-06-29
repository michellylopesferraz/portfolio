import { useState, useEffect } from "react";

import lp01 from "../assets/landing-pages/administracao.png";
import lp02 from "../assets/landing-pages/congresso.png";
import lp03 from "../assets/landing-pages/dia-das-maes.png";
import lp04 from "../assets/landing-pages/dia-dos-namorados-2019.png";
import lp05 from "../assets/landing-pages/especial-concursos.png";
import lp06 from "../assets/landing-pages/festival-de-filmes.png";
import lp07 from "../assets/landing-pages/gamemaniacos.png";
import lp08 from "../assets/landing-pages/icrim.jpg";
import lp09 from "../assets/landing-pages/maratona-de-ferias.png";
import lp10 from "../assets/landing-pages/marvel.png";
import lp11 from "../assets/landing-pages/mega-saldao.png";
import lp12 from "../assets/landing-pages/mes-do-rock.png";
import lp13 from "../assets/landing-pages/promocoes-aperte-o-play.png";
import lp14 from "../assets/landing-pages/rolo-de-fita.jpg";
import lp15 from "../assets/landing-pages/semana-das-mulheres-regulamento.png";
import lp16 from "../assets/landing-pages/universitarios.png";

const landingPages = [
  {
    title: "Administração",
    image: lp01,
  },
  {
    title: "Congresso",
    image: lp02,
  },
  {
    title: "Dia das Mães",
    image: lp03,
  },
  {
    title: "Dia dos Namorados",
    image: lp04,
  },
  {
    title: "Especial Concursos",
    image: lp05,
  },
  {
    title: "Festival de Filmes",
    image: lp06,
  },
  {
    title: "GameManíacos",
    image: lp07,
  },
  {
    title: "ICRIM",
    image: lp08,
  },
  {
    title: "Maratona de Férias",
    image: lp09,
  },
  {
    title: "Marvel",
    image: lp10,
  },
  {
    title: "Mega Saldão",
    image: lp11,
  },
  {
    title: "Mês do Rock",
    image: lp12,
  },
  {
    title: "Aperte o Play",
    image: lp13,
  },
  {
    title: "Rolo de Fita",
    image: lp14,
  },
  {
    title: "Semana das Mulheres",
    image: lp15,
  },
  {
    title: "Universitários",
    image: lp16,
  },
];

const LandingPages = () => {
  const [selected, setSelected] = useState(null);

  const close = () => {
    setSelected(null);
  };

  const next = () => {
    setSelected((old) => (old === landingPages.length - 1 ? 0 : old + 1));
  };

  const prev = () => {
    setSelected((old) => (old === 0 ? landingPages.length - 1 : old - 1));
  };

  useEffect(() => {
    const keyboard = (e) => {
      if (selected === null) return;

      if (e.key === "Escape") {
        close();
      }

      if (e.key === "ArrowRight") {
        next();
      }

      if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", keyboard);

    return () => window.removeEventListener("keydown", keyboard);
  }, [selected]);

  return (
    <>
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-4xl font-bold text-white">Portfólio</h2>

          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <p className="text-slate-400 max-w-3xl mb-12">
          Landing pages desenvolvidas para campanhas, empresas e projetos
          profissionais. Visualização apenas como portfólio devido a
          confidencialidade.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {landingPages.map((page, index) => (
            <article
              key={page.title}
              onClick={() => setSelected(index)}
              className="
              group cursor-pointer overflow-hidden
              rounded-2xl border border-slate-800
              bg-slate-900
              hover:border-cyan-500
              hover:-translate-y-2
              transition duration-300
              "
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={page.image}
                  className="
                  absolute top-0 w-full
                  transition-all duration-[5000ms]
                  group-hover:-translate-y-[60%]
                  "
                />

                <div
                  className="
                absolute inset-0
                flex items-center justify-center
                bg-black/0
                group-hover:bg-black/60
                transition
                "
                >
                  <span
                    className="
                  opacity-0
                  group-hover:opacity-100
                  text-cyan-400
                  border border-cyan-400
                  px-4 py-2 rounded-xl
                  "
                  >
                    Visualizar
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold">{page.title}</h3>

                <p className="text-slate-400 text-sm mt-2">
                  HTML • CSS • JavaScript
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL BROWSER */}

      {selected !== null && (
        <div
          onClick={close}
          className="
          fixed inset-0 z-50
          bg-black/80 backdrop-blur
          flex items-center justify-center
          p-6
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
            w-full max-w-5xl
            bg-slate-900
            rounded-3xl
            border border-slate-700
            shadow-2xl
            overflow-hidden
            "
          >
            {/* BARRA DO NAVEGADOR */}

            <div
              className="
            h-16 bg-slate-800
            flex items-center
            gap-4 px-6
            "
            >
              <div className="flex gap-2">
                <span className="w-4 h-4 rounded-full bg-red-400" />
                <span className="w-4 h-4 rounded-full bg-yellow-400" />
                <span className="w-4 h-4 rounded-full bg-green-400" />
              </div>

              <div
                className="
              flex-1 bg-slate-700
              rounded-xl px-5 py-2
              text-slate-300 text-sm
              "
              >
                www.projeto-portfolio.com
              </div>

              <button onClick={close} className="text-white text-3xl">
                ×
              </button>
            </div>

            {/* AREA DA PAGINA */}

            <div
              className="
            h-[70vh]
            overflow-y-auto
            bg-white
            "
            >
              <img
                src={landingPages[selected].image}
                className="w-full block"
              />
            </div>

            {/* RODAPE */}

            <div
              className="
            p-5 flex
            items-center justify-between
            "
            >
              <button
                onClick={prev}
                className="
                border border-cyan-500
                text-cyan-400
                px-5 py-2
                rounded-xl
                "
              >
                ←
              </button>

              <h3 className="text-white font-bold text-xl">
                {landingPages[selected].title}
              </h3>

              <button
                onClick={next}
                className="
                border border-cyan-500
                text-cyan-400
                px-5 py-2
                rounded-xl
                "
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPages;
