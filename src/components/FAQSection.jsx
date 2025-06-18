import { useState } from "react";
import arrow_down from "../idone_assets/arrow_down.png";
import arrow_back from "../idone_assets/arrow_back.png";

const faqs = [
  "How can employees mark attendance on IDONE HRMS?",
  " Is there a mobile application for IDONE?",
  "Can IDONE handle multiple shifts and schedules?",
  "Does IDONE provide payroll generation feature?",
  "Is our HRMS suitable for organizations with remote or field employees?",
  "Is my data on IDONE HRMS secure?",
  "Does IDONE support leave management?",
  "Can IDONE track overtime and late attendance?",
  "How does IDONE prevent proxy attendance or buddy punching?",
  "Can I customize IDONE to fit my organization's specific needs?",
];

const answers = [
  "IDONE can be integrated with Fingerprint Scanner, Facial Recognition (Free-Flow Attendance), Palm Vein Recognition, QR Code with Geo-location tracking, OSD (Outstation Duty). ",
  "Yes, IDONE offers a mobile application compatible with both Android and iOS devices. The app allows employees to mark attendance, check Payslips, request leave and attendance regularisation, and perform other HR-related actions.",
  "Absolutely. IDONE enables Smart Roster Management that supports an unlimited number of shifts and schedules, making it suitable for organizations with diverse operational hours. Admins can easily set up and manage different shifts and schedules through the web portal.",
  " Yes, IDONE empowers you to generate payroll seamlessly for all your employees. Moreover, attendance data on IDONE can be exported with a single click to your existing finance & payroll software, streamlining the payroll process and reducing administrative workload.",
  " Yes, IDONE is ideal for organizations with remote or field employees. The mobile app's geo-location feature ensures that attendance is marked only when the employee is at the designated location, preventing proxy attendance and enhancing accuracy.",
  "Yes, IDONE prioritizes data security by implementing robust encryption protocols and secure authentication methods. All attendance data is stored securely and can only be accessed by authorized personnel, ensuring confidentiality and compliance with data protection regulations.",
  "Yes, IDONE includes a leave management module where employees can apply for leave through the mobile app or web portal, and managers can approve or reject leave requests efficiently.",
  "Yes, IDONE can automatically calculate overtime, late arrivals, and early departures based on the defined shift timings and attendance data. This helps HR teams manage employee working hours more accurately.",
  "IDONE uses biometric verification such as fingerprint and facial recognition, along with geo-location tracking on the mobile app, to ensure that only the actual employee can mark attendance, minimizing fraudulent practices. Chances of identity spoofing and proxy-marking are minimal with IDONE.",
  " Yes, IDONE is highly customizable. You can tailor attendance policies, shift patterns, report formats, and user permissions to fit your organization’s unique requirements. Moreover, IDONE is designed to comply with labor laws and industry standards, providing accurate records and reports that can help organizations meet regulatory requirements.",
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

        <div className="flex flex-col text-[#363636] lg:flex-row gap-3 lg:gap-6 justify-between">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            {leftFAQs.map((question, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-md transition-all duration-100 border ${isOpen
                      ? "border-[#007BFF] border-[1.5px] bg-[#F0F7FF]"
                      : "border-blue-300"
                    }`}
                >
                  <button
                    onClick={() => {
                      setOpenLeft(isOpen ? null : idx);
                      setOpenRight(null);
                    }}
                    className={`w-full text-left p-3 font-medium flex justify-between items-center ${isOpen ? "text-[#0043BD]" : "text-[#363636]"
                      }`}
                  >
                    <span className="poppins-font text-[12px]">{question}</span>
                    <img
                      src={arrow_down}
                      alt="Toggle"
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
          <div className="flex-1 flex flex-col  lg:mt-0 gap-3 md:gap-4">
            {rightFAQs.map((question, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-md transition-all duration-300 border ${isOpen
                      ? "border-[#007BFF] border-[1.5px] bg-[#F0F7FF]"
                      : "border-blue-300"
                    }`}
                >
                  <button
                    onClick={() => {
                      setOpenRight(isOpen ? null : idx);
                      setOpenLeft(null);
                    }}
                    className={`w-full text-left p-3 font-medium flex justify-between items-center ${isOpen ? "text-[#0043BD]" : "text-[#363636]"
                      }`}
                  >
                    <span className="poppins-font text-[12px]">{question}</span>
                    <img
                      src={arrow_down}
                      alt="Toggle"
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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

        <h2 className="text-[13px] mt-16 poppins-font text-center poppins-font text-[#2D2D2D  font-semibold  mb-2">
          Still Have Questions?
        </h2>
        <div className="flex items-center justify-center">
          <a href="#booknow">
              <button className="text-[13px] mt-2 bg-[#007BFF] shadow-xl hover:bg-[#0059B9] rounded-sm text-white px-4 py-2.5 flex items-center gap-2 poppins-font uppercase font-medium mb-2">
            <span>Contact Our Experts</span>
            <img src={arrow_back} alt="Arrow Back" className="w-4 h-4 font-bold" />
          </button>
          </a>
        

        </div>
      </div>
    </div>
  );
} 
