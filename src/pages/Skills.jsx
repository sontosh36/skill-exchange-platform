import React from "react";
import useSkills from "../CustomHooks/useSkills";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const { skills, loading } = useSkills();
  const data = skills;
  //   console.log(data);
  return (
    <div className="w-11/12 mx-auto py-14 mt-2">
      <div className="w-7/12 mx-auto text-center space-y-3 mb-4">
        <h2 className="text-2xl font-bold">Explore Popular Skills</h2>
        <p className="text-gray-500">
          Discover the most in-demand skills shared by our talented community.
          Learn, tech, and grow together.
        </p>
      </div>
      {loading ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill}></SkillCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
