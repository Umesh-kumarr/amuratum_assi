import React, { useState } from 'react';
import dashboard from '../assets/sidebar/dashboard.svg';
import patients from '../assets/sidebar/patients.svg';
// import doctorSchedule from '../assets/sidebar/Doctorschedule.svg';
import appointments from '../assets/sidebar/appointments.svg';
import chat from '../assets/sidebar/chat.svg';
import consultation from '../assets/sidebar/consultation.svg';
import wallet from '../assets/sidebar/wallet.svg';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const [openAffiliate, setOpenAffiliate] = useState(false);
  const [active, setActive] = useState(""); // store active item name

  // Menu data (so you don’t repeat JSX)
  const menuItems = [
    { name: "Dashboard", icon: dashboard },
    { name: "Patients", icon: patients },
    // { name: "Doctor Schedule", icon: doctorSchedule },
    { name: "Appointments", icon: appointments },
    { name: "Chat", icon: chat },
    { name: "Consultation", icon: consultation },
  ];

  return (
    <aside className="overflow-y-auto w-60 bg-white shadow-md h-screen mt-6 flex flex-col rounded-tr-[34px]">
      <div className="flex-1 p-4">
        <ul>
          <li className="text-[15px] font-medium mb-5 text-[#333333]">Main</li>

          <div className="space-y-5">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onClick={() => setActive(item.name)}
                className="flex items-center gap-2 mb-3 cursor-pointer"
              >
                <div
                  className={`p-[10px] rounded-md transition-colors duration-200 ${active === item.name
                    ? "bg-green-100"
                    : "bg-[rgba(46,55,164,0.05)]"
                    }`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5"
                  />
                </div>
                <li
                  className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-200 ${active === item.name ? "text-[#3A643B]" : "text-[#797979]"
                    }`}
                >
                  {item.name}
                </li>
              </div>
            ))}

            {/* Wallet (Dropdown) */}
            <div className="flex flex-col mb-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenWallet(!openWallet)}
              >
                <div
                  className={`p-[10px] rounded-md ${active === "Wallet"
                    ? "bg-green-100"
                    : "bg-[rgba(46,55,164,0.05)]"
                    }`}
                >
                  <img src={wallet} alt="wallet" className="w-5 h-5" />
                </div>
                <span
                  className={`flex items-center gap-6 text-[15px] font-medium pl-5 transition-colors ${active === "Wallet" ? "text-[#3A643B]" : "text-[#797979]"
                    }`}
                  onClick={() => setActive("Wallet")}
                >
                  Wallet
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openWallet ? "rotate-90" : "rotate-0"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              {openWallet && (
                <ul className="ml-[68px] mt-3 flex flex-col gap-8 text-xs text-gray-600">
                  <li className="hover:text-green-700 cursor-pointer">Transactions</li>
                  <li className="hover:text-green-700 cursor-pointer">Balance</li>
                  <li className="hover:text-green-700 cursor-pointer">Withdraw</li>
                </ul>
              )}
            </div>

            {/* Affiliate (Dropdown) */}
            <div className="flex flex-col mb-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenAffiliate(!openAffiliate)}
              >
                <div
                  className={`p-[10px] rounded-md ${active === "Affiliate"
                    ? "bg-green-100"
                    : "bg-[rgba(46,55,164,0.05)]"
                    }`}
                >
                  <img src={wallet} alt="affiliate" className="w-5 h-5" />
                </div>
                <span
                  className={`flex items-center gap-6 text-[15px] font-medium pl-5 transition-colors ${active === "Affiliate" ? "text-[#3A643B]" : "text-[#797979]"
                    }`}
                  onClick={() => setActive("Affiliate")}
                >
                  Affiliate
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openAffiliate ? "rotate-90" : "rotate-0"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              {openAffiliate && (
                <ul className="ml-[68px] mt-3 flex flex-col gap-8 text-xs text-gray-600">
                  <li>
                    <Link
                      to="/Dashboard"
                      className="hover:text-green-700 cursor-pointer"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li><Link to="/Referraltool" className="hover:text-green-700 cursor-pointer">Referral Tool</Link></li>
                  <li><Link to="/Earninghistory" className="hover:text-green-700 cursor-pointer">Earning History</Link></li>
                </ul>
              )}
            </div>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
