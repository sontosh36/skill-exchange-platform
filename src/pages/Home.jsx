import React from "react";
import Hero from "./../components/Hero";
import Skills from "./skills";
import TopRatedProvider from "../components/TopRatedProvider";
import HowItWork from "../components/HowItWork";
import Challenge from "../components/Challenge";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-base-100">
        <Skills />
      </div>
      <div className="bg-black text-white">
        <TopRatedProvider/>
      </div>
      <div className="bg-base-100">
        <Challenge/>
        <HowItWork/>
      </div>
    </div>
  );
};

export default Home;
