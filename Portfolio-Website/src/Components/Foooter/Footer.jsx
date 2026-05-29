import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AnkitPuri07", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ankit-puri-838899321", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/ankit_ho_k?igsh=dnB1Z2ZvYmE1ZjRv", label: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/share/16Z4TYevdV/", label: "Facebook" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-[var(--border-color)]">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full glass border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Ankit Puri</h3>
            <p className="text-[var(--text-muted)]">Front End Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-xl glass hover:bg-[var(--accent-primary)]/10 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-[var(--text-muted)] text-sm flex items-center justify-center gap-1">
              Built with <FaHeart className="w-4 h-4 text-[var(--accent-primary)] animate-pulse" /> using React & Tailwind
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2">
              &copy; {new Date().getFullYear()} Ankit Puri. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
