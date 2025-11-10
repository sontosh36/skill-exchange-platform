import React from "react";
import { useParams } from "react-router";
import useSkills from "../CustomHooks/useSkills";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

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

   const handleBook = (e) => {
    e.preventDefault();
    toast.success("Book now Successful");
    e.target.reset();
  };
  return (
    <div className="w-11/12 md:w-7/12 mx-auto min-h-screen p-6 md:p-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-700">
            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Instructor Name
              </h3>
              <p>{providerName}</p>
            </div>

            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Contact Email
              </h3>
              <p>{providerEmail}</p>
            </div>

            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Skill Rating</h3>
              <p className="flex gap-2 items-center">
                {" "}
                <FaStar className="text-yellow-700" /> {rating} / 5
              </p>
            </div>

            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Price</h3>
              <p>${price}</p>
            </div>

            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">
                Slots Available
              </h3>
              <p>{slotsAvailable}</p>
            </div>

            <div className="bg-blue-50 p-2 md:p-4  rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600 mb-1">Category</h3>
              <p>{category}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-blue-600 font-bold text-xl">
            Book Session
          </h2>
        </div>
        <form onSubmit={handleBook} className="space-y-5 mx-auto py-7">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <label className="floating-label">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input outline-none w-40  md:w-70"
                />
              </label>
            </div>
            <div>
              <label className="floating-label">
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  className="input outline-none w-40 md:w-70"
                  placeholder="Email"
                />
              </label>
            </div>
            <button type="submit"
              className="text-white bg-blue-600 px-3 py-2 cursor-pointer rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
