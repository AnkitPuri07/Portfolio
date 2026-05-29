import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, ArrowDown } from 'lucide-react';
import ankitPortfolio from "../../assets/ankit2-portfolio.jpg";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4 md:px-8 bg-grid'>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--accent-primary)] rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--accent-secondary)] rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-tertiary)] rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className='max-w-6xl w-full mx-auto relative z-10'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 glass rounded-3xl p-8 md:p-12 shadow-2xl'>
          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full blur-md opacity-50 animate-pulse-glow" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
                <img
                  src={ankitPortfolio}
                  alt="Ankit Portfolio"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className='flex flex-col items-center md:items-start text-center md:text-left flex-1'>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'
            >
              <span className='text-[var(--text-primary)]'>Hello, I'm </span>
              <span className='gradient-text'>Ankit</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-4"
            >
              <Code className="w-6 h-6 text-[var(--accent-primary)]" />
              <span>Front End Developer</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className='text-[var(--text-muted)] text-lg max-w-xl mb-8 leading-relaxed'
            >
              I craft modern, responsive, and professional web interfaces with clean code and best practices. Passionate about creating seamless user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-4 justify-center md:justify-start'
            >
              <motion.a
                href='#projects'
                className='group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href='#contact'
                className='px-8 py-3.5 rounded-xl font-semibold glass border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[var(--accent-primary)] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
