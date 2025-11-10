import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const TopRatedProvider = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-14 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Top Rated Providers
        </h2>
        <Swiper
          className="flex-1 w-full"
          spaceBetween={20}
          // navigation={true}
          autoplay={true}
          slidesPerView={2}
          modules={[Navigation, Autoplay]}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="px-2 sm:px-3">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border-2 border-gray-700 rounded-full"
                    src="https://i.ibb.co.com/LzghtnWY/ceo.jpg"
                    alt="pardhan kumar"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Pardhan Kumar</h4>
                    <p className="text-sm text-gray-400">Instractor</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Students can browse course catalogs, read reviews, compare instructors, and purchase subscriptions or single courses with flexible monthly or yearly options."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 sm:px-3">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border-2 border-gray-700 rounded-full"
                    src="https://i.ibb.co.com/h1cQkbZ7/coo.jpg"
                    alt="titas sarker"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Titas Sarker</h4>
                    <p className="text-sm text-gray-400">Instractor</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Instructors create structured lessons, track student progress, and provide personalized feedback to ensure learners gain practical, real-world skills efficiently."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 sm:px-3">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border-2 border-gray-700 rounded-full"
                    src="https://i.ibb.co.com/bM26Y562/service-manager.jpg"
                    alt="michel jeri"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Michel Jeri</h4>
                    <p className="text-sm text-gray-400">Instractor</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Our platform connects students with expert instructors, offering diverse courses across coding, design, music, language, and personal development."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2 sm:px-3">
              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border-2 border-gray-700 rounded-full"
                    src="https://i.ibb.co.com/9mZ1tYc6/instractor.jpg"
                    alt="Swapon Kumar"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Swapon Kumar</h4>
                    <p className="text-sm text-gray-400">Instractor</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Experienced IT instructor providing hands-on training, expert guidance, and career-focused learning for technology and digital skills."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TopRatedProvider;
