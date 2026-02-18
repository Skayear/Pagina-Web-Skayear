import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-terminal-green font-mono text-sm">06. contact</span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mt-4 mb-4">
            Let's connect
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Always open to new opportunities, collaborations, or simply chatting about infrastructure and reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:pablorodriguez_cv@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:opacity-90 transition-opacity"
            >
              📧 email
            </a>
            <a
              href="https://github.com/skayear"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded hover:border-primary/30 transition-colors"
            >
              ⌨️ github
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-nicolas-rodriguez-sequeira/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded hover:border-primary/30 transition-colors"
            >
              💼 linkedin
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-terminal-green">$</span> echo "Built with ☕ and YAML"
        </p>
      </div>
    </section>
  );
};

export default Contact;
