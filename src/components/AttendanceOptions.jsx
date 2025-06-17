import React, { useEffect, useRef, useState } from 'react';
import camera from '../assets/camera.png';
import finger from '../assets/finger.png';
import palm from '../assets/palm.png';
import scan from '../assets/scan.png';
import person from '../assets/person.png';

const attendanceOptions = [
  {
    title: 'Facial Recognition',
    description: 'Touchless And Fast',
    image: camera,
  },
  {
    title: 'Fingerprint Scan',
    description: 'Trusted And Accurate',
    image: finger,
  },
  {
    title: 'Palm Vein Recognition',
    description: 'Contactless Convenience',
    image: palm,
  },
  {
    title: 'QR Code',
    description: 'Instant, Geo-Fenced Check-Ins',
    image: scan,
  },
  {
    title: 'Geo Check-In',
    description: 'Ideal For Field Employees',
    image: person,
  },
];

export default function AttendanceOptions() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        setCurrentIndex((prev) => (prev + 1) % attendanceOptions.length);
      }
    }, 3000); // auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll to item
  useEffect(() => {
    if (carouselRef.current && window.innerWidth < 1024) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.children[currentIndex].offsetLeft,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <>
    
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

      <section className="lg:px-24 px-4 py-14 pb-8 bg-[#F3F5FF] text-center">
        <p className="text-xs choose text-[#007BFF] font-medium uppercase mb-2">
          Choose From a Multitude of Options
        </p>
        <h2 className="text-xl poppins-font md:text-2xl font-medium mb-12">
          Mark Attendance Seamlessly
        </h2>

        {/* Carousel for mobile, grid for lg */}
        <div
          ref={carouselRef}
          className="flex lg:grid lg:grid-cols-5  gap-4 md:gap-5 lg:gap-3 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {attendanceOptions.map((option, index) => (
            <div
              key={index}
              className="group min-w-[13.5rem]  md:min-w-[30%] snap-start lg:min-w-0 relative  overflow-hidden  transition-all duration-300 lg:hover:scale-100"
            >
              <div className="w-full h-full  transform transition-transform duration-500 lg:group-hover:scale-95">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-[230px] h-[300px] lg:w-full lg:h-full rounded-md  object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end items-start p-3 text-white  via-transparent to-transparent">
                  <h3 className="text-[15px] text-[#FFFFFF] poppins-font tracking-widest">
                    {option.title}
                  </h3>
                  <p className="text-[10px] text-[#EFEFEF] poppins-font tracking-wider">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Dot indicators on mobile only */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {attendanceOptions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-[#007BFF]' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>

        <div className="pt-20">
          <p className="text-xs bg-[#F3F5FF] choose text-[#007BFF] font-medium uppercase mb-2">
            Explore IDONE Dashboard
          </p>
          <h2 className="text-xl bg-[#F3F5FF] poppins-font md:text-2xl font-medium">
            Powerful Features for Smarter HR Operations
          </h2>
        </div>
      </section>
    </>
  );
}
