import React from 'react';

function SkillCard({ Name, img, proficiency }) {
  // Calculate the dynamic width for the progress bar
  const proficiencyWidth = `${proficiency}%`;

  return (
    <div className="w-56 sm:w-56 md:w-64 lg:w-72 bg-slate-300 rounded-xl shadow-2xl overflow-hidden 
                    transform hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-indigo-500/50 ring-4 ring-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-500/70 transition-all duration-500">
      
      {/* 1. Skill Image Section (Container for the image) */}
      <div className="w-full h-40  sm:h-56  md:h-64  
      lg:h-72 rounded-xl overflow-hidden shadow-2xl hover:scale-105
       transition-transform duration-500 ease-in-out">
        {/* Image tag with object-cover to fill the space */}
        <img
          src={img}
          alt={`${Name} logo`}
          className="w-full h-full object-cover"
          // Simple fallback to display a placeholder text if the image fails to load
          
        />

      </div>

      {/* 2. Content Section */}
      <div className="space-y-1">
        {/* Name and Proficiency Percentage */}
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-extrabold text-gray-800">{Name}</h3>
          <p className="text-base font-bold text-indigo-600">{proficiency}%</p>
        </div>
        
        {/* 3. Proficiency Bar */}
        <div>
            <p className="text-xs text-gray-500 mb-1 font-medium">Proficiency Level</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-blue-600 transition-all duration-700 ease-out"
                style={{ width: proficiencyWidth }}
            ></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;