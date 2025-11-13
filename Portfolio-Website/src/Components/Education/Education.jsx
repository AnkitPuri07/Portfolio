import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-r from-gray-950 to-violet-950 text-gray-200 flex flex-col  justify-center items-center py-16 px-4"
    >
      {/* 🔥 Section Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#FF6B00] to-[#FFD93D] mb-12 tracking-wide text-center">
        EDUCATION
      </h2>

    
      <div className="w-full shadow-gray-500 max-w-4xl overflow-x-auto bg-gradient-to-r from-gray-950 to-violet-950 backdrop-blur-md rounded-2xl shadow-2xl border border-[#2E2E44]">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#FF6B00]/30 to-[#FFD93D]/30 text-[#FFD93D]">
              <th className="py-4 px-6 text-lg font-semibold">Degree</th>
              <th className="py-4 px-6 text-lg font-semibold">Institute</th>
              <th className="py-4 px-6 text-lg font-semibold">Passed Year</th>
              <th className="py-4 px-6 text-lg font-semibold">GPA</th>
            </tr>
          </thead>

          <tbody>
          
            <tr className="hover:bg-[#2B2B3F] transition-all duration-200">
              <td className="py-4 px-6">SEE</td>
              <td className="py-4 px-6">Kamlamai SEBS</td>
              <td className="py-4 px-6">2079</td>
              <td className="py-4 px-6 text-[#FFD93D] font-semibold">3.75</td>
            </tr>

           
            <tr className="hover:bg-[#2B2B3F] transition-all duration-200">
              <td className="py-4 px-6">SLC</td>
              <td className="py-4 px-6">Texas International College</td>
              <td className="py-4 px-6">2081</td>
              <td className="py-4 px-6 text-[#FFD93D] font-semibold">3.70</td>
            </tr>

        
            <tr className="hover:bg-[#2B2B3F] transition-all duration-200">
              <td className="py-4 px-6">BCA</td>
              <td className="py-4 px-6">Tribhuvan University (TIC)</td>
              <td className="py-4 px-6">Currently Studying (1st Sem)</td>
              <td className="py-4 px-6 text-[#FFD93D] font-semibold">3.55</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;