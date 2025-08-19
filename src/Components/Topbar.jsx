import React from 'react';
import logo from '../assets/logo.svg';
import searchlogo from '../assets/searchlogo.svg';
import hamnav from '../assets/hamnav.svg';
import settinglogo from '../assets/settinglogo.svg';
import profile from '../assets/profile.svg';
import msgicon from '../assets/msgicon.svg';
import bellicon from '../assets/bellicon.svg';
import reddot from '../assets/reddot.svg';

const Topbar = () => {
  return (
    <section className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left: Logo + Search */}
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" className="h-8" />
          <img src={hamnav} alt="menu" className="w-5 h-5 cursor-pointer" />

          {/* Search Box */}
          <div className="relative">

            <input
              type="text"
              placeholder="Search here"
              className="bg-gray-200 pl-10 pr-4 py-3 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm font-medium placeholder:text-[#3A643B] opacity-40"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-100">
              <img src={searchlogo} alt="search" className="w-5 h-5" />
            </span>
          </div>

        </div>

        {/* Right: Profile + Settings */}
        <div className="flex items-center">
          <div className='flex items-center gap-2'>

            <div className="relative w-10 h-10">
              <img src={msgicon} alt="logo" className="absolute top-1 left-1 w-6 h-6 z-10 cursor-pointer"/>
              <img src={reddot} alt="logo" className="absolute top-1 left-4 w-3 h-3 z-20"/>

            </div>


            <div className='relative w-10 h-10 mr-3'>
              <img src={bellicon} alt="logo" className="absolute top-1 left-1 w-6 h-6 z-10 cursor-pointer " />
              <img src={reddot} alt='logo' className='absolute top-1 left-4 w-3 h-3 z-20' />
            </div>

          </div>

          <div className='flex flex-col items-end mr-2 '>
            <span className="font-semibold text-[#3A643B] mb-0.5">Dr.Liam Michael</span>
            <span className="font-semibold  text-xs text-[#3A643B] opacity-40">Docter</span>
          </div>

          <img src={profile} alt="profile" className="w-10 h-10 rounded-xl mr-5" />
          <img src={settinglogo} alt="settings" className="w-[26px] h-[26px] cursor-pointer" />

        </div>
      </div>
    </section>
  );
};

export default Topbar;
