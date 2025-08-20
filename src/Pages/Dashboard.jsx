import React, { useState } from 'react';
import StatsCard from '../Components/StatsCard';
import ReferralTable from "../Components/ReferralTable";

const tabsData = {
  today: {
    stats: [
      { title: "Total Coupons clicks", value: "25 /day" },
      { title: "Total Orders", value: "5 /day" },
      { title: "Total Revenue", value: "₹540 /day" },
      { title: "Total Link/Coupon", value: "1 /day" }
    ],
    table: [
      { product: "Andrea Lalema", date: "19 Oct 2024", time: "04:10 PM", coupon: "AMU2344", commission: "15%", clicks: 2, orders: 2, revenue: 345 }
    ]
  },
  week: {
    stats: [
      { title: "Total Coupons clicks", value: "155 /week" },
      { title: "Total Orders", value: "35 /week" },
      { title: "Total Revenue", value: "₹3,540 /week" },
      { title: "Total Link/Coupon", value: "3 /week" }
    ],
    table: []
  },
  month: {
    stats: [
      { title: "Total Coupons clicks", value: "255 /month" },
      { title: "Total Orders", value: "55 /month" },
      { title: "Total Revenue", value: "₹5,540 /month" },
      { title: "Total Link/Coupon", value: "5 /month" }
    ],
    table: [
      { product: "Andrea Lalema", date: "19 Oct 2024", time: "04:10 PM", coupon: "AMU2344", commission: "15%", clicks: 2, orders: 2, revenue: 345 },
      { product: "Smith Bruklin", date: "19 Oct 2024", time: "05:10 PM", coupon: "AMU2344", commission: "15%", clicks: 4, orders: 4, revenue: 564 },
      { product: "William Stephin", date: "18 Oct 2024", time: "06:10 PM", coupon: "AMU2344", commission: "25%", clicks: 1, orders: 1, revenue: 200 }
    ]
  },
  custom: {
    stats: [],
    table: []
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('month');

  return (
    <div className="flex flex-col overflow-y-auto mt-6 h-full pb-10">
      {/* Content wrapper with scroll */}
      <div className="flex-1  p-4 space-y-6">
        
        {/* Tabs */}
        <div className="flex gap-3 flex-wrap">
          {["today", "week", "month", "custom"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab} so far
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        {tabsData[activeTab].stats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabsData[activeTab].stats.map((stat, idx) => (
              <StatsCard key={idx} title={stat.title} value={stat.value} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 italic">No stats available</div>
        )}

        {/* Table */}
        {tabsData[activeTab].table.length > 0 ? (
          <div className="overflow-x-auto">
            <ReferralTable data={tabsData[activeTab].table} />
          </div>
        ) : (
          <div className="text-gray-400 text-sm">No referral data for this period.</div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
