import React from 'react';
import searchlogo from '../assets/searchlogo.svg';
import refreshIcon from '../assets/Dashboardicons/refreshIcon.svg';
import sortbyIcon from '../assets/Dashboardicons/sortbyIcon.svg';
import filterIcon from '../assets/Dashboardicons/filterIcon.svg';

const ReferralTable = ({ data }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg ml-6">
      <div className="relative flex items-center  mb-4 gap-5">
        <h3 className="font-semibold">Referral Overview</h3>
        
        <div className="relative flex items-center gap-5">
          <input
            type="text"
            placeholder="Search here"
            className="bg-gray-200 pl-10 pr-4 py-[10px] rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm font-medium placeholder:text-[#3A643B] opacity-40"
          />
          <span className="absolute opacity-100 ml-4">
            <img src={searchlogo} alt="search" className=" w-5 h-5" />
          </span>
          <button className="rounded-xl bg-[#2E37A4]/5 p-3 flex items-center justify-center">
            <img src={refreshIcon} alt="refresh icon" className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 ml-auto pr-4">
          <button className="rounded-xl bg-[#2E37A4]/5 p-3 flex items-center justify-center cursor-pointer">
            <img src={sortbyIcon} alt="sortby Icon" className="w-4 h-4" />
          </button>
          <button className="rounded-xl bg-[#2E37A4]/5 p-3 flex items-center justify-center cursor-pointer">
            <img src={filterIcon} alt="filter Icon" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500">
            <th>S. No.</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Coupon/Link</th>
            <th>Commission</th>
            <th>Clicks</th>
            <th>Orders</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td>{idx + 1}</td>
              <td>{row.product}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.coupon}</td>
              <td>{row.commission}</td>
              <td>{row.clicks}</td>
              <td>{row.orders}</td>
              <td>{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralTable;
