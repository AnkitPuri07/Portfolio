import React from 'react'
import ankitPortfolio from "../../assets/ankit2-portfolio.jpg";

function Home() {
  return (
    <>
      <div id='home' className='p-6 md:p-12 lg:p-20 bg-gradient-to-r from-gray-950 to-violet-950 '>
        <div className='flex flex-col md:flex-row bg-slate-800 rounded-xl overflow-hidden shadow-xl shadow-yellow-300'>
             <div className="flex justify-center items-center w-full md:w-1/2 py-8 px-6 md:px-12">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400 hover:scale-105 transition-transform duration-500 ease-in-out">
              <img
                src={ankitPortfolio}
                alt="Ankit Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className='flex flex-col justify-center items-center text-center md:text-left md:items-start w-full md:w-1/2 py-10 px-6 md:px-12'>
            <p className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              Hello I am 
              <span className='text-red-500 ml-2'>Ankit</span>
            </p>
            <p className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2'>
              a Front End Developer
            </p>
            <p className='text-white/90 text-base sm:text-lg md:text-xl lg:text-lg mt-4'>
              I build modern, responsive, and professional web interfaces with clean code and best practices.
            </p>

            <a 
            href='#projects'
            className='mt-4 text-xl font-semibold mx-4 py-2 px-4 rounded-md transition-all duration-300 ease-in-out
                    hover:scale-[1.05] active:scale-[0.98] bg-gradient-to-r from-green-500 to-blue-500
                     text-white shadow-md shadow-gray-200'>
              View Projects
            </a> 
            <a
            href='#skills'
            className=' mt-4 text-xl font-semibold mx-4 py-2 px-4 rounded-md transition-all duration-300 ease-in-out
                    hover:scale-[1.05] active:scale-[0.98] bg-gradient-to-r from-red-700 to-red-500
                     text-white shadow-md shadow-gray-200'>
              View Skills
            </a>
          </div>
       
        </div>
      </div>
    </>
  )
}

export default Home;
