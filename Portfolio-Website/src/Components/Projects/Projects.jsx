import React from 'react'
import ProjectCard from "../ProjectCard/ProjectCard"
import MunicipalSS from '../../assets/Javascript.jpg'
import MovieFinderSS from '../../assets/React.jpg'
import PortfolioSS from '../../assets/HTML.jpg'

function Projects() {

    const ProjectsInfo=[
        {id:"1", name : "Municipal", img : MunicipalSS , description: "hello"},
        {id:"2", name : "MovieFinder", img : MovieFinderSS , description: "hoo"},
        {id:"3", name : "Portfolio", img : PortfolioSS , description: "hii"},
    ]
 return (
    <>
    <div className='text-center text-white text-4xl font-bold mb-6 bg-slate-500'>My Projects</div>

    <div className='bg-slate-500 flex flex-wrap flex-col md:flex-row justify-evenly'>
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