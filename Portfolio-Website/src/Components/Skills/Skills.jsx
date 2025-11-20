import React, { useState } from 'react';
import skillsInformation from '../SkillsInfo/SkillsInfo.js';
import SkillCard from '../SkillCard/SkillCard.jsx';

function Skills() {
  const [selectedType, setSelectedType] = useState("frontend");

  const filteredSkills = skillsInformation.filter(
    (skill) => skill.SkillType === selectedType 
  );

  const getButtonClass = (type) =>
    `text-xl font-semibold mx-4 py-2 px-4 rounded-md transition-all duration-300 ease-in-out
     hover:scale-[1.05] active:scale-[0.98] ${
       selectedType === type
         ? "bg-yellow-400 text-black shadow-md shadow-yellow-400/60"
         : "text-[#EAEAEA] hover:text-yellow-400"
     }`;

  return (
    <>
    <div id="skills" className='mb-10'></div>
    <section id="skills">
      <div  className="text-center bg-gradient-to-r from-gray-950 to-violet-950"><h2 className='text-4xl font-extrabold text-[#FF6B00] 
               drop-shadow-[0_0_15px_rgba(255,107,0,0.6)] mt-20 mb-10'>SKILLS</h2></div>

      {/* Buttons */}
      <div className="flex justify-center items-center w-full p-4 bg-gradient-to-r from-gray-950 to-violet-950 shadow-md ">
        <button
          className={getButtonClass("frontend")}
          onClick={() => setSelectedType("frontend")}
        >
          FrontEnd
        </button>

        <button
          className={getButtonClass("tools")}
          onClick={() => setSelectedType("tools")}
        >
          Tools
        </button>

        <button
         className={getButtonClass("others")}
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
      </section>
      </>
    
  );
}

export default Skills;