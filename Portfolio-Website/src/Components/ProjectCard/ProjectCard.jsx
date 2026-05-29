import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ name, description, img, source }) {
  const isClickable = source && source !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden glass gradient-border"
    >
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
        <motion.img
          className="w-full h-full object-cover"
          src={img}
          alt={name}
          whileHover={isClickable ? { scale: 1.1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">{name}</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">{description}</p>

            {isClickable ? (
              <motion.a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            ) : (
              <span className="px-4 py-2 rounded-lg bg-[var(--border-color)] text-[var(--text-muted)] text-sm font-medium inline-block">
                Coming Soon
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {isClickable && (
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <div className="p-2 rounded-full glass">
            <ExternalLink className="w-5 h-5 text-[var(--accent-secondary)]" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ProjectCard;
