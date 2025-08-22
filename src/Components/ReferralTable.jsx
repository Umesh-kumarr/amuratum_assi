import React from 'react';
import searchlogo from '../assets/searchlogo.svg';
import refreshIcon from '../assets/Dashboardicons/refreshIcon.svg';
import sortbyIcon from '../assets/Dashboardicons/sortbyIcon.svg';
import filterIcon from '../assets/Dashboardicons/filterIcon.svg';
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReferralTable = ({ title = "Table", columns, data }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg ml-6">
      <div className="relative flex items-center  mb-4 gap-5">
        <h3 className="font-semibold">{title}</h3>

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
          <tr className="text-gray-500 text-sm">
            <th className="py-3">S. no</th>
            {columns.map((col, idx) => (
              <th key={idx} className="py-3">{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm font-medium text-gray-800">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Checkbox */}
              <td className="flex items-center gap-2 py-3">
                <input type="checkbox" className="w-4 h-4 accent-[#2E37A4] cursor-pointer" />
                <span>{rowIndex + 1}.</span>
              </td>

              {/* Render each column dynamically */}
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-3">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-500">
        {/* Rows per page */}
        <span className="text-gray-400">Rows per page: 8</span>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Count */}
          <span>1–8 of 80</span>

          {/* Arrows */}
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-md border border-gray-200 hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-md border border-gray-200 hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReferralTable;
