import React from 'react';
import ReferralTable from '../Components/ReferralTable';

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
    { header: "Earning", accessor: "earning" },
    {
        header: "Status", accessor: "status", render: (row) => (
            <span
                className={
                    row.status === "Paid"
                        ? "text-green-600 font-medium"
                        : "text-red-500 font-medium"
                }
            >
                {row.status}
            </span>
        ),
    },
];

const tabsData = {
    today: {
        table: [
            {
                avatar: "/images/product.png",
                product: "Amrutam Nari Sondarya Malt",
                date: "19 Oct, 2024",
                time: "04 : 10 PM",
                coupon: "AMU2344",
                commission: "15%",
                earning: "INR 120",
                status: "Paid"
            },
            {
                avatar: "/images/product.png",
                product: "Amrutam Nari Sondarya Malt",
                date: "19 Oct, 2024",
                time: "05 : 10 PM",
                coupon: "AMU2344",
                commission: "15%",
                earning: "INR 112",
                status: "Paid"
            },
            {
                avatar: "/images/product.png",
                product: "Amrutam Nari Sondarya Malt",
                date: "18 Oct, 2024",
                time: "06 : 10 PM",
                coupon: "AMU2344",
                commission: "25%",
                earning: "INR 82",
                status: "Pending"
            }
        ]
    }
};


const EarningHistory = () => {
    return (
        <div className="flex flex-col overflow-y-auto mt-6 h-full pb-10 pr-5 ">
            {/* Content wrapper with scroll */}
            <div className="flex-1 w-full space-y-6">

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
                    <span className='text-[15px] text-[#797979]'>Earning History</span>
                </div>

                {/* Table */}
                {tabsData.today.table.length > 0 ? (
                    <div className="overflow-x-auto">
                        <ReferralTable
                            title="Earning History"
                            columns={referralColumns}
                            data={tabsData.today.table} />
                    </div>
                ) : (
                    <div className="text-gray-400 text-sm">No referral data for this period.</div>
                )}
            </div>
        </div>

    );

};
export default EarningHistory;