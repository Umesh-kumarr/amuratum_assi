const EarningHistory = () => {
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
                    <span className='text-[15px] text-[#797979]'>Earning History</span>
                </div>
            </div>
        </div>

    );

};
export default EarningHistory;