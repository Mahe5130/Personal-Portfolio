import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative ">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
        </div>
        {/* skills section */}
        <div className="grid grid-col-2">
          <SkillsLevel skillName="HTML5" percentage={"99%"} />
          <SkillsLevel skillName="CSS3" percentage="95%" />
          <SkillsLevel skillName="Tailwind" percentage="80%" />
          <SkillsLevel skillName="Javascript" percentage="95%" />
          <SkillsLevel skillName="React Js" percentage="95%" />
          <SkillsLevel skillName="PHP" percentage="95%" />
          <SkillsLevel skillName="Python" percentage="90%" />
          <SkillsLevel skillName="Jquery & Ajax" percentage="95%" />
          <SkillsLevel skillName="React Native" percentage="85%" />
          <SkillsLevel skillName="Git" percentage="95%" />
           <SkillsLevel skillName="Ms Office Suite" percentage="95%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
