import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "../ProjectCard/ProjectCard";
import MunicipalSS from '../../assets/Municipal.png';
import MovieFinderSS from '../../assets/MovieFinder.png';
import PortfolioSS from '../../assets/HTML.jpg';

function Projects() {
  const ProjectsInfo = [
    {
      id: "1",
      name: "Municipal-Website",
      img: MunicipalSS,
      source: "https://municipal-website-ankit.vercel.app/",
      description: "Modern, community-focused platform improving local government interaction"
    },
    {
      id: "2",
      name: "MovieFinder",
      img: MovieFinderSS,
      source: "https://movie-finder-ankit.vercel.app/",
      description: "A sleek movie search app showcasing modern development capabilities"
    },
    {
      id: "3",
      name: "BookVerse",
      img: PortfolioSS,
      source: "#",
      description: "Currently in development - Coming soon!"
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full mb-4" />
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Explore my latest work. Each project represents my commitment to creating beautiful, functional web applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {ProjectsInfo.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                name={project.name}
                img={project.img}
                source={project.source}
                description={project.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
