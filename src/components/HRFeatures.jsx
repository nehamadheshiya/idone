import React, { useState, useEffect, useRef } from 'react';

import attendance from "../assets/attendance.png";
import payroll from "../assets/payroll.png";
import leave from "../assets/leave.png";
import timetable from "../assets/timetable.png";
import userinterface from "../assets/userinterface.png";
import assets from "../assets/assets.png";

import {
    User2,
    Check,
    IndianRupee,
    LogOut,
    CalendarDays,
    Monitor,
    Image as ImageIcon,
} from 'lucide-react';

const tabs = [
    {
        id: 'attendance',
        label: 'Attendance',
        labe2: 'Biometric Attendance',
        image: attendance,
        title: 'Real-time and Error-free Attendance Capture',
        description:
            'Capture employee attendance with Fingerprint, Palm-Vein, QR Code and IRIS scans. Facilitate Free-flow Attendance with real-time, accurate Facial Recognition.',
    },
    {
        id: 'payroll',
        label: 'Payroll',
        labe2: 'Effortless Payroll',
        image: payroll,
        title: 'Automated Payroll Integration',
        description:
            'Generate and export Payroll data to external databases with easy integrations. No more end-of-month late hours for your team.',
    },
    {
        id: 'leave',
        label: 'Leave',
        labe2: 'Accurate Leave Log',
        image: leave,
        title: 'Smart Leave Monitoring',
        description:
            'Manage Casual Leave, Earned Leave, Sick Leave, Compensatory Off, LOP, Holiday Lists – all in one place. You no longer need to manage leave balances manually.',
    },
    {
        id: 'timetable',
        label: 'Timetable',
        labe2: 'Timetables Simplified',
        image: timetable,
        title: 'Efficient Timetable & Roster Management',
        description:
            'Optimise resource allocation by assigning employee shifts, managing employee availability, handling time-off requests, while adhering to labor laws.',
    },
    {
        id: 'ui',
        label: 'User Interface',
        labe2: 'Mobile-First HRMS',
        image: userinterface,
        title: 'User-friendly Web and Mobile App',
        description:
            'Access HR tasks anytime, anywhere with IDONE’s intuitive web and mobile apps — designed for ease, speed, and a seamless experience across all your devices.',
    },
    {
        id: 'assets',
        label: 'Assets',
        labe2: 'Centralized Control',
        image: assets,
        title: 'Document & Asset Management',
        description:
            'Easily assign, track, and manage company assets for every employee. Gain full visibility and control from onboarding to offboarding — all in one centralized, hassle-free platform.',
    },
];

const iconMap = {
    attendance: (
        <div className="relative inline-block w-5 h-5">
            <User2 className="w-5 h-5" />
            <Check className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full" />
        </div>
    ),
    payroll: <IndianRupee className="w-4 h-4" />,
    leave: <LogOut className="w-4 h-4" />,
    timetable: <CalendarDays className="w-4 h-4" />,
    ui: <Monitor className="w-4 h-4" />,
    assets: <ImageIcon className="w-4 h-4" />,
};

const imageWidthMap = {
    attendance: 'w-[300px] md:w-[400px] lg:w-[470px]',
    payroll: 'w-[220px] md:w-[340px] lg:w-[350px]',
    leave: 'w-[350px] md:w-[400px] lg:w-[560px]',
    timetable: 'w-[340px] md:w-[460px] lg:w-[530px]',
    ui: 'w-[360px] md:w-[480px] lg:w-[560px]',
    assets: 'w-[250px] md:w-[350px] lg:w-[400px]',
};


export default function HRFeatures() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const buttonRefs = useRef([]);

    const setTab = (index) => {
        setActiveIndex(index);
        resetInterval();
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % tabs.length);
        }, 4000);
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (window.innerWidth < 640 && buttonRefs.current[activeIndex]) {
            const container = scrollContainerRef.current;
            const button = buttonRefs.current[activeIndex];
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            const offset = buttonRect.left - containerRect.left + container.scrollLeft - container.clientWidth / 2 + button.clientWidth / 2;

            container.scrollTo({
                left: offset,
                behavior: 'smooth',
            });
        }
    }, [activeIndex]);

    const activeTab = tabs[activeIndex];

    return (
        <div className="bg-gradient-to-b from-[#F8FAFF] to-[#D9E6FF]">
            <div className="lg:px-32 px-4 pb-14 pt-12 max-w-screen-xl mx-auto">
                <style>
                    {`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .marquee {
                            display: flex;
                            width: fit-content;
                            animation: marquee 20s linear infinite;
                        }
                        .choose {
                            font-family: 'Inter', sans-serif;
                            letter-spacing: 0.01em;
                        }
                        .poppins-font {
                            font-family: 'Poppins', sans-serif;
                            letter-spacing: 0.03em;
                        }
                    `}
                </style>

                {/* Button Group */}
                <div className="mb-8">
                    <div
                        ref={scrollContainerRef}
                        className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible gap-4 justify-start sm:justify-center px-2 sm:px-0 no-scrollbar"
                    >
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                className="flex-shrink-0 w-auto flex justify-center"
                                ref={(el) => (buttonRefs.current[index] = el)}
                            >
                                <button
                                    onClick={() => setTab(index)}
                                    className={`whitespace-nowrap flex items-center justify-center gap-2 px-4 lg:px-6 py-2.5 rounded-sm border text-sm font-medium transition-all
                                        ${index === activeIndex
                                            ? 'bg-gradient-to-r from-[#0B77EC] to-[#114fab] text-white border-transparent shadow-md'
                                            : 'text-[#727272] border hover:bg-blue-50'
                                        }`}
                                >
                                    {iconMap[tab.id]}
                                    {tab.label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col mt-16 lg:flex-row items-center justify-between  transition-all duration-300">

                    {/* LEFT: Fixed-width container for image */}
                    <div className="lg:w-[110%] flex justify-center items-center">
                        <img
                            src={activeTab.image}
                            alt={activeTab.label}
                            className={`${imageWidthMap[activeTab.id]} transition-all duration-300`}
                        />
                    </div>

                    {/* RIGHT: Text and content */}
                    <div className="text-center lg:text-left max-w-screen-xl">
                        <div className="flex justify-center items-center lg:justify-start">
                            <button className="flex items-center justify-center gap-2 px-4 poppins-font py-2.5 mb-6 rounded-sm text-xs font-medium text-[#007BFF] bg-[#D6EAFF]">
                                {iconMap[activeTab.id]}
                                {activeTab.labe2}
                            </button>
                        </div>

                        <h3 className="text-xl poppins-font md:text-3xl text-[#2D2D2D] font-semibold mb-4">
                            {activeTab.title}
                        </h3>
                        <p className="text-[#363636] poppins-font text-[13px]">
                            {activeTab.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
