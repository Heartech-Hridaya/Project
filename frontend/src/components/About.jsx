import React, { useState, useEffect, useRef } from "react";
import communityImpact from "../img/Community impact.jpg";

function About() {
    const [wasteCollected, setWasteCollected] = useState(0);
    const [reportsResolved, setReportsResolved] = useState(0);
    const [jobsCreated, setJobsCreated] = useState(0);
    const statsRef = useRef(null);

    const animateCounter = (setter, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(timer);
            } else {
                setter(Math.floor(start));
            }
        }, 16);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounter(setWasteCollected, 250);
                    animateCounter(setReportsResolved, 1250);
                    animateCounter(setJobsCreated, 85);
                    observer.unobserve(statsRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className="flex items-center gap-16 p-20 bg-white">
            <div className="flex-1 max-w-1/2">
                <h2 className="text-3xl text-left mb-6 relative">
                    Our Mission
                    <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary transform-none"></div>
                </h2>
                <p className="mb-6 text-light text-lg">
                    Wastelink connects citizens, authorities, and communities to create a sustainable
                    waste management ecosystem that benefits everyone.
                </p>
                <p className="mb-6 text-light text-lg">
                    We aim to reduce pollution, create employment opportunities, and support
                    underprivileged communities through efficient waste management and recycling.
                </p>
                <div className="flex gap-8 mt-12" ref={statsRef}>
                    <div className="flex-1 text-center">
                        <h3 className="text-5xl text-primary mb-2">{wasteCollected.toLocaleString()}</h3>
                        <p className="text-base mb-0">Tons of Waste Collected</p>
                    </div>
                    <div className="flex-1 text-center">
                        <h3 className="text-5xl text-primary mb-2">{reportsResolved.toLocaleString()}</h3>
                        <p className="text-base mb-0">Reports Resolved</p>
                    </div>
                    <div className="flex-1 text-center">
                        <h3 className="text-5xl text-primary mb-2">{jobsCreated.toLocaleString()}</h3>
                        <p className="text-base mb-0">Jobs Created</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-1/2 relative">
                <img src={communityImpact} alt="Community impact" className="w-full max-h-96 object-cover rounded-lg shadow-lg" />
                <div className="absolute top-[-20px] left-[-20px] w-full h-full border-4 border-primary rounded-lg z-[-1]"></div>
            </div>
        </section>
    );
}

export default About;
