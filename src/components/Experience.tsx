import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate → Site Reliability Engineer",
    company: "UKG",
    period: "2024 to 2025",
    description: "In my role at UKG, I took on greater responsibilities by working more closely with developers and implementing deployment tools and internal services for production. I also interacted with teams from different parts of the world, improving my English, and participated in my first on-call shifts to ensure service continuity.",
    tags: ["Kubernetes", "Terraform", "Datadog", "Github Workflows", "Grafana", "Splunk", "PagerDuty", "Google Cloud"],
  },
  {
    role: "Training → Junior Site Reliability Engineer DevOps",
    company: "Dualboot Partners",
    period: "2022 to 2024",
    description: "In my role as an SRE at Dualboot, I was able to learn and work with a wide variety of technologies, interact directly with clients from different sectors, and collaborate with experienced developers. During this period, I developed organisational skills and participated in cloud implementations using AWS and Azure, which represented my first practical experience with cloud infrastructure.",
    tags: ["GitHub Actions", "Gitlab", "Docker", "Azure Devops", "Kubernetes", "Terraform", "Linux", "AWS,", "Azure", "GitOps"],
  },
  {
    role: "Training Site Reliability Engineer DevOps",
    company: "Guruyú Web Project",
    period: "2021 to 2023",
    description: "I participated as a volunteer in the role of SRE in a project for the amateur football league Liga Guruyú. The purpose of the project was to develop an application for managing squads, matches and individual player registers. Although the project was not finished, I successfully implemented CI/CD integration and the necessary infrastructure for deploying and hosting the application.",
    tags: ["Linux", "Head of Infrastructure", "Github Workflows", "Docker", "Portainer", "Nginx", "Fusion Auth"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-terminal-green font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-8 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="font-mono font-semibold text-primary">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-mono text-sm text-terminal-cyan mb-3">@ {exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-muted text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
