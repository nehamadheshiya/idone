import React, { useState, useEffect, useRef } from 'react';
import iPhone1 from '../assets/iPhone1.png';
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
        image: iPhone1,
        title: 'Real-Time And Error-Free Attendance Capture',
        description:
            'Capture employee attendance with Fingerprint, Palm-Vein, QR Code and IRIS scans. Facilitate Free-flow Attendance with real-time, accurate Facial Recognition.',
    },
    {
        id: 'payroll',
        label: 'Payroll',
        image: iPhone1,
        title: 'Seamless Payroll Management',
        description:
            'Automate salary disbursement, tax calculations, and payslip generation effortlessly with real-time updates.',
    },
    {
        id: 'leave',
        label: 'Leave',
        image: iPhone1,
        title: 'Smart Leave Tracking',
        description:
            'Submit, approve, and track leave requests with intelligent rules and calendar sync.',
    },
    {
        id: 'timetable',
        label: 'Timetable',
        image: iPhone1,
        title: 'Flexible Timetable Management',
        description:
            'Design, assign and update employee timetables in real-time with ease.',
    },
    {
        id: 'ui',
        label: 'User Interface',
        image: iPhone1,
        title: 'Modern User Interface',
        description:
            'Enjoy a sleek, intuitive and accessible UI for faster operations and better user experience.',
    },
    {
        id: 'assets',
        label: 'Assets',
        image: iPhone1,
        title: 'Track Company Assets Efficiently',
        description:
            'Manage company-owned devices, licenses and inventory with powerful asset tracking.',
    },
];

export default function HRFeatures() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    // New refs
    const scrollContainerRef = useRef(null);
    const buttonRefs = useRef([]);

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
            if (scrollContainerRef.current && buttonRefs.current[activeIndex]) {
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

        }
    }, [activeIndex]);

    const activeTab = tabs[activeIndex];

    return (
        <div className="bg-gradient-to-b from-[#F8FAFF] to-[#D9E6FF]">
            <div className="lg:px-32 px-4 pb-14 pt-12 max-w-screen-xl mx-auto">
                {/* Tailwind + Custom Style */}
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
                <div className="flex flex-col mt-16 lg:flex-row items-center justify-between gap-8 transition-all duration-300">
                    <img
                        src={activeTab.image}
                        alt={activeTab.label}
                        className="w-[300px] md:w-[432px] lg:w-[647px]"
                    />

                    <div className="text-center lg:text-left max-w-screen-xl">
                        <div className="flex justify-center items-center lg:justify-start">
                            <button className="flex items-center justify-center gap-2 px-8 poppins-font py-2.5 mb-6 rounded-sm text-xs font-medium text-[#007BFF] bg-[#D6EAFF]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A4 4 0 017 16h10a4 4 0 011.879.496M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {activeTab.label}
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
