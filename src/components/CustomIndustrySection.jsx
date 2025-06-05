export default function CustomIndustrySection() {
    return (
        <div className="flex items-center justify-center bg-[#f5f7ff] py-8">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

     
        .poppins-font {
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.02em;
        }
       
      `}</style>
            <section className="bg-gradient-to-b mx-4 lg:mx-0 max-w-5xl rounded-lg from-[#0E79ED] to-[#05357F] text-white py-16 px-6 lg:px-20">
                <div className="mx-auto text-center">
                    <div className="mb-4 flex justify-center ">
                        <button className="bg-white/20 poppins-font text-[12px] font-normal hover:bg-white/30 text-white  py-2 px-4 rounded-full shadow flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 14.59L7.3 13.3a1 1 0 011.41-1.41l1.89 1.88 4.59-4.59a1 1 0 011.41 1.41l-5.3 5.3a1 1 0 01-1.41 0z" />
                            </svg>
                            Don't See Your Industry?
                        </button>
                    </div>

                    <h2 className="text-3xl poppins-font  md:text-4xl font-semibold mb-4">
                        We Adapt to Your Unique Needs
                    </h2>
                    <p className="text-base md:text-[14px] poppins-font  text-[#CECECE] mb-8">
                        Our flexible platform can be customized for any industry. Get a personalized demo that shows
                        exactly how OceanHR fits your specific business requirements.
                    </p>
                    <button className="bg-white poppins-font text-[14px] text-[#007BFF] font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 mx-auto">
                        Custom Industry Demo
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>

    );
}
