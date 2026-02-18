import { motion } from "framer-motion";

const hobbies = [
  { icon: "📚", label: "Sci-fi books & manga" },
  { icon: "🎲", label: "D&D & board games" },
  { icon: "🎻", label: "Violin – Orquesta Juvenil del SODRE" },
  { icon: "🎮", label: "Video games" },
  { icon: "🎧", label: "Audiophilia" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-terminal-green font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">about me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-6 md:p-8 border-glow"
        >
          <div className="font-mono text-sm space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <span className="text-terminal-green">❯</span>
              <span>cat about.md</span>
            </div>

            <p className="text-foreground leading-relaxed">
              Hello! My name is <span className="text-primary text-glow font-semibold">Pablo Rodriguez</span>. I'm from <span className="text-terminal-cyan">Uruguay, Montevideo</span> and I'm an SRE with DevOps philosophy. I have <span className="text-terminal-amber font-semibold">6 years of experience</span> in implementing CI/CD Pipelines, Infrastructure as Code and making Dockerfile images on different projects.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My objective in this portfolio is to stand out as a complete and versatile IT professional, showcasing my abilities in creation, management, and projects. I also look forward to learning more and sharing this process with other developers and IT students, creating a space where they investigate different technologies and good practices.
            </p>

            <p className="text-terminal-dim text-xs italic mt-2">
              // I will update the page and upgrade its design or style over time
            </p>
          </div>

          {/* Hobbies */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-terminal-green">❯</span>
              <span>ls ~/hobbies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {hobbies.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3"
                >
                  <span className="text-xl">{h.icon}</span>
                  <span className="font-mono text-xs text-secondary-foreground">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
