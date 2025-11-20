import React from "react";

function Navbar() {
  return (
<>
        <div className="fixed top-0 w-full bg-gradient-to-r from-[#1B1B2F] to-[#2D2D44] text-[#EAEAEA] z-50 border border-b border-slate-200 shadow-md">
            <ul className="flex flex-wrap justify-evenly items-center md:text-lg lg:text-xl p-2 ">
               <span className="w-1/4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFD93D]">ANKIT</span>
               <li className="text-white hover:text-[#FF6B00] transition-all duration-300 ease-in-out cursor-pointer"><a href="#home">Home</a></li>
               <li  className="text-white hover:text-[#FF6B00] transition-all duration-300  ease-in-out cursor-pointer"><a href="#about">About</a></li>
                <li  className="text-white hover:text-[#FF6B00] transition-all duration-300 ease-in-out cursor-pointer"><a href="#contact">Contact</a></li>
            </ul>

        </div>
</>
  );
}

export default Navbar;
