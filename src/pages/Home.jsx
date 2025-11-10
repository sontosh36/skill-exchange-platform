import React from "react";
import Hero from "./../components/Hero";
import Skills from "./skills";
import TopRatedProvider from "../components/TopRatedProvider";
import HowItWork from "../components/HowItWork";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-white">
        <Skills />
      </div>
      <div className="bg-black text-white">
        <TopRatedProvider/>
      </div>
      <div className="bg-white">
        <HowItWork/>
      </div>
    </div>
  );
};

export default Home;
