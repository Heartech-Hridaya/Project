import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <section id="contact" className="py-32 px-5 bg-greyn-100">
            <h2 className="text-4xl font-semibold text-center text-white mb-16">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-screen-xl mx-auto">
                <div className="bg-green-100 p-12 rounded-xl shadow-lg">
                    <div className="flex items-center gap-6 mb-8">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 text-3xl" />
                        <p className="text-xl font-medium text-primary-light">123 Green Street, Eco City</p>
                    </div>
                    <div className="flex items-center gap-6 mb-8">
                        <FontAwesomeIcon icon={faPhone} className="text-green-600 text-3xl" />
                        <p className="text-xl font-medium text-primary-light">+91 1234567890</p>
                    </div>
                    <div className="flex items-center gap-6 mb-8">
                        <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-3xl" />
                        <p className="text-xl font-medium text-primary-light">info@ecoaction.org</p>
                    </div>
                    <div className="flex gap-6 mt-12">
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-primary-light hover:bg-primary-darker transform transition-all duration-300 hover:translate-y-1 shadow-lg">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-primary-light hover:bg-primary-darker transform transition-all duration-300 hover:translate-y-1 shadow-lg">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-primary-light hover:bg-primary-darker transform transition-all duration-300 hover:translate-y-1 shadow-lg">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-primary-light hover:bg-primary-darker transform transition-all duration-300 hover:translate-y-1 shadow-lg">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
                <div className="bg-green-700 p-12 rounded-xl shadow-lg">
                    <form id="contactForm">
                        <div className="mb-6">
                            <input type="text" id="name" placeholder="Your Name" required className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400" />
                        </div>
                        <div className="mb-6">
                            <input type="email" id="email" placeholder="Your Email" required className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400" />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="subject" placeholder="Subject" required className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400" />
                        </div>
                        <div className="mb-6">
                            <textarea id="message" placeholder="Your Message" rows="5" required className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-darker transform transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
