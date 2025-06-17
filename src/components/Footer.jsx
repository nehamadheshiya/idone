import React from "react";
import footerLogo from "../idone_assets/footerLogo.png";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white py-10 px-6 md:px-24">
            <style>
                {`
          .poppins-font {
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.02em;
          }
        `}
            </style>

            <div className="max-w-7xl mx-auto poppins-font">

                <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                    <div className="lg:w-[80%] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto">
                        <div>
                            <img src={footerLogo} alt="IDone Logo" className="mb-4 w-[70px]" />
                        </div>
                        <p className="text-[12px] leading-relaxed text-[#D2D2D2] lg:mr-[30%]">
                            IDONE is a smart HRMS solution for biometric attendance, payroll integration, and employee management—perfect for modern workforce tracking.
                        </p>
                    </div>



                    <div className="flex flex-row gap-1 md:gap-10 lg:w-2/3">

                        <div className="w-1/2">
                            <h3 className="text-white text-[14px]  mb-2">Address</h3>
                            <p className="text-[11px] text-[#BCBCBC] leading-relaxed">
                                IDone By Transline Technologies Ltd. <br />
                                23A, Shivaji Marg, Moti Nagar, <br />
                                Karampura Industrial Area, <br />
                                New Delhi, PIN – 110015
                            </p>
                        </div>


                        <div className="w-1/2 ml-2">
                            <h3 className="text-white text-[14px] mb-2">Email</h3>
                            <a
                                href="mailto:info@translineindia.com"
                                className="text-[11px] text-[#BCBCBC] hover:text-white"
                            >
                                info@translineindia.com
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-[12px] text-[#BCBCBC]">
                    © 2025 IDone. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
