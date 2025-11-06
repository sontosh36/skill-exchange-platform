import React from "react";
import NavBar from "../components/NavBar";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router";
import Footer from "../components/Footer";

const Errorpage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-4 min-h-screen">
        <BiSolidError size={70} className="text-red-600" />
        <div className="text-center w-6/12">
            <h4 className="text-3xl">404</h4>
            <p className="text-3xl">Not Found</p>
            <p className="text-gray-700">Sorry, the page you are looking for might be removed.</p>
        </div>
        <div className="mt-3">
            <Link to='/' className="text-white bg-black px-3 py-3 rounded-md">Home</Link>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Errorpage;
