import taskManager from "../assets/gerenciador-de-tarefas.png";

const projects = [
  {
    title: "Gerenciador de Tasks",
    image: taskManager,
    tech: ["React", "Vite", "Tailwind CSS"],
    desc: "Aplicação para gerenciamento de tarefas utilizando React, componentização e gerenciamento de estado com Hooks.",
    github: "https://github.com/michellylopesferraz/Gerenciador-de-tasks",
    demo: "https://gerenciador-de-tasks-k446k1zas-michelly-ferraz.vercel.app/",
  },

  // Próximos projetos...
  // {
  //   title: "",
  //   image: imagem,
  //   tech: [],
  //   desc: "",
  //   github: "",
  //   demo: "",
  // },
];

const Projects = () => {
  return (
    <section id="projetos" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center gap-4 mb-14">
        <h2 className="text-4xl font-bold text-white whitespace-nowrap">
          Projetos
        </h2>

        <div className="flex-1 h-px bg-slate-800"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500 hover:-translate-y-2 transition duration-300"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              <p className="mt-4 text-slate-400 text-sm leading-7">
                {project.desc}
              </p>

              <div className="flex gap-3 mt-8">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-2 rounded-lg font-semibold transition"
                >
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-white py-2 rounded-lg transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
