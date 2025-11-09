import React from "react";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
    const {image, skillName, providerName, skillId, rating, price, category} = skill;
    // console.log(skill);
  return (
    <div className="bg-gray-200 p-3 rounded text-center shadow-sm space-y-2 object-fill">
      <img
        src={image}
        alt={skillName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="font-semibold mt-2">{skillName}</h3>
      <p className="text-sm">By {providerName}</p>
      <p className="text-sm">Category: {category}</p>
      <div className="flex justify-between">
        <p>Rating: {rating}</p>
        <p>Price: ${price}</p>
      </div>
      <Link to={`/skillDetails/${skillId}`}>
      <button className="cursor-pointer px-3 py-2 rounded-lg bg-blue-500 text-white">See Details</button></Link>
    </div>
  );
};

export default SkillCard;
