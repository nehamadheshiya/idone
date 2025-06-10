import React from 'react';
import biometric from "../assets/biometric.png";
import logistic from "../assets/logistic.png";
import banking from "../assets/banking.png";
import startups from "../assets/startups.png";
import health from "../assets/health.png";

export default function WhyChooseUs() {
    const cardData = [
        {
            title: "Logistics",
            image: logistic,
            description: "Optimize fleet management and staff attendance across locations.",
        },
        {
            title: "Banking",
            image: banking,
            description: "Ensure compliance and manage HR workflows efficiently.",
        },
        {
            title: "Startups",
            image: startups,
            description: "Automate your growing team's operations from day one.",
        },
        {
            title: "Healthcare",
            image: health,
            description: "Track shifts, certifications, and ensure HIPAA compliance.",
        },
    ];

    return (
        <div className="flex items-center justify-center py-14">
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
             
                <div className="max-w-md mt-0 lg:mt-[5%] space-y-4 text-center lg:text-left">
                    <div
                        className="inline-flex items-center gap-1 py-2.5 px-4 rounded-md"
                        style={{ backgroundColor: '#D6EAFF', color: '#007BFF' }}
                    >
                        <img src={biometric} alt="Biometric Icon" className="w-4 h-4" />
                        <span className='poppins-font text-xs'>Biometric Attendance</span>
                    </div>

                    <a href="#" className="text-xs block choose lg:mt-4 mt-1 text-[#007BFF] font-medium uppercase mb-2">
                        Explore Storepulse Dashboard
                    </a>
                    <h2 className="text-xl text-[#1A1C2D] poppins-font md:text-3xl font-medium mb-4">Why Choose Us?</h2>
                    <p className="text-[#363636] text-sm leading-relaxed mb-4 poppins-font text-[11px]">
                        Service Content Momentary Telegraph King Bread Chalk Thief Distance Inform Boundary Because Cat Artificial Good
                        Department Umbrella Ability Miserable Congratulation Native Seat Resign Needle Yesterday.
                    </p>
                    <button className="mt-4 bg-[#007BFF] poppins-font text-sm hover:bg-[#0059B9] text-[#FFFFFF] font-medium px-5 py-2.5 rounded shadow-xl">
                        Get Started With Us →
                    </button>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-2 gap-3 lg:gap-6 poppins-font w-full lg:w-[520px]">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className="group border border-[#58A9FF] hover:border-[#007BFF] hover:border-[1.5px] hover:shadow-2xl rounded-md lg:rounded-xl shadow p-3 lg:p-6 bg-[#f5fafe] hover:bg-white transition-transform duration-300 transform-gpu hover:scale-105 origin-center will-change-transform"
                        >
                            <div className="w-8 h-8 lg:h-11 lg:w-11 rounded-md overflow-hidden mb-4 transition-all duration-300 group-hover:w-12 group-hover:h-12">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain transition-all duration-300"
                                />
                            </div>

                            <h3 className="text-[14px] text-[#424242] font-semibold mt-4 text-left poppins-font transition-all duration-300 group-hover:text-blue-600">
                                {item.title}
                            </h3>
                            <p className="text-xs text-[#5F5F5F] mt-2 text-left poppins-font mb-4 tracking-widest">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
