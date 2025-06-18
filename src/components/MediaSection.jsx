import React from 'react';
import yourstory from '../idone_assets/yourstory.png';
import indianexpress from '../idone_assets/indianexpress.png';
import forbes from '../idone_assets/forbes.png';
import toi from '../idone_assets/toi.png';
import tc from '../idone_assets/tc.png';
import outlook from '../idone_assets/outlook.png';
import dna from '../idone_assets/dna.png';

const MediaSection = () => {
    return (
        <section className="bg-[#F3F5FF] pt-12 pb-30 text-center">
              <style>
        {`
         
        .poppins-font {
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.02em;
        }
        `}
      </style>
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-xs choose text-[#007BFF] font-medium uppercase mb-2">In The News</p>
                <h2 className="text-xl poppins-font md:text-2xl font-medium  mb-12">
                    Featured In Industry-Leading Media Voices In Tech And HR.
                </h2>
                <div className="flex flex-col mx-2 lg:mx-0 items-center gap-y-10 mt-16 ">
                    {/* Row 1 - 4 logos */}
                    <div className="grid grid-cols-4 gap-1 lg:gap-10">
                        <img src={yourstory} alt="YourStory" className="h-5 object-contain mx-auto" />
                        <img src={indianexpress} alt="Indian Express" className="h-6 object-contain mx-auto" />
                        <img src={outlook} alt="Outlook" className="h-5 object-contain mx-auto" />
                        <img src={forbes} alt="Forbes" className="h-5 object-contain mx-auto" />


                    </div>

                    {/* Row 2 - 3 logos centered under 4 */}
                    <div className="grid grid-cols-3 gap-8 lg:gap-16">
                        <img src={tc} alt="TechCrunch" className="h-5 object-contain mx-auto" />
                        <img src={dna} alt="DNA" className="h-5 object-contain mx-auto" />
                        <img src={toi} alt="TOI" className="h-5 object-contain mx-auto" />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default MediaSection;
