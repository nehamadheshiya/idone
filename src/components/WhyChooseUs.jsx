import React from 'react';
import biometric from "../idone_assets/biometric.png";
import logistic from "../idone_assets/logistic.png";
import banking from "../idone_assets/banking.png";
import startups from "../idone_assets/startups.png";
import health from "../idone_assets/health.png";

const LogisticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
  <mask id="mask0_1561_13086" style={{ maskType: "alpha" }}  maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
    <rect width="30" height="30" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1561_13086)">
    <path d="M5 25V22.5H8.40625C7.34375 21.5833 6.51042 20.4792 5.90625 19.1875C5.30208 17.8958 5 16.5 5 15C5 12.6667 5.70833 10.6094 7.125 8.82812C8.54167 7.04688 10.3333 5.875 12.5 5.3125V7.9375C11.0417 8.45833 9.84375 9.35938 8.90625 10.6406C7.96875 11.9219 7.5 13.375 7.5 15C7.5 16.125 7.72396 17.1615 8.17188 18.1094C8.61979 19.0573 9.22917 19.875 10 20.5625V17.5H12.5V25H5ZM18.75 25C17.7083 25 16.8229 24.6354 16.0938 23.9062C15.3646 23.1771 15 22.2917 15 21.25C15 20.25 15.3438 19.3906 16.0312 18.6719C16.7188 17.9531 17.5625 17.5729 18.5625 17.5313C18.9167 16.7813 19.4427 16.1719 20.1406 15.7031C20.8385 15.2344 21.625 15 22.5 15C23.6042 15 24.5573 15.3594 25.3594 16.0781C26.1615 16.7969 26.6458 17.6875 26.8125 18.75C27.6875 18.75 28.4375 19.0521 29.0625 19.6562C29.6875 20.2604 30 20.9896 30 21.8438C30 22.7188 29.6979 23.4635 29.0938 24.0781C28.4896 24.6927 27.75 25 26.875 25H18.75ZM22.375 13.75C22.2292 12.8958 21.9479 12.1042 21.5312 11.375C21.1146 10.6458 20.6042 10 20 9.4375V12.5H17.5V5H25V7.5H21.5938C22.4896 8.29167 23.224 9.21875 23.7969 10.2812C24.3698 11.3438 24.7396 12.5 24.9062 13.75H22.375ZM18.75 22.5H26.875C27.0417 22.5 27.1875 22.4375 27.3125 22.3125C27.4375 22.1875 27.5 22.0417 27.5 21.875C27.5 21.7083 27.4375 21.5625 27.3125 21.4375C27.1875 21.3125 27.0417 21.25 26.875 21.25H24.6875V19.6875C24.6875 19.0833 24.474 18.5677 24.0469 18.1406C23.6198 17.7135 23.1042 17.5 22.5 17.5C21.8958 17.5 21.3802 17.7135 20.9531 18.1406C20.526 18.5677 20.3125 19.0833 20.3125 19.6875V20H18.75C18.3958 20 18.099 20.1198 17.8594 20.3594C17.6198 20.599 17.5 20.8958 17.5 21.25C17.5 21.6042 17.6198 21.901 17.8594 22.1406C18.099 22.3802 18.3958 22.5 18.75 22.5Z" fill="white"/>
  </g>
</svg>

);

const BankingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
  <mask id="mask0_1561_13233" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
    <rect width="30" height="30" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1561_13233)">
    <path d="M15 27.5C12.1042 26.7708 9.71354 25.1094 7.82812 22.5156C5.94271 19.9219 5 17.0417 5 13.875V6.25L15 2.5L25 6.25V13.3438C24.6042 13.1771 24.1979 13.026 23.7812 12.8906C23.3646 12.7552 22.9375 12.6562 22.5 12.5938V8L15 5.1875L7.5 8V13.875C7.5 14.8542 7.63021 15.8333 7.89062 16.8125C8.15104 17.7917 8.51562 18.724 8.98438 19.6094C9.45312 20.4948 10.0208 21.3125 10.6875 22.0625C11.3542 22.8125 12.0938 23.4375 12.9063 23.9375C13.1354 24.6042 13.4375 25.2396 13.8125 25.8438C14.1875 26.4479 14.6146 26.9896 15.0938 27.4688C15.0729 27.4688 15.0573 27.474 15.0469 27.4844C15.0365 27.4948 15.0208 27.5 15 27.5ZM21.25 27.5C19.5208 27.5 18.0469 26.8906 16.8281 25.6719C15.6094 24.4531 15 22.9792 15 21.25C15 19.5208 15.6094 18.0469 16.8281 16.8281C18.0469 15.6094 19.5208 15 21.25 15C22.9792 15 24.4531 15.6094 25.6719 16.8281C26.8906 18.0469 27.5 19.5208 27.5 21.25C27.5 22.9792 26.8906 24.4531 25.6719 25.6719C24.4531 26.8906 22.9792 27.5 21.25 27.5ZM20.625 25H21.875V21.875H25V20.625H21.875V17.5H20.625V20.625H17.5V21.875H20.625V25Z" fill="white"/>
  </g>
</svg>
);

const StartupsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
  <mask id="mask0_1561_13289" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
    <rect width="30" height="30" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1561_13289)">
    <path d="M8.75 28.75C8.0625 28.75 7.47396 28.5052 6.98438 28.0156C6.49479 27.526 6.25 26.9375 6.25 26.25V3.75C6.25 3.0625 6.49479 2.47396 6.98438 1.98438C7.47396 1.49479 8.0625 1.25 8.75 1.25H21.25C21.9375 1.25 22.526 1.49479 23.0156 1.98438C23.5052 2.47396 23.75 3.0625 23.75 3.75V7.625C24.125 7.77083 24.4271 8 24.6562 8.3125C24.8854 8.625 25 8.97917 25 9.375V11.875C25 12.2708 24.8854 12.625 24.6562 12.9375C24.4271 13.25 24.125 13.4792 23.75 13.625V26.25C23.75 26.9375 23.5052 27.526 23.0156 28.0156C22.526 28.5052 21.9375 28.75 21.25 28.75H8.75ZM8.75 26.25H21.25V3.75H8.75V26.25ZM12.375 19.375L16.25 15.5V18.75H18.75V11.25H11.25V13.75H14.5L10.625 17.625L12.375 19.375Z" fill="white"/>
  </g>
</svg>
);

const HealthcareIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
  <mask id="mask0_1561_13261" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
    <rect y="0.695312" width="30" height="30" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1561_13261)">
    <path d="M3.75 26.9453V19.4453H6.25V22.6953L10.125 18.8203L11.875 20.5703L8 24.4453H11.25V26.9453H3.75ZM18.75 26.9453V24.4453H22L18.125 20.5703L19.875 18.8203L23.75 22.6953V19.4453H26.25V26.9453H18.75ZM10.125 12.5703L6.25 8.69531V11.9453H3.75V4.44531H11.25V6.94531H8L11.875 10.8203L10.125 12.5703ZM19.875 12.5703L18.125 10.8203L22 6.94531H18.75V4.44531H26.25V11.9453H23.75V8.69531L19.875 12.5703ZM15 18.1953C14.3125 18.1953 13.724 17.9505 13.2344 17.4609C12.7448 16.9714 12.5 16.3828 12.5 15.6953C12.5 15.0078 12.7448 14.4193 13.2344 13.9297C13.724 13.4401 14.3125 13.1953 15 13.1953C15.6875 13.1953 16.276 13.4401 16.7656 13.9297C17.2552 14.4193 17.5 15.0078 17.5 15.6953C17.5 16.3828 17.2552 16.9714 16.7656 17.4609C16.276 17.9505 15.6875 18.1953 15 18.1953Z" fill="white"/>
  </g>
</svg>
);

export default function WhyChooseUs() {
    const cardItems = [
        {
            title: "Smart Sync",
            Icon: LogisticsIcon,
            bgGradient: "linear-gradient(135deg, #06BC00, #009970   )",
            description: "Seamless and secure employee data updates across devices in real-time."
        },
        {
            title: "Foolproof Security",
            Icon: BankingIcon,
            bgGradient: "linear-gradient(135deg, #6366F1, #2563EB)",
            description: "Integrity and security for your employees’ Biometric data that you can trust."
        },
        {
            title: "Mobile First",
            Icon: StartupsIcon,
            bgGradient: "linear-gradient(135deg, #F43F5E, #EC4899)",
            description: "User-friendly interface, optimised for both admins and employees on-the-go."
        },
        {
            title: "Scalable System",
            Icon: HealthcareIcon,
            bgGradient: "linear-gradient(135deg, #FF8956, #FF1F1F)",
            description: " Adapts to teams of any size across multiple locations and any industry."
        }
    ];

    return (
        <div className="flex items-center justify-center py-14"
         id='weserve'
        >
            <div className="mx-2 lg:mx-0 max-w-5xl bg-white flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left p-4 lg:p-0 gap-10 w-full">

                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

                    .choose {
                        font-family: 'Inter', sans-serif;
                        letter-spacing: 0.02em;
                    }
                    .poppins-font {
                        font-family: 'Poppins', sans-serif;
                        letter-spacing: 0.02em;
                    }
                `}</style>

                {/* Left Section */}

                <div className="max-w-md mt-0 lg:mt-[5%] space-y-4 text-center lg:text-left"
               
                >
                    <div
                        className="inline-flex items-center gap-1 py-2.5 px-4 rounded-md"
                        style={{ backgroundColor: '#D6EAFF', color: '#007BFF' }}
                    >
                        <img src={biometric} alt="Biometric Icon" className="w-4 h-4" />
                        <span className='poppins-font text-xs'>Robust HRMS</span>
                    </div>

                    <a href="#" className="text-xs block choose lg:mt-4 mt-1 text-[#007BFF] font-medium uppercase mb-2">
                        Built Your Way
                    </a>
                    <h2 className="text-xl text-[#1A1C2D] poppins-font md:text-3xl font-medium mb-4">Why Choose Us?</h2>
                    <p className="text-[#363636] text-sm leading-relaxed mb-4 poppins-font text-xs">
                       We empower your business with smarter, faster, and secure workforce automation – customisable for your specific needs.

                    </p>
                        <a href="#booknow">
                              <button className="mt-4 bg-[#007BFF] poppins-font text-sm hover:bg-[#0059B9] text-[#FFFFFF] font-medium px-5 py-2.5 rounded shadow-xl">
                        Get Started With Us →
                    </button>
                        </a>
                  
                </div>

                {/* Right Section */}

                <div className="grid grid-cols-2 gap-3 lg:gap-6 poppins-font w-full lg:w-[520px]">
                    {cardItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group border border-[#58A9FF] hover:border-[#007BFF] hover:border-[1.5px] hover:shadow-2xl rounded-xl shadow p-4 lg:p-6 bg-[#f5fafe] hover:bg-white transition-transform duration-300 transform hover:scale-105"
                        >
                            <div
                                className="w-11 h-11 rounded-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: item.bgGradient }}
                            >
                                <item.Icon />
                            </div>
                            <h3 className="text-[14px] text-[#424242] text-start font-semibold poppins-font group-hover:text-blue-600">
                                {item.title}
                            </h3>
                            <p className="text-xs text-[#5F5F5F] mt-2 text-start poppins-font">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}
