import React from 'react';
import '../css/Hrleaders.css';
import core from '../assets/images/core.png'
import team from '../assets/images/team.png'
import orion from '../assets/images/orion.png'
import labour from '../assets/images/labour.png'
import quess from '../assets/images/quess.svg'
import niam from '../assets/images/niam.svg'

export default function Hrleaders() {
    const testimonials = [
        {
            text: "IDONE Transformed Our HR Operations. Attendance And Payroll Sync In Real-Time—Zero Manual Follow-Ups, And Morale’s Never Been Higher.",
            brandLogo: quess,
            // tagline: "WINNING TOGETHER",
            // brandColor: "#1D4ED8",
            // taglineColor: "#6B7280",
        },
        {
            text: "IDone Helped Us Reduce Our Attrition Rates By Disbursing Salaries Timely.",
            brandLogo: niam,
            // tagline: "redefining learning",
            // brandColor: "#10B981",
            // taglineColor: "#4B5563",
        },
        {
            text: "We Were Finding It Difficult To Manually Track Attendance Across Our Field Offices In Different Cities. With IDONE, Now We Have A Centralised Monitoring Of Attendance And Leave Records.",
            brandLogo: labour,
            // tagline: "smart business tools",
            // brandColor: "#F59E0B",
            // taglineColor: "#374151",
        },
        {
            text: "Earlier there used to be a lot of discrepancies during compliance audits. With IDONE, we have been able to organise our employee record so neatly that audits are hassle free.",
            brandLogo: orion,
            // tagline: "audit made easy",
            // brandColor: "#EF4444", // Tailwind red-500
            // taglineColor: "#6B7280",
        },
        {
            text: "IDONE has been more than an HRMS for us. It’s the go to platform for our employees to raise all requests.",
            brandLogo: core,
            // tagline: "your HR partner",
            // brandColor: "#6366F1", 
            // taglineColor: "#6B7280",
        },
        {
            text: "We have been quite happy with how IDONE has helped streamline our employees’ attendance records and payrolling.",
            brandLogo: team,
            // tagline: "caring for workforce",
            // brandColor: "#3B82F6", // Tailwind blue-500
            // taglineColor: "#6B7280",
        },
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
                        {testimonials.map((item, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="quote-icon">❝</div>

                                {/* This is valid: item.text is a string */}
                                <p className="testimonial-text font-[poppins] text-xs font-normal">{item.text}</p>

                                {/* This is valid: item.brandLogo is a JSX element like <svg> */}
                                <img
                                    src={item.brandLogo || ""}
                                    alt="Brand logo"
                                    className="w-auto"
                                // style={{ filter: `drop-shadow(0 0 1px ${item.brandColor})` }}
                                />

                                {/* This is valid: item.tagline is a string */}
                                <p className="testimonial-tagline" style={{ color: item.taglineColor }}>
                                    {item.tagline}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Right - Scroll Down */}
                <div className="marquee-downward">
                    <div className="marquee-content-downward">
                        {testimonials.map((item, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="quote-icon">❝</div>

                                {/* This is valid: item.text is a string */}
                                <p className="testimonial-text font-[poppins] text-xs font-normal">{item.text}</p>

                                {/* This is valid: item.brandLogo is a JSX element like <svg> */}
                                <img
                                    src={item.brandLogo || ""}
                                    alt="Brand logo"
                                    className="w-auto"
                                // style={{ filter: `drop-shadow(0 0 1px ${item.brandColor})` }}
                                />

                                {/* This is valid: item.tagline is a string */}
                                <p className="testimonial-tagline" style={{ color: item.taglineColor }}>
                                    {item.tagline}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

            </div>


            {/* Mobile Marquee (Right Scroll) */}
            <div className="marquee-grid-mob">
                <div className="marquee-track">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div key={`mob-${i}`} className="testimonial-card">
                            <div className="quote-icon">❝</div>

                            <p className="testimonial-text font-[poppins] font-normal text-xs">
                                {item.text}
                            </p>

                            <img
                                src={item.brandLogo || ""}
                                alt="Brand logo"
                                className="w-auto"
                            />

                            <p
                                className="testimonial-tagline"
                                style={{ color: item.taglineColor }}
                            >
                                {item.tagline}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
