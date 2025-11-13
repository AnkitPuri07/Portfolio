import React, { useState } from 'react';
import skillsInformation from '../SkillsInfo/SkillsInfo.js';
import SkillCard from '../SkillCard/SkillCard.jsx';

function Skills() {
  const [selectedType, setSelectedType] = useState("frontend");

  const filteredSkills = skillsInformation.filter(
    (skill) => skill.SkillType === selectedType
  );

  return (
    <>
      <div className="text-center bg-gradient-to-r from-gray-950 to-violet-950"><h2 className='text-4xl font-extrabold text-[#FF6B00] 
               drop-shadow-[0_0_15px_rgba(255,107,0,0.6)]'>SKILLS</h2></div>

      {/* Buttons */}
      <div className="flex justify-center items-center w-full p-4 bg-gradient-to-r from-gray-950 to-violet-950 shadow-md ">
        <button
          className="text-xl font-semibold text-[#EAEAEA] mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("frontend")}
        >
          FrontEnd
        </button>

        <button
          className="text-xl font-semibold text-[#EAEAEA] mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("tools")}
        >
          Tools
        </button>

        <button
          className="text-xl font-semibold text-[#EAEAEA] mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("others")}
        >
          Others
        </button>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-evenly bg-gradient-to-r from-gray-950 to-violet-950 gap-4 mb-4">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={index}
            Name={skill.Name}
            proficiency={skill.Proficiency}
            img={skill.img}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;