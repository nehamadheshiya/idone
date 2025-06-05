import React from "react";
import { CheckCircle } from "lucide-react";
import government from "../assets/government.png";
import mining from "../assets/mining.png";
import logistic from "../assets/logistic.png";
import banking from "../assets/banking.png";
import startups from "../assets/startups.png";
import health from "../assets/health.png";

const industries = [
  { title: "Government", image: government },
  { title: "Mining", image: mining },
  { title: "Logistics And Transportation", image: logistic },
  { title: "Banking And Finance", image: banking },
  { title: "Startups", image: startups },
  { title: "Healthcare", image: health },
];

const IndustryCard = ({ title, image }) => (
<div className="group border border-[#7DBBFF] hover:border-[#007BFF] hover:border-[1.5px] hover:shadow-2xl rounded-xl shadow p-6 bg-white transition-transform duration-300 transform hover:scale-105 origin-left">
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
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>


    <div className="w-11 h-11 rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-[14px] font-semibold mt-4 poppins-font transition-all duration-300 group-hover:text-blue-600 ">{title}</h3>

    <p className="text-xs text-[#4F4F4F] mt-2 poppins-font mb-4">Compliance-focused solutions for healthcare</p>
    <ul className="text-sm text-[#5F5F5F] space-y-3">
      <li className="flex items-center gap-2 poppins-font text-xs">
        <CheckCircle className="w-3.5 h-3.5 text-green-700 " /> HIPAA Compliance
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-3.5 h-3.5 text-green-700" /> Shift Scheduling
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-3.5 h-3.5 text-green-700" /> Credential Tracking
      </li>
    </ul>
  </div>
);

const IndustriesGrid = () => {
  return (
    <section className="bg-[#f5f7ff] py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <p className="text-xs choose text-[#007BFF] font-medium uppercase mb-2">BUILT FOR EVERY SECTOR</p>
        <h2 className="text-xl poppins-font md:text-2xl font-medium mb-12">Industries We Serve</h2>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </section>
  );
};

export default IndustriesGrid;

{/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}

