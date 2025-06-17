import React from 'react';
import core from '../assets/core.png';
import delhi from '../assets/delhi.png';
import quess from '../assets/quess.png';
import niam from '../assets/niam.png';

const logos = [core, niam, quess, delhi, core, niam, quess, core, niam, quess, delhi, core, niam, quess,
  core, niam, quess, delhi, core, niam, quess, core, niam, quess, delhi, core, niam, quess
];

export default function PartnerLogos() {
  return (
    <div className="bg-[#F3F5FF] py-14 relative">
      {/* Animation style injected directly */}
      <style>
        {`
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
          letter-spacing: 0.02em;
        }
        .poppins-font {
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.02em;
        }
        `}
      </style>

      <div className="text-center mb-8 mt-0 md:mt-68">
        <p className="text-xs choose text-[#007BFF] font-medium uppercase mb-2">TRUSTED PARTNERS</p>
        <h2 className="text-xl poppins-font md:text-2xl font-medium  mb-12">
          Powering Success For Industry Leaders
        </h2>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="marquee gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-8 w-auto mx-2 object-contain"
            />
          ))}
          {/* Duplicate for seamless scroll */}
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt={`logo-dup-${index}`}
              className="h-8 w-auto mx-4 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
