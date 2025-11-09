import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import { LuBriefcaseBusiness } from "react-icons/lu";

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

      <Swiper
        className="flex-1 w-full"
        spaceBetween={20}
        // navigation={true}
        autoplay={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <img
              className="w-full rounded-lg h-40"
              src="https://i.ibb.co.com/B24kTRzt/download-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="rounded-lg w-full h-40"
              src="https://i.ibb.co.com/tpNKb4bF/download.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
