import React, { useState } from 'react';
import sunImage from '../assets/images/sun.jpg';
import scanImage from '../assets/images/scan.svg';
import arrowBackImage from '../assets/images/arrow_back.svg';
import menuImage from '../assets/images/menu.svg';
import '../App.css'; // Assuming your CSS file is named output.css and is in the src directory

const ProfileComponent = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="w-full h-screen relative">
      <div
        className={`fixed h-screen transition-all duration-300 ${isHidden ? 'w-[0%] -ml-[25%]' : 'w-1/4'}`}
        id="menu"
      >
        {/* Profile */}
        <div className="w-full h-[25vh] bg-[#234668] flex justify-between">
          {/* Profile img and name */}
          <div className="w-[30%] h-[25vh] ml-[10%] flex justify-center items-center">
            <div className="w-full h-[17vh]">
              <img
                src={sunImage}
                alt="Profile"
                className="rounded-[40px] w-[80px] my-0 mx-auto border-2 border-white"
              />
              <p className="text-[13px] mt-2 ml-0 text-white absolute">
                My name is nona
              </p>
            </div>
          </div>
          {/* Scan and menu */}
          <div className="w-[40%] h-[25vh] flex justify-center items-center">
            <div className="w-[38%] h-[11vh] mt-7 text-center">
              <div className="w-[50px] h-[50px] rounded-[25px] border-[2px] border-white flex justify-center items-center">
                <img src={scanImage} alt="Scan" />
              </div>
              <span className="w-[10px] text-white">Scan</span>
            </div>
          </div>
        </div>
        {/* Main content area */}
        <div className="w-full h-auto min-h-[75vh] bg-green-400 overflow-y-scroll">
          <p className="text-black">hi</p>
        </div>
      </div>
      <div
        className={`transition-all duration-300 bg-blue-400 ${isHidden ? 'w-full' : 'w-sto min-w-[75%]'} h-auto min-h-screen float-right`}
        id="content"
      >
        <p className="text-black">me</p>
      </div>
      {/* Toggle Button */}
      <div
        className="fixed top-0 left-0 ml-0 bg-[#234668] w-10 h-10 flex justify-center items-center cursor-pointer z-50"
        id="hide"
        onClick={toggleMenu}
      >
        <img src={isHidden ? menuImage : arrowBackImage} alt="Toggle Menu" />
      </div>
    </div>
  );
};

export default ProfileComponent;
