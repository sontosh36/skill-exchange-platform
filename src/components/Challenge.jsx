import React from "react";

const Challenge = () => {
  return (
    <section className="bg-slate-50 py-13 px-4 font-poppins text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-3">
          Learn & Earn Challenges
        </h2>
        <p className="text-slate-600 mb-10">
          Grow your skills, help others, and unlock rewards every month!
        </p>

        <div className="bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Featured Challenge:
            <span className="text-yellow-300 font-bold">
              Teach 3 in November!
            </span>
          </h3>
          <p className="mb-4">
            Share your skills with 3 people this month and earn the
            <span className="font-semibold text-yellow-200">
              Gold Mentor Badge
            </span>
            .
          </p>
          <button className="bg-yellow-400 cursor-pointer text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
            Join Challenge
          </button>
        </div>

        <div className="max-w-lg mx-auto mb-12">
          <h4 className="text-lg font-semibold text-indigo-900 mb-2">
            Your Progress
          </h4>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-blue-500 h-4 rounded-full transition-all duration-300"></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            3 of 5 challenges completed
          </p>
        </div>

        <div className="text-left">
          <h4 className="text-lg font-semibold text-indigo-900 text-center mb-6">
            Available Challenges
          </h4>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 text-center w-full max-w-sm border border-gray-100">
              <h5 className="text-indigo-800 font-semibold text-lg mb-1">
                Skill Swap Sprint
              </h5>
              <p className="text-slate-600 mb-3">
                Teach or learn a new skill this week.
              </p>
              <span className="text-amber-500 font-semibold"> 100 pts</span>
              <button className="block mx-auto mt-4 bg-blue-600 text-white px-20 py-2 rounded-lg hover:bg-blue-700 transition">
                Join
              </button>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl text-center p-6 w-full  max-w-sm border border-gray-100">
              <h5 className="text-indigo-800 font-semibold text-lg mb-1">
                Local Learner Week
              </h5>
              <p className="text-slate-600 mb-3">
                Attend one local workshop or meetup.
              </p>
              <span className="text-amber-500 font-semibold"> 50 pts</span>
              <button className="block mx-auto mt-4 bg-blue-600 text-white px-20 py-2 rounded-lg hover:bg-blue-700 transition">
                Join
              </button>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl text-center p-6 w-full max-w-sm border border-gray-100">
              <h5 className="text-indigo-800 font-semibold text-lg mb-1">
                Creative Weekend
              </h5>
              <p className="text-slate-600 mb-3">
                Host a creative session with friends.
              </p>
              <span className="text-amber-500 font-semibold"> 30 pts</span>
              <button className=" block mx-auto mt-4 bg-blue-600 text-white px-20 py-2 rounded-lg hover:bg-blue-700 transition">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
