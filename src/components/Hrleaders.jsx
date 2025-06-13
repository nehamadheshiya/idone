import React from 'react';
import '../css/Hrleaders.css';

export default function Hrleaders() {
    const testimonials = [
        "We Were Finding It Difficult To Manually Track Attendance Across Our Field Offices In Different Cities. With IDONE, Now We Have A Centralised Monitoring Of Attendance And Leave Records.",
        "IDONE Transformed Our HR Operations. Attendance And Payroll Sync In Real-Time—Zero Manual Follow-Ups, And Morale’s Never Been Higher.",
        "IDone Helped Us Reduce Our Attrition Rates By Disbursing Salaries Timely.",
    ];


    return (
        <div className='hrleaders-wrapper flex flex-row text-white px-22 py-16'>
            {/* Left Section */}
            <div className="left-content px-4 flex flex-col items-center text-center lg:block lg:text-left lg:items-start lg:px-14">

                <p className="tagline mb-4 font-[poppins] text-sm">
                    From those who’ve experienced the IDONE difference
                </p>
                <h2 className='heading mb-4 font-[poppins] font-light text-lg'>
                    What HR Leaders <br /> Are Saying
                </h2>
                <p className='description mb-6 text-xs'>
                    Service Content Momentary Telegraph King Bread Chalk Thief Distance Inform Boundary Because Eat Artificial Good Department Umbrella Ability Miserable
                </p>
                <button className='cta-button'>
                    Join us
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M16.675 11L11.075 5.4L12.5 4L20.5 12L12.5 20L11.075 18.6L16.675 13H4.5V11H16.675Z" fill="#007BFF" />
                    </svg>
                </button>
            </div>

            {/* Right Section */}
            <div className="marquee-grid">
                {/* Left - Scroll Up */}
                <div className="marquee-vertical">
                    <div className="marquee-content-vertical">
                        {Array(6).fill(testimonials).flat().map((text, i) => (
                            <div key={`up-${i}`} className="testimonial-card">
                                <div className="quote-icon">❝</div>
                                <p className="testimonial-text font-[poppins] font-normal text-xs">{text}</p>
                                <div className="testimonial-brand">NIAM™</div>
                                <p className="testimonial-tagline">redefining learning</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Scroll Down */}
                <div className="marquee-downward">
                    <div className="marquee-content-downward">
                        {Array(6).fill(testimonials).flat().map((text, i) => (
                            <div key={`down-${i}`} className="testimonial-card">
                                <div className="quote-icon">❝</div>
                                <p className="testimonial-text font-[poppins] font-normal text-xs">{text}</p>
                                <div className="testimonial-brand">NIAM™</div>
                                <p className="testimonial-tagline">redefining learning</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {/* Mobile Marquee (Right Scroll) */}
            <div className="marquee-grid-mob ">
                <div className="marquee-track">
                    {Array(4).fill(testimonials).flat().map((text, i) => (
                        <div key={`mob-${i}`} className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <p className="testimonial-text font-[poppins] font-normal text-xs">{text}</p>
                            <div className="testimonial-brand">NIAM™</div>
                            <p className="testimonial-tagline">redefining learning</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
