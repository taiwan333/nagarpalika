import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-7 bg-blue-900 text-white">
      <div className="flex justify-between">
        <div className=" space-y-4 w-1/4">
          <p className="text-2xl font-semibold">सूचनाहरु</p>
          <p className="text-xl pl-3">सूचना तथा समाचार</p>
          <ul className="space-y-4 text-xl pl-3">
            <li> सार्वजनिक खरीद /बोलपत्र सूचना</li>
            <li>एन, कानुन तथा निर्देशिका</li>
            <li>कर तथा शुल्कहरु</li>
          </ul>
        </div>
        <div className="space-y-4 w-1/4">
          <p className="text-2xl font-semibold"> विधुतीय शुसासन सेवा</p>
          <p className="text-xl pl-3">सूचना तथा समाचार</p>
          <ul className="space-y-4 text-xl pl-3">
            <li> सार्वजनिक खरीद /बोलपत्र सूचना</li>
            <li>एन, कानुन तथा निर्देशिका</li>
            <li>कर तथा शुल्कहरु</li>
          </ul>
        </div>
        <div className="space-y-4 w-1/4">
          <p className="text-2xl font-semibold">प्रतिवेदन</p>
          <p className="text-xl pl-3">सूचना तथा समाचार</p>
          <ul className="space-y-4 text-xl pl-3">
            <li> सार्वजनिक खरीद /बोलपत्र सूचना</li>
            <li>एन, कानुन तथा निर्देशिका</li>
            <li>कर तथा शुल्कहरु</li>
          </ul>
        </div>
        <div className="space-y-4 w-1/4">
          <p className="text-2xl font-semibold">संम्पर्क</p>
          <p className="text-lg pl-3">
            देवचुली नगरकार्यपालिकाकाे कार्यालय, देवचुली
            १४,नवलपरासी(ब.सु.पू),नेपाल. फोन: +९७७ ७८५७५०१०,५७५३९६ फ्याक्सः: +९७७
            ७८५७५३९६ इमेल: devchulimunicipality@gmail.com,
            ito.devchulimun@gmail.com वेबसाइट: www.devchulimun.gov.np
          </p>
        </div>
      </div>
      <div className="text-md pt-32 text-center">
        <p>© 2023 देवचुली नगरपालिका</p>
        <p>नगर कार्यपालिकाको कार्यालय</p>
      </div>
    </div>
  );
};

export default Footer;
