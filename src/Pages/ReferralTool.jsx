import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";



const ReferralTool = () => {
    return (

        <div className="flex flex-col overflow-y-auto mt-6 h-full pb-10">
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
                    <span className='text-[15px] text-[#797979]'>Referral Tool</span>
                </div>

                <div className="rounded-xl p-6 bg-white ml-4 mr-5">
                    {/* Title */}
                    <h2 className="text-lg font-medium text-gray-800 mb-6">
                        Product Link/Coupon
                    </h2>

                    <div className="flex items-center justify-between gap-6">
                        {/* Input Section */}
                        <div className="flex flex-col flex-1">
                            <label className="absolute text-xs font-medium text-[#333448]  z-30 ml-2 pl-2 bg-white">
                                Enter the name of Product <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-1/2 mt-3">
                                <select
                                    className="border-[3px] border-[#2E37A4]/10 rounded-xl px-3 py-2 w-full text-sm text-gray-700 focus:outline-none focus:border-[#333448]/30 appearance-none bg-white pr-8"
                                >
                                    <option value=" " disabled selected hidden>
                                    </option>
                                    <option value="product1">Product 1</option>
                                    <option value="product2">Product 2</option>
                                    <option value="product3">Product 3</option>
                                </select>

                                {/* Custom Arrow */}
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                            <span>
                                Enter or Select the name of product you want to refer to your patient.
                            </span>
                            {/* Button */}
                            <button className="bg-[#3A643B] hover:bg-green-900 text-white  py-[6px]  ml-auto rounded-xl min-w-48 ">
                                Get
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl p-6 bg-white ml-4 mr-5">
                    {/* Title */}
                    <h2 className="text-lg font-medium text-gray-800 mb-6">
                        Cart Discount
                    </h2>

                    <div className="flex items-center justify-between gap-6">
                        {/* Input Section */}
                        <div className="flex flex-col flex-1">
                            <div className="flex items-center w-full mt-3 ">

                                <input
                                    type="text"
                                    placeholder="DRLIAM2374"
                                    className="border-[3px] border-[#2E37A4]/10 rounded-xl px-3 py-2 w-1/2 text-sm text-gray-700 focus:outline-none focus:border-[#333448]/30 bg-white"
                                />

                                {/* Button */}
                                <button className="bg-[#3A643B] hover:bg-green-900 text-white ml-auto py-[6px] rounded-xl min-w-48 ">
                                    Copy
                                </button>
                            </div>
                            <span className="text-sm font-medium italic font-nunito text-[#101018] mt-2 block">
                                Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.
                            </span>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};
export default ReferralTool;