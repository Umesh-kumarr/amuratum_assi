import React, { useState } from 'react';
import StatsCard from '../Components/StatsCard';
import ReferralTable from "../Components/ReferralTable";
import calander from '../assets/Dashboardicons/calander.svg';
import orderIcon from '../assets/Dashboardicons/orderIcon.svg';
import revenueIcon from '../assets/Dashboardicons/revenueIcon.svg';
import linkIcon from '../assets/Dashboardicons/linkIcon.svg';
import getStarted from '../assets/Dashboardicons/getStarted.svg';


import { ChevronLeft, ChevronRight } from "lucide-react";


const statIcons = {
  "Total Coupons clicks": calander,
  "Total Orders": orderIcon,
  "Total Revenue": revenueIcon,
  "Total Link/Coupon": linkIcon,
};

const referralColumns = [
  {
    header: "Product Name",
    accessor: "product",
    render: (row) => (
      <div className="flex items-center gap-2">
        <img
          src={row.avatar}   // 👈 will read avatar from data
          alt={row.product}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{row.product}</span>
      </div>
    ),
  },
  { header: "Date", accessor: "date" },
  { header: "Time", accessor: "time" },
  { header: "Coupon/Link", accessor: "coupon" },
  { header: "Commission", accessor: "commission" },
  { header: "Clicks", accessor: "clicks" },
  { header: "Orders", accessor: "orders" },
  { header: "Revenue", accessor: "revenue" },
];

const tabsData = {
  today: {
    stats: [
      { title: "Total Coupons clicks", value: "25" },
      { title: "Total Orders", value: "5" },
      { title: "Total Revenue", value: "₹540" },
      { title: "Total Link/Coupon", value: "1" }
    ],
    table: [
      { avatar: "/images/andrea.png", product: "Andrea Lalema", date: "19 Oct 2024", time: "04:10 PM", coupon: "AMU2344", commission: "15%", clicks: 2, orders: 2, revenue: 345 }
    ]
  },
  week: {
    stats: [
      { title: "Total Coupons clicks", value: "155" },
      { title: "Total Orders", value: "35" },
      { title: "Total Revenue", value: "₹3,540" },
      { title: "Total Link/Coupon", value: "3" }
    ],
    table: []
  },
  month: {
    stats: [
      { title: "Total Coupons clicks", value: "255" },
      { title: "Total Orders", value: "55" },
      { title: "Total Revenue", value: "₹5,540" },
      { title: "Total Link/Coupon", value: "5" }
    ],
    table: [
      { avatar: "/images/andrea.png", product: "Andrea Lalema", date: "19 Oct 2024", time: "04:10 PM", coupon: "AMU2344", commission: "15%", clicks: 2, orders: 2, revenue: 345 },
      { avatar: "/images/smith.png", product: "Smith Bruklin", date: "19 Oct 2024", time: "05:10 PM", coupon: "AMU2344", commission: "15%", clicks: 4, orders: 4, revenue: 564 },
      { avatar: "/images/william.png", product: "William Stephin", date: "18 Oct 2024", time: "06:10 PM", coupon: "AMU2344", commission: "25%", clicks: 1, orders: 1, revenue: 200 }
    ]
  },
  custom: {
    stats: [],
    table: []
  }
};

const suffixMap = {
  today: "/day",
  week: "/week",
  month: "/month",
  custom: ""
};


const Dashboard = () => {
  const [showModel , setShowModal] = useState(true);
  const [activeTab, setActiveTab] = useState('month');

  return (
    <div className="flex flex-col overflow-y-auto mt-6 h-full pb-10">
      {/* Content wrapper with scroll */}
      <div className="flex-1  p-4 ">

        {/* Modal */}
      {showModel && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 mt-[76px] pl-60">
          <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 text-center">

            {/* Image */}
            <img
              src={getStarted}
              alt="Affiliate Earnings"
              className="mx-auto w-40 h-40 object-contain mb-4"
            />

            {/* Title */}
            <h2 className="text-lg font-semibold text-[#3A643B]">
              Introducing Affiliate Earnings
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 mt-3">
              Start earning by recommending Amrutam products <br />
              in your patient routines. <br />
              Get commissions for every successful referral <br />
              through your unique link or coupon.
            </p>

            {/* Button */}
            <button onClick={() => setShowModal(false)}  className="mt-6 w-full bg-[#3A643B] text-white font-medium py-3 rounded-lg hover:bg-[#335933] transition">
              Get Started
            </button>
          </div>
        </div>
      )}

        <div className='flex items-center pl-4 gap-4 mb-4'>
          <span className='text-[15px] text-[#797979]'>Affiliate</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 text-[#797979]`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className='text-[15px] text-[#797979]'>Dashboard</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-32  p-5 bg-[#ffffff] mb-4 ml-4 pl-24 rounded-lg  ">
          {["today", "week", "month", "custom"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex flex-col items-center capitalize ">
              <span
                className={`transition-all duration-100 ease-in-out text-lg font-medium
                ${activeTab === tab
                    ? ' text-[#3A643B] '
                    : 'text-[#333448]/50 '
                  }`}
              >
                {tab} so far
              </span>
              <div className={`h-0.5 w-full rounded-full transition-all duration-200 
              ${activeTab === tab
                  ? "bg-[#3A643B]" : "bg-transparent"
                }`}>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        {tabsData[activeTab].stats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pb-4">
            {tabsData[activeTab].stats.map((stat, idx) => (
              <StatsCard key={idx}
                title={stat.title}
                value={stat.value}
                suffix={suffixMap[activeTab]}
                icon={statIcons[stat.title]} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 italic">No stats available</div>
        )}

        {/* Table */}
        {tabsData[activeTab].table.length > 0 ? (
          <div className="overflow-x-auto">
            <ReferralTable
              title="Referral Overview"
              columns={referralColumns}
              data={tabsData[activeTab].table} />
          </div>
        ) : (
          <div className="text-gray-400 text-sm">No referral data for this period.</div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
