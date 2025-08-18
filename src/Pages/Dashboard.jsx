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
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        {["today", "week", "month", "custom"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize ${activeTab === tab ? 'bg-green-100 text-green-800' : 'bg-white border'}`}
          >
            {tab} so far
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {tabsData[activeTab].stats.map((stat, idx) => (
          <StatsCard key={idx} title={stat.title} value={stat.value} />
        ))}
      </div>

      <ReferralTable data={tabsData[activeTab].table} />
    </div>
  );
};

export default Dashboard;
