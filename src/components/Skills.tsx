import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud & Infra",
    icon: "☁️",
    skills: ["AWS", "Azure", "Google Cloud", "Terraform", "Terraspace"],
  },
  {
    title: "CI/CD",
    icon: "⚡",
    skills: ["GitHub Actions", "GitLab CI", "Azure DevOps"],
  },
  {
    title: "Containers & Orchestration",
    icon: "🐳",
    skills: ["Docker", "Docker Compose", "Kubernetes", "Helm", "ECS"],
  },
  {
    title: "Observability",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "OpenTelemetry", "Splunk", "PagerDuty"],
  },
  {
    title: "Scripting",
    icon: "💻",
    skills: ["Bash", "Python"],
  },
  {
    title: "AI Tools",
    icon: "🧠",
    skills: ["GitHub Copilot", "Claude", "Codex", "OpenAI", "Gemini", "Amazon Q"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-terminal-green font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{cat.icon}</span>
                <h3 className="font-mono text-sm font-semibold text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
