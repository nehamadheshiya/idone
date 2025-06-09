import React from "react";

const BusinessImpactStats = () => {
    return (
        <div className="flex items-center justify-center  bg-[#f5f7ff] py-12">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .poppins-font {
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.02em;
        }

                .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-card:hover {
            transform: scale(1.075);

            }
            .main-number {
            transition: transform 0.3s ease;
            }
            .hover-card:hover .main-number {
            transform: scale(1.05);
            }
      `}</style>

            <div className="bg-gradient-to-b mx-4 md:mx-0 shadow-lg  max-w-5xl poppins-font rounded-lg from-[#0E79ED] to-[#05357F] text-white py-16 px-6 md:px-28 lg:px-20">
                <h2 className="text-[25px] font-semibold text-center mb-2 poppins-font">
                    Real Impact On Your Business
                </h2>
                <p className="text-center text-[12px] mb-10 text-[#F0F0F0]">
                    See the measurable improvements our clients experience within the first 90 days.
                </p>

                <div class="hidden md:block">
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {/* Item 1 */}
                    <div className="hover-card">
                        <div className="text-4xl font-semibold text-[#DBD2FF] main-number">98%</div>
                        <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Reduction in Manual Errors</div>
                        <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                    </div>

                    {/* Item 2 */}
                    <div className="hover-card">
                        <div className="text-4xl font-semibold text-[#E7FF88] main-number">4x</div>
                        <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Faster HR Approvals</div>
                        <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                    </div>

                    {/* Item 3 */}
                    <div className="hover-card">
                        <div className="text-4xl font-semibold text-[#BCEAFF] main-number">99.9%</div>
                        <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Platform Uptime</div>
                        <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                    </div>

                    {/* Item 4 */}
                    <div className="hover-card">
                        <div className="text-4xl font-semibold text-[#FFC3FA] main-number">70%</div>
                        <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Cut in HR Operational Load</div>
                        <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                    </div>
                </div>
                </div>

               

                <div className="block md:hidden">
                    {/* Item 1 */}
                    <div class="flex lg:flex-none gap-4  text-center">
                        <div className="hover-card ">
                            <div className="text-4xl font-semibold text-[#DBD2FF] main-number">98%</div>
                            <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Faster Onboarding</div>
                            <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                        </div>

                        {/* Item 2 */}
                        <div className="hover-card">
                            <div className="text-4xl font-semibold text-[#E7FF88] main-number">4x</div>
                            <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Faster HR Approvals</div>
                            <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                        </div>
                    </div>

                    <div class="flex lg:flex-none gap-4 text-center">
                        <div className="hover-card mt-6">
                            <div className="text-4xl font-semibold text-[#BCEAFF] main-number">99.9%</div>
                            <div className="text-[14px] text-[#F0F0F0] font-medium mt-2">Platform Uptime</div>
                            <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                        </div>

                        {/* Item 4 */}
                        <div className="hover-card mt-6">
                            <div className="text-4xl font-semibold text-[#FFC3FA] main-number">70%</div>
                            <div className="text-[14px] text-[#F0F0F0] font-medium mt-2"> HR Operational Load</div>
                            <p className="text-[11px] text-[#D2D2D2] mt-1">Reduce new hire paperwork time</p>
                        </div>
                    </div>
                    {/* Item 3 */}

                </div>

            </div>
        </div>
    );
};

export default BusinessImpactStats;
