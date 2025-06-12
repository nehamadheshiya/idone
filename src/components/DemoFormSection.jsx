import React from 'react';

export default function DemoFormSection() {
    return (
        <div
            className=" gap-4 lg:gap-32 flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-16"
            style={{ background: 'linear-gradient(0deg, #05357F 0%, #0E79ED 100%)' }}
            id='booknow'
        >
            <style>
                {`
            .poppins-font {
              font-family: 'Poppins', sans-serif;
              letter-spacing: 0.02em;
            }
          `}
            </style>
            {/* Left Text Content */}
            <div className="text-white poppins-font  text-center md:text-left md:max-w-lg md:pr-16 mb-10 md:mb-0">
                <div className="inline-block  text-xs font-extralight bg-white/20 text-[#f2efef] px-4 py-2.5 rounded-full backdrop-blur-sm mb-4 lg:mb-8">
                    🔒 Trusted by 500+ Global Companies
                </div>

                <h1 className="text-xl sm:text-[32px] font-semibold leading-snug mb-4 lg:mb-10">
                    Simplify Attendance <br />
                    Management And <br />
                    HR Operations.
                </h1>
                <p className=" mb-4 lg:mb-8 text-[#CECECE] text-[15px]">
                    Connect with our Solutions Team today!
                </p>
                <div className="flex text-[#C6C6C6] flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        ✅ <span>14 Day Free Trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        💸 <span>No Setup Fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                        🕐 <span>24/7 Support</span>
                    </div>
                </div>
            </div>

            {/* Right Form */}

            <div className="w-full max-w-xs poppins-font bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-[#101010] text-md font-semibold text-center mb-6">
                    Help us get to know you
                </h2>
                <form className="space-y-4">

                 
                    <div className="flex flex-col text-xs space-y-1">
                        <label className="text-[#101010] text-[13px] font-medium">Full Name</label>
                        <input
                            type="text"
                            className="w-full border text-[#101010] border-[#C7C7C7] px-2 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                  
                    <div className="flex flex-col text-xs space-y-1">
                        <label className="text-[#101010] text-[13px] font-medium">Work Email</label>
                        <input
                            type="email"
                            className="w-full border text-[#101010] border-[#C7C7C7] px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                  
                    <div className="flex flex-col text-xs space-y-1">
                        <label className="text-[#101010] text-[13px] font-medium">Phone Number</label>
                        <div className="flex gap-2">
                            <select className="w-[20%] border border-gray-300 px-2 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="in">IN</option>
             
                            </select>
                            <input
                                type="tel"
                                className="w-[80%] border border-[#C7C7C7] text-[#101010]  px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

           
                    <div className="flex flex-col text-xs space-y-1">
                        <label className="text-[#101010] text-[13px] font-medium">Company Name</label>
                        <input
                            type="text"
                            className="w-full border text-[#101010] border-[#C7C7C7] px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

             
                    <div className="flex flex-col text-xs space-y-1">
                        <label className="text-[#101010] text-[13px] font-medium">Company Size (Employees)</label>
                        <input
                            type="text"
                            className="w-full border text-[#101010] border-[#C7C7C7] px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

          
                    <button
                        type="submit"
                        className="w-full bg-[#007BFF] hover:bg-[#0059B9] text-white py-2.5 shadow-md rounded-md text-[13px]  transition duration-200"
                    >
                        Request a Demo
                    </button>
                </form>
            </div>


        </div>
    );
}
