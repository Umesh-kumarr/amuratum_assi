import React from 'react';
import { FiCalendar, FiUsers, FiMessageSquare, FiBook, FiCreditCard, FiShare2 } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-60 bg-white shadow-md h-screen p-4 flex flex-col">
      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-green-700 cursor-pointer">📊 Dashboard</li>
        <li className="flex items-center gap-2"><FiUsers/> Patients</li>
        <li className="flex items-center gap-2"><FiCalendar/> Doctor Schedule</li>
        <li className="flex items-center gap-2"><FiCalendar/> Appointments</li>
        <li className="flex items-center gap-2"><FiMessageSquare/> Chat</li>
        <li className="flex items-center gap-2"><FiBook/> Consultation</li>
        <li className="flex items-center gap-2"><FiCreditCard/> Wallet</li>
        <li className="flex items-center gap-2"><FiShare2/> Affiliate</li>
      </ul>
    </div>
  );
};

export default Sidebar;
