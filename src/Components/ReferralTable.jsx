import React from 'react';

const ReferralTable = ({ data }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-semibold mb-4">Referral Overview</h3>
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
