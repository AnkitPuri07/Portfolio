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
      <div className="text-center text-3xl font-bold  bg-slate-500">SKILLS</div>

      {/* Buttons */}
      <div className="flex justify-center items-center w-full p-4 bg-slate-500 shadow-md ">
        <button
          className="text-xl font-semibold text-gray-700 mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("frontend")}
        >
          FrontEnd
        </button>

        <button
          className="text-xl font-semibold text-gray-700 mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("tools")}
        >
          Tools
        </button>

        <button
          className="text-xl font-semibold text-gray-700 mx-4 py-2 cursor-pointer
                     transition-all duration-300 ease-in-out hover:text-indigo-600
                     hover:scale-[1.05] active:scale-[0.98]"
          onClick={() => setSelectedType("others")}
        >
          Others
        </button>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-500 mb-4">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={index}
            Name={skill.Name}
            proficiency={skill.proficiency}
            img={skill.img}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;