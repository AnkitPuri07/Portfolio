import React from 'react'
import {Link} from 'react-router-dom'

function ProjectCard({name,description,img}) {
  return (
    <>
    <div className="relative bg-slate-300  p-8 w-full sm:w-[45%] md:w-[30%] lg:w-1/4 h-[380px] rounded-xl overflow-hidden cursor-pointer border-2
     border-blue-700 shadow-md group transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">

  {/* Project Image */}
  <img
    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 rounded-xl transition-opacity duration-500"
    src={img}
    alt="ProjectImg"
  />


  {/* Project Title */}
  <div className="absolute bottom-20 left-0 right-0 text-center text-white font-bold text-2xl drop-shadow-md">
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