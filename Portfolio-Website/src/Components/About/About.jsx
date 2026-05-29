import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Coffee } from 'lucide-react';
import aboutPhoto from '../../assets/Ankit-portfolio.jpg';

function About() {
  const highlights = [
    { icon: Code, text: "Clean Code" },
    { icon: Server, text: "Scalable Solutions" },
    { icon: Globe, text: "Modern Web" },
    { icon: Coffee, text: "Always Learning" },
  ];

  return (
    <section id='about' className="py-24 px-4 md:px-8 bg-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl blur-xl opacity-30" />
              <motion.img
                src={aboutPhoto}
                alt="Ankit working"
                className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto border-2 border-[var(--border-color)]"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
              I'm Ankit, a passionate <span className="gradient-text">Front-End Developer</span>
            </h3>

            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              <p>
                I build modern, responsive, and professional web applications with a focus on clean code and exceptional user experiences. My passion lies in transforming ideas into pixel-perfect digital realities.
              </p>
              <p>
                Currently expanding my expertise in backend development with Java and Node.js, working towards becoming a well-rounded full-stack developer. I believe in continuous learning and staying up-to-date with the latest technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass card-hover"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-[var(--text-primary)]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
