import React from 'react';
import reddot from '../assets/reddot.svg';

const StatsCard = ({ title, value, suffix , icon}) => {
  return (
    <div className="bg-white p-6 border border-[E2E2E2] rounded-lg flex flex-col items-center">
      <h3 className="text-gray-500">{title}</h3>
      <div className="flex items-baseline gap-1">
        <img src={icon} alt={title} className="w-10 h-10 mb-3" />
        <p className="text-2xl font-bold text-green-700">{value}</p>
        {suffix && <span className="text-sm text-gray-500">{suffix}</span>}
      </div>
    </div>
  ); 
};

export default StatsCard;

