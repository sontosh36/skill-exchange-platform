import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FcRating } from "react-icons/fc";

const providers = [
  {
    name: "Pardhan Kumar",
    role: "Instructor",
    rating: 3.9,
    img: "https://i.ibb.co.com/LzghtnWY/ceo.jpg",
    description:
      "Students can browse course catalogs, read reviews, compare instructors, and purchase subscriptions or single courses with flexible monthly or yearly options.",
  },
  {
    name: "Titas Sarker",
    role: "Instructor",
    rating: 5.0,
    img: "https://i.ibb.co.com/h1cQkbZ7/coo.jpg",
    description:
      "Instructors create structured lessons, track student progress, and provide personalized feedback to ensure learners gain practical, real-world skills efficiently.",
  },
  {
    name: "Michel Jeri",
    role: "Instructor",
    rating: 4.4,
    img: "https://i.ibb.co.com/bM26Y562/service-manager.jpg",
    description:
      "Our platform connects students with expert instructors, offering diverse courses across coding, design, music, language, and personal development.",
  },
  {
    name: "Swapon Kumar",
    role: "Instructor",
    rating: 3.2,
    img: "https://i.ibb.co.com/9mZ1tYc6/instractor.jpg",
    description:
      "Secure payments, interactive video lessons, and community forums make learning engaging, while instructors earn revenue and grow their teaching presence online.",
  },
];
const TopRatedProvider = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Top Rated Providers
        </h2>
        <p className="mt-4 text-gray-400 text-lg sm:text-xl">
          Learn from the best instructors in your area and enhance your skills
          with our expert-led courses.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {providers.map((provider, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-950 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover border-gray-200 rounded-full"
                    src={provider.img}
                    alt={provider.name}
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-300">
                      {provider.name}
                    </h4>
                    <p className="text-sm text-gray-400">{provider.role}</p>
                  </div>
                </div>
                <div>
                  <h6 className="flex gap-2 items-center text-lg text-gray-200"><FcRating className="text-blue-600"/> {provider.rating}</h6>
                </div>
              </div>
              <p className="text-gray-500 italic leading-relaxed">
                {provider.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopRatedProvider;
