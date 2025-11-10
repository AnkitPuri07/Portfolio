import React from "react";

function Navbar() {
  return (
<>
        <div className="fixed top-0 w-full bg-slate-700 text-slate-800 border border-b border-slate-200 shadow-md">
            <ul className="flex flex-wrap justify-evenly items-center md:text-lg lg:text-xl p-2 ">
               <span className="w-1/6 text-2xl font-bold text-red-500">ANKIT</span>
               <li className="text-white hover:text-red-500 transition duration-600 ease-in-out cursor-pointer">Home</li>
               <li  className="text-white hover:text-red-500 transition duration-600 ease-in-out cursor-pointer">About</li>
               <li  className="text-white hover:text-red-500 transition duration-600 ease-in-out cursor-pointer">Skills</li>
               <li  className="text-white hover:text-red-500 transition duration-600 ease-in-out cursor-pointer">Project</li>
               <li  className="text-white hover:text-red-500 transition duration-600 ease-in-out cursor-pointer">Contact</li>

            </ul>

        </div>
</>
  );
}

export default Navbar;
