import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center gap-4 items-center py-6 px-4">
      <div className="flex-2 space-y-2">
        <h3 className="text-xl">Welcome to our</h3>
        <h2 className="text-5xl leading-20 font-extrabold mb-4">
          Learn, Grow and <br /> Succeed{" "}
          <span className="rounded-tl-4xl rounded-br-4xl bg-blue-600 text-white px-2 py-1">
            Online
          </span>
        </h2>
        <p className="text-gray-600 text-md mb-4">
          Learning Management System, a place to learn at your own place,
          anytime and anywhere. With courses for all ages and interests. you can
          gain new skills.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-xl cursor-pointer transition">
            Get Started
          </button>
          <button className="rounded-full border-blue-600 border-2 px-5 py-2 text-xl cursor-pointer transition bg-white hover:bg-blue-600 hover:text-white flex gap-2 items-center">
            {" "}
            <FaPlayCircle /> Free Trial
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <img
          className="rounded-lg"
          src="https://i.ibb.co.com/B24kTRzt/download-1.jpg"
          alt=""
        />
        <div className="p-2 flex gap-2 rounded-xl absolute h-13 top-39 -left-4 bg-white">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co.com/tpNKb4bF/download.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-xs font-semibold">50+</h4>
            <p className="text-xs font-semibold text-gray-500">
              Expert Mentors
            </p>
          </div>
        </div>
        <div className="p-2 flex gap-2 rounded-xl absolute h-13 -top-9 left-35 bg-white">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co.com/4R0SZbKh/download-3.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-xs font-semibold">10K+</h4>
            <p className="text-xs font-semibold text-gray-500">Total student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
