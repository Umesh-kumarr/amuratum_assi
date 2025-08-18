import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-green-700">{value}</p>
    </div>
  );
};

export default StatsCard;

