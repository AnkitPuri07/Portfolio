import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

function Education() {
  const educationData = [
    {
      degree: "BCA",
      institution: "Tribhuvan University (TIC)",
      year: "Currently Studying (1st Sem)",
      gpa: "3.55",
      icon: GraduationCap,
    },
    {
      degree: "SLC",
      institution: "Texas International College",
      year: "2081",
      gpa: "3.70",
      icon: Award,
    },
    {
      degree: "SEE",
      institution: "Kamlamai SEBS",
      year: "2079",
      gpa: "3.75",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-grid">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-4" />
          <p className="text-[var(--text-muted)]">My academic journey and achievements</p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold">
                      <Award className="w-4 h-4" />
                      <span>GPA: {item.gpa}</span>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
