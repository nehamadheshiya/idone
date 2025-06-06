import React from "react";
import { CheckCircle } from "lucide-react";
import government from "../assets/government.png";
import mining from "../assets/mining.png";
import logistic from "../assets/logistic.png";
import banking from "../assets/banking.png";
import startups from "../assets/startups.png";
import health from "../assets/health.png";

const industries = [
  {
    title: "Government",
    image: government,
    description: "Modern digital infrastructure for public services",
    features: ["Digital Records", "Citizen Services", "Secure Data Management"]
  },
  {
    title: "Mining",
    image: mining,
    description: "Boost efficiency and safety in mining operations",
    features: ["Asset Tracking", "Worker Safety", "Environmental Compliance"]
  },
  {
    title: "Logistics And Transportation",
    image: logistic,
    description: "Streamlined transport systems and delivery tracking",
    features: ["Route Optimization", "Fleet Management", "Real-time Tracking"]
  },
  {
    title: "Banking And Finance",
    image: banking,
    description: "Robust tools for secure and compliant financial operations",
    features: ["Fraud Detection", "Regulatory Reporting", "Risk Assessment"]
  },
  {
    title: "Startups",
    image: startups,
    description: "Agile platforms for fast-growing and scalable ventures",
    features: ["Rapid Deployment", "Scalable Systems", "Agile Workflows"]
  },
  {
    title: "Healthcare",
    image: health,
    description: "Compliance-focused solutions for healthcare",
    features: ["HIPAA Compliance", "Shift Scheduling", "Credential Tracking"]
  }
];

const IndustryCard = ({ title, image, description, features }) => (
  <div className="group border border-[#7DBBFF] hover:border-[#007BFF] hover:border-[1.5px] hover:shadow-2xl rounded-xl shadow p-4 lg:p-6 bg-white transition-transform duration-300 transform hover:scale-105 origin-left">
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

    <div className="flex items-center gap-3 lg:block">
      <div className="w-11 h-11 rounded-md overflow-hidden group-hover:w-12 group-hover:h-12">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-[14px] font-semibold poppins-font transition-all duration-300 group-hover:text-blue-600 mt-0 lg:mt-4">
        {title}
      </h3>
    </div>

    <p className="text-xs text-[#4F4F4F] mt-2 poppins-font mb-4">{description}</p>

    <ul className="text-sm text-[#5F5F5F] space-y-3">
      {features.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 poppins-font text-xs">
          <CheckCircle className="w-3.5 h-3.5 text-green-700" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const IndustriesGrid = () => {
  return (
    <section className="bg-[#f5f7ff] py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <p className="text-xs choose text-[#007BFF] font-medium uppercase mb-2">
          BUILT FOR EVERY SECTOR
        </p>
        <h2 className="text-xl poppins-font md:text-2xl font-medium mb-12">
          Industries We Serve
        </h2>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 max-w-5xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </section>
  );
};

export default IndustriesGrid;
