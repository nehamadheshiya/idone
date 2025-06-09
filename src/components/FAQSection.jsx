import { useState } from "react";
import arrow_down from "../assets/arrow_down.png";

const faqs = [
  "How can employees mark attendance on IDONE HRMS?",
  "Can employees view their attendance history?",
  "Is geo-location required to mark attendance?",
  "Can attendance be marked remotely?",
  "What if an employee forgets to mark attendance?",
  "How do managers approve attendance requests?",
  "Is biometric attendance supported?",
  "Can employees mark half-day attendance?",
  "Is attendance data synced in real-time?",
  "How can HR export attendance reports?",
];

const answers = [
  "IDONE can be integrated with Fingerprint Scanner, Facial Recognition (Free-Flow Attendance), Palm Vein Recognition, QR Code with Geo-location tracking, OSD (Outstation Duty).",
  "Yes, employees can view detailed attendance logs under the 'My Attendance' section.",
  "Yes, employees must enable location access for accurate attendance marking.",
  "Yes, if your company allows remote work, employees can mark attendance remotely via the mobile app.",
  "They can raise an attendance regularization request from their portal.",
  "Managers can go to the 'Approvals' tab and take action on pending attendance requests.",
  "Yes, IDONE HRMS supports biometric integration for automated attendance marking.",
  "Yes, options for half-day attendance are available while marking.",
  "Yes, all attendance entries are updated in real-time across platforms.",
  "HR can export detailed reports in Excel or PDF from the Reports section.",
];

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const leftFAQs = faqs.filter((_, i) => i % 2 === 0);
  const rightFAQs = faqs.filter((_, i) => i % 2 !== 0);
  const leftAnswers = answers.filter((_, i) => i % 2 === 0);
  const rightAnswers = answers.filter((_, i) => i % 2 !== 0);

  return (
    <div className="bg-[#F3F5FF]">
      <div className="py-12 max-w-6xl px-4 sm:px-6 lg:px-16 mx-auto">
        <style>
          {`
            .poppins-font {
              font-family: 'Poppins', sans-serif;
              letter-spacing: 0.02em;
            }
          `}
        </style>

        <h2 className="text-xs poppins-font text-center text-[#007BFF] font-medium uppercase mb-2">
          Confidence starts here
        </h2>
        <h1 className="text-xl poppins-font text-center md:text-2xl font-medium mb-12">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col text-[#363636] lg:flex-row gap-6 justify-between">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4">
            {leftFAQs.map((question, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-md transition-all duration-100 border ${
                    isOpen
                      ? "border-[#007BFF] border-[1.5px] bg-[#F0F7FF]"
                      : "border-blue-300"
                  }`}
                >
                  <button
                    onClick={() => {
                      setOpenLeft(isOpen ? null : idx);
                      setOpenRight(null); 
                    }}
                    className={`w-full text-left p-3 font-medium flex justify-between items-center ${
                      isOpen ? "text-[#0043BD]" : "text-[#363636]"
                    }`}
                  >
                    <span className="poppins-font text-[12px]">{question}</span>
                    <img
                      src={arrow_down}
                      alt="Toggle"
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-expand text-[12px] poppins-font overflow-hidden text-[#363636]">
                      {leftAnswers[idx]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4">
            {rightFAQs.map((question, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-md transition-all duration-300 border ${
                    isOpen
                      ? "border-[#007BFF] border-[1.5px] bg-[#F0F7FF]"
                      : "border-blue-300"
                  }`}
                >
                  <button
                    onClick={() => {
                      setOpenRight(isOpen ? null : idx);
                      setOpenLeft(null); 
                    }}
                    className={`w-full text-left p-3 font-medium flex justify-between items-center ${
                      isOpen ? "text-[#0043BD]" : "text-[#363636]"
                    }`}
                  >
                    <span className="poppins-font text-[12px]">{question}</span>
                    <img
                      src={arrow_down}
                      alt="Toggle"
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-expand text-[12px] poppins-font overflow-hidden text-[#363636]">
                      {rightAnswers[idx]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
