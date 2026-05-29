import React from 'react';
import { motion } from 'framer-motion';

function SkillCard({ Name, img, proficiency }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="w-52 sm:w-60 glass rounded-2xl overflow-hidden card-hover gradient-border group"
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.img
          src={img}
          alt={`${Name} logo`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">{Name}</h3>
          <span className="text-sm font-semibold text-[var(--accent-primary)]">{proficiency}%</span>
        </div>

        <div>
          <div className="w-full bg-[var(--border-color)] rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
