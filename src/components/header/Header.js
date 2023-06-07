import React from "react";
import facebook from "../../facebook.png";
import twitter from "../../twitter.png";
import phone from "../../phone.png";
import email from "../../email.png";
import telephone from "../../telephone.png";

const Header = () => {
  return (
    <div className="flex justify-between text-xs lg:text-lg text-gray-800 bg-gray-300 px-5 py-1">
      <div className="flex space-x-4">
        <img
          src={facebook}
          alt=""
          className="h-7 w-7 cursor-pointer hover:translate-x-3"
        />
        <img src={twitter} alt="" className="h-7 w-7 cursor-pointer " />
      </div>
      <div className="flex space-x-8">
        <div className="flex space-x-2 cursor-pointer">
          <img src={phone} alt="" className="h-6 w-6" />
          <p className="hidden lg:flex">078-575396,078-575476,078-575010</p>
        </div>
        <div className="flex space-x-2 cursor-pointer">
          <img src={email} alt="" className="h-6 w-6" />
          <p className="hidden lg:flex">Devchulimunicipality@gmail.com</p>
        </div>
        <div className="flex space-x-2 cursor-pointer">
          <img src={telephone} alt="" className="h-6 w-6" />
          <p className="hidden lg:flex">078-575396</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
