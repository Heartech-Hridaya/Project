import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../img/avatar.jpg"; // Corrected import path

function Testimonials() {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            quote: "EcoAction transformed our community by turning waste into opportunities!",
            author: "Jane Doe",
            role: "Community Leader",
        },
        {
            quote: "The waste reporting system is so easy to use and effective.",
            author: "John Smith",
            role: "Local Resident",
        },
        {
            quote: "A cleaner environment and jobs for our people—what more could we ask for?",
            author: "Aisha Khan",
            role: "Volunteer",
        },
    ];

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[current];

    return (
        <section id="testimonials" className="py-32 px-5 bg-gray-800">
            <h2 className="text-3xl font-semibold text-center text-white mb-10">What People Say</h2>
            <div className="relative max-w-4xl mx-auto overflow-hidden">
                <div className="testimonial block py-12 bg-dark-gray rounded-xl shadow-xl animate-fadeIn">
                    <p className="text-2xl italic font-medium text-light-primary mb-8 relative">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-6">
                        <img src={avatar} alt="User avatar" className="w-20 h-20 rounded-full object-cover shadow-lg" />
                        <div className="author-info text-white">
                            <h4 className="text-xl font-semibold mb-2">{testimonial.author}</h4>
                            <p className="text-base font-medium">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center mt-12">
                    <button className="prev-btn text-light-primary hover:text-primary hover:scale-110 text-2xl transition duration-300 ease-in-out" onClick={prevTestimonial}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="flex gap-3 mx-6">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full bg-border-color cursor-pointer transition duration-300 ease-in-out transform ${index === current ? 'bg-primary scale-125' : ''}`}
                                onClick={() => setCurrent(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next-btn text-light-primary hover:text-primary hover:scale-110 text-2xl transition duration-300 ease-in-out" onClick={nextTestimonial}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
