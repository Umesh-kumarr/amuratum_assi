import React from 'react';
import dashboard from '../assets/sidebar/dashboard.svg';
import patients from '../assets/sidebar/patients.svg';
import doctorSchedule from '../assets/sidebar/doctorSchedule.svg';
import appointments from '../assets/sidebar/appointments.svg';
import chat from '../assets/sidebar/chat.svg';
import consultation from '../assets/sidebar/consultation.svg';
import wallet from '../assets/sidebar/wallet.svg';


const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow-md h-screen p-4 mt-6 flex flex-col rounded-tr-[34px]">
      <ul >
        <li className="text-base font-medium  ">
          Main
        </li>
        <div className="space-y-3 ">

          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">
              <img src={dashboard} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Dashboard
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">
              <img src={patients} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Patients
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">
              <img src={doctorSchedule} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Doctor Schedule
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">
              <img src={appointments} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Appointments
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">

              <img src={chat} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Chat
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">

              <img src={consultation} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Consultation
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">

              <img src={wallet} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Wallet
            </li>
          </div>

          <div className='flex items-center gap-2 mb-3'>
            <div className="p-2 rounded-md bg-[rgba(46,55,164,0.05)]">

              <img src={wallet} alt="search" className="w-5 h-5" />
            </div>
            <li className="hover:text-green-700 cursor-pointer flex items-center gap-2">
              Affiliate
            </li>
          </div>

        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
