import React from 'react'
import {Link} from 'react-router-dom'

function ProjectCard({name,description,img,source}) {
  return (
    <>
    <div className="relative p-3 hover:p-1 w-56 sm:w-56 md:w-64 lg:w-72 sm:h-56  md:h-64  
      lg:h-72 bg-slate-300  
                    rounded-xl overflow-hidden cursor-pointer border-2
     border-blue-700 shadow-md group transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]
     shadow-xl shadow-[0_0_25px_3px_rgba(164,69,255,0.35)  hover:shadow-2xl hover:shadow-indigo-500/70 transition-all duration-500">

  {/* Project Image */}
  <a href={source}>
  <img
    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 rounded-xl transition-opacity duration-500"
    src={img}
    alt="ProjectImg"
  /></a>


  {/* Project Title */}
  <div className="absolute bottom-20 left-0 right-0 text-center text-yellow-300 font-bold text-2xl drop-shadow-md">
    {name}
  </div>

  {/* Description (appears on hover) */}
  <div className="absolute bottom-0 left-0 right-0 text-center text-white text-sm bg-gradient-to-t from-black/80 to-transparent py-4
   opacity-0 group-hover:opacity-100 transition-all duration-500">
    {description}
  </div>
</div>
    </>
  )
}

export default ProjectCard