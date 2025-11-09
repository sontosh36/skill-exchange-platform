import React from "react";
import Hero from "./../components/Hero";
import Skills from "./skills";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-white">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
