import React, { useState } from "react";
import ReactLogo from "../../logos.png";
import flag from "../../flag.gif";
import navbarList from "./NavbarList";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between mt-8 ml-6">
        <div className="flex cursor-pointer">
          <div className="self-center">
            <img src={ReactLogo} alt="logo" className="h-24 w-auto" />
          </div>
          <div className="text-pink-700 mx-4">
            <p className="text-3xl font-bold">देवचुली नगरपालिका</p>
            <p className="text-3xl font-bold mt-3">
              नगर कार्यपालिकाको कार्यालय गण्डकी प्रदेश,
            </p>
            <p className="text-2xl text-red-900">
              नवलपरासी(बर्दघाट सुस्ता पूर्व),नेपाल
            </p>
            <p className="text-2xl text-red-900">
              "आर्थिक विकास र स्वरोजगारः समृद्ध देवचुली निर्माणको आधार "
            </p>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-40 lg:hidden space-y-1 mr-8 self-center cursor-pointer"
        >
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div>
        <div className="hidden lg:flex">
          <div className="self-center space-x-1 m-4">
            <input
              type="search"
              className="border-2 border-black  p-1 focus:outline-none"
            />
            <button className="bg-gray-200 p-1 text-md border-2 border-black">
              Search
            </button>
          </div>
          <div>
            <img src={flag} alt="" className="h-36 w-36" />
          </div>
        </div>
      </div>
      <div
        className={`${open ? "block" : "hidden"}
         " text-[16px] md:text-[17px] lg:text-[21px] h-100vh w-[100%] lg:w-5/6 bg-white absolute top-0 py-4 lg:top-auto space-y-8 lg:space-y-0 text-center lg:flex md:gap-x-2 lg:gap-x-4  lg:ml-10 lg:mr-20 text-gray-700"}`}
      >
        <div className="hover:text-red-700">गृहपृष्ठ</div>
        <hr />
        <div className="hover:text-red-700">परिचय</div>
        <hr />
        <div className="hover:text-red-700">कार्यक्रम तथा परियोजना</div>
        <hr />
        <div className="hover:text-red-700">प्रतिवेदन</div>
        <hr />
        <div className="hover:text-red-700">विधुतीय शुसासन सेवा</div>
        <hr />
        <div className="hover:text-red-700">सूचना तथा जानकारी</div>
        <hr />
        <div className="hover:text-red-700">ग्यालरी</div>
        <hr />
        <div className="hover:text-red-700">राजपत्र</div>
        <hr />
        <div className="hover:text-red-700">सम्पर्क</div>
        <hr />
        <div className="hover:text-red-700">COVID 19</div>
        <hr />
        <div className="hover:text-red-700">Covid CMIS</div>
      </div>
    </div>
  );
};

export default Navbar;
