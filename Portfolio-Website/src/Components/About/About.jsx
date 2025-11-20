import React from 'react'
import aboutPhoto from '../../assets/Ankit-portfolio.jpg'

function About() {
  return (
    <section id='about' className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 bg-gradient-to-r from-gray-950 to-violet-950">
  {/* Image */}
  <div className="md:w-1/2 flex justify-center  ">
    <img
      src={aboutPhoto}
      alt="Ankit working"
      className="rounded-2xl shadow-xl w-64 md:w-80 hover:scale-105 transition-transform duration-300 shadow-gray-500"
    />
  </div>

  {/* Text */}
  <div className="md:w-1/2 text-center md:text-left md:p-15 md:m-8 lg:pr-25 ">
    <h2 className="text-4xl font-extrabold text-[#FF6B00] 
               drop-shadow-[0_0_15px_rgba(255,107,0,0.6)] mb-4">About Me</h2>
    <p className="text-white md:text-lg mb-4">
      I’m a Front-End Developer passionate about building modern and responsive web applications.
      My goal is to create beautiful interfaces with clean, efficient code.
    </p>
    <p className="text-white md:text-lg">
      Currently, I’m expanding my skills in backend development with Java and Node.js, aiming to
      become a full-stack developer.
    </p>
  </div>
</section>

  )
}

export default About