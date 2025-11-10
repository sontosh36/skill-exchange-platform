import React from "react";

const HowItWork = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl flex justify-center mb-3">
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co.com/c58yZt5/profile.png" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Create Your Profile
            </h3>
            <p className="text-gray-600">
              Sign up and showcase your skills and the skills you want to learn.
              Add a bio, profile picture, and location preferences.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-3 flex justify-center">
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co.com/rfM1sK8g/search-2.png" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Explore Popular Skills
            </h3>
            <p className="text-gray-600">
              Browse a wide range of listings nearby. Filter by skill type,
              level, or proximity to find the perfect match.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-3 flex justify-center">
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co.com/S4wTBjVm/message.png" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Connect & Learn
            </h3>
            <p className="text-gray-600">
              Message skill providers, schedule sessions, and start learning or
              trading skills. Leave reviews to build a trusted community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
