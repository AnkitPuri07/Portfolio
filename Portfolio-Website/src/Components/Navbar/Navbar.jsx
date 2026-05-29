import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="glass rounded-2xl px-6 py-3 flex justify-between items-center">
            <motion.span
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              ANKIT
            </motion.span>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative py-2"
                >
                  <motion.span
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-[var(--accent-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}

              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-[var(--accent-secondary)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-[var(--accent-primary)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-[var(--bg-card)]"
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-[var(--accent-secondary)]" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--accent-primary)]" />
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-[var(--bg-card)]"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-[var(--accent-primary)] text-white"
                      : "hover:bg-[var(--bg-card)]"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
