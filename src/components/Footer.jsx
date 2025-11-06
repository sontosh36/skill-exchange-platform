import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 bg-base-300 text-base-content p-10">
      <nav className="place-items-center">
        <img
          className="w-30 h-30 rounded-full"
          src="https://i.ibb.co.com/Ng60xSsn/skillswap.jpg"
          alt=""
        />
        <h6 className="font-bold text-2xl">Skill Exchange Platform</h6>
        <p className="">
          A dynamic skill exchange platform connecting people to learn, teach,
          and trade skills easily within their local community.
        </p>
      </nav>
      <nav className=" pt-4">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms and Conditions</a>
        <a className="link link-hover">FAQ & Help</a>
      </nav>
      <nav className="">
        <h6 className="footer-title">Contact</h6>
        <p className="flex gap-2">
          {" "}
          <IoLocationOutline size={20} /> Moulana Bhasani Rd, Dhaka 1217
        </p>
        <p className="flex gap-2">
          {" "}
          <FaPhoneAlt size={20} /> 01683957021
        </p>
        <p className="flex gap-2"> <MdOutlineEmail size={20}/> support.ramana@gmail.com</p>
        <div className="grid grid-cols-3 gap-5 items-center mt-2">
          <a>
            <FaTwitter size={20} />
          </a>
          <a>
            <FaFacebook size={20} />
          </a>
          <a>
            <CgWebsite size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
