import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsInformation from '../SkillsInfo/SkillsInfo.js';
import SkillCard from '../SkillCard/SkillCard.jsx';

function Skills() {
  const [selectedType, setSelectedType] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "tools", label: "Tools" },
    { id: "others", label: "Others" },
  ];

  const filteredSkills = skillsInformation.filter(
    (skill) => skill.SkillType === selectedType
  );

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-8" />

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedType(category.id)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  selectedType === category.id
                    ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg shadow-[var(--accent-primary)]/30"
                    : "glass text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SkillCard
                  Name={skill.Name}
                  proficiency={skill.Proficiency}
                  img={skill.img}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
