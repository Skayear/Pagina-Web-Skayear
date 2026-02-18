import { motion } from "framer-motion";

const TerminalPrompt = ({ command, output }: { command: string; output?: string }) => (
  <div className="font-mono text-sm">
    <div className="flex items-center gap-2">
      <span className="text-terminal-green">❯</span>
      <span className="text-foreground">{command}</span>
      <span className="w-2 h-4 bg-primary terminal-cursor inline-block ml-1" />
    </div>
    {output && <div className="text-muted-foreground mt-1 pl-5">{output}</div>}
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden scanline">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal window */}
          <div className="bg-card border border-border rounded-lg overflow-hidden border-glow">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-terminal-amber" />
              <div className="w-3 h-3 rounded-full bg-terminal-green" />
              <span className="text-muted-foreground font-mono text-xs ml-2">~/portfolio</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 md:p-8 space-y-4">
              <TerminalPrompt command="whoami" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold font-mono text-glow text-primary mt-2">
                  Pablo Rodriguez
                </h1>
                <h2 className="text-xl md:text-2xl font-mono text-secondary-foreground mt-2">
                  SRE DEVOPS ENGINEER | MULTI-CLOUD
                  <br />
                  OPERATIONS | AUTOMATION | RELIABILITY ENGINEERING
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 space-y-2"
              >
                <TerminalPrompt
                  command="cat about.txt"
                  output="SRE with a DevOps mindset from Uruguay 🇺🇾. CI/CD pipelines, Infrastructure as Code, and Docker containers."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-wrap gap-3 mt-6"
              >
                <a href="#experience" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-sm rounded hover:opacity-90 transition-opacity">
                  view experience →
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                  contact
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
