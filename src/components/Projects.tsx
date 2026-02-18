import { motion } from "framer-motion";

const projects = [
  {
    title: "Skayear/Pagina-Web-Skayear",
    description: "Personal portfolio with retro/terminal aesthetics showcasing my skills as SRE and DevOps Engineer.",
    tech: ["React 18", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Skayear/Pagina-Web-Skayear",
  },
  {
    title: "AmazonQ-TerraViz-",
    description: "Herramienta web moderna y minimalista para generar diagramas de arquitectura AWS basados en código Terraform con flujo de tráfico visual e interactivo.",
    tech: ["Terraform", "HTML", "AWS", "JavaScript", "CSS"],
    link: "https://github.com/Skayear/AmazonQ-TerraViz-",
  },
  {
    title: "terraform-grafana-management",
    description: "Infrastructure as Code (IaC) repository for centralized Grafana management using Terraform. Provides reusable modules to manage dashboards, panels, alerts, folders, and other resources in a standardized, versioned, and GitOps-aligned way.",
    tech: ["Terraform", "AWS", "GCP"],
    link: "https://github.com/Skayear/terraform-grafana-management",
  },
  {
    title: "template-compilation",
    description: "",
    tech: ["AWS", "Terraform"],
    link: "https://github.com/Skayear/template-compilation",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-terminal-green font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-terminal-cyan font-mono text-2xl">📁</span>
                <span className="text-muted-foreground font-mono text-xs group-hover:text-primary transition-colors">↗</span>
              </div>
              <h3 className="font-mono font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-terminal-dim">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
