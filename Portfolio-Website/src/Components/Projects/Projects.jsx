import React from 'react'
import ProjectCard from "../ProjectCard/ProjectCard"
import MunicipalSS from '../../assets/Javascript.jpg'
import MovieFinderSS from '../../assets/React.jpg'
import PortfolioSS from '../../assets/HTML.jpg'

function Projects() {

    const ProjectsInfo=[
        {id:"1", name : "Municipal", img : MunicipalSS , description: "Modern, community-focused platform improving local government interaction"},
        {id:"2", name : "MovieFinder", img : MovieFinderSS , description: "Showcasing development skills, projects, and professional digital presence"},
        {id:"3", name : "Portfolio", img : PortfolioSS , description: "interactive search tool for movies, complete with detailed info and ratings"},
    ]
 return (
    <>
    <div className='text-center  mt-10 mb-6 bg-gradient-to-r from-gray-950 to-violet-950'><h2 className='text-4xl font-extrabold text-[#FF6B00] 
               drop-shadow-[0_0_15px_rgba(255,107,0,0.6)]'>My Projects</h2></div>

    <div className='bg-gradient-to-r from-gray-950 to-violet-950 flex flex-wrap gap-3 justify-evenly mb-30'>
      {ProjectsInfo.map((e, index)=>(<ProjectCard
      key={index}
      name={e.name}
      img={e.img}
      description={e.description}
      />))}
    </div>
    </>
  )
}

export default Projects