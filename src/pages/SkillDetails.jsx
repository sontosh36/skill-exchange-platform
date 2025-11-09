import React from "react";
import { useParams } from "react-router";
import useSkills from "../CustomHooks/useSkills";
import { FaStar } from "react-icons/fa";

const SkillDetails = () => {
  const { skills, loading } = useSkills();
  const { skillId } = useParams();
  const skill = skills?.find((item) => item.skillId === parseInt(skillId));
  if (loading) {
    return <p className="text-center">loading skill....</p>;
  }
  const {
    image,
    providerName,
    providerEmail,
    rating,
    price,
    category,
    slotsAvailable,
    skillName,
    description,
  } = skill;
  return (
    <div className="w-7/12 mx-auto min-h-screen p-6 md:p-10">
      <div className=" bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-300 hover:shadow-blue-200">
        {/* Top Image */}
        <div className="relative">
          <img
            src={image}
            alt={skillName}
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-5">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center">
            {skillName}
          </h2>
          <p className="text-gray-600 text-center">{description}</p>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Instructor Name
              </h3>
              <p>{providerName}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Contact Email
              </h3>
              <p>{providerEmail}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Skill Rating</h3>
              <p className="flex gap-2 items-center"> <FaStar className="text-yellow-700"/> {rating} / 5</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Price</h3>
              <p>${price}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Slots Available
              </h3>
              <p>{slotsAvailable}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Category</h3>
              <p>{category}</p>
            </div>
          </div>

          {/* Enroll Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
