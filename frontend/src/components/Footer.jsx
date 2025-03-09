import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="bg-green-100 py-20 px-5">
            <div className="max-w-[1400px] mx-auto pb-12 border-b border-border-color grid gap-16 md:grid-cols-3">
                <div className="text-center">
                    <div className="inline-flex items-center">
                        <FontAwesomeIcon icon={faLeaf} className="text-primary-color text-3xl mr-4 hover:rotate-20 transition-transform" />
                        <h3 className="text-2xl font-bold text-primary-light">WasteLink</h3>
                    </div>
                    <p className="text-primary-light text-lg font-medium mt-4">Building a cleaner world, one report at a time.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-primary-light text-xl font-bold mb-6">Quick Links</h3>
                    <ul className="flex flex-col items-center gap-4">
                        <li><a href="#home" className="text-primary-light text-lg font-medium hover:text-primary-color hover:translate-x-2 transition-transform">Home</a></li>
                        <li><a href="#about" className="text-primary-light text-lg font-medium hover:text-primary-color hover:translate-x-2 transition-transform">About Us</a></li>
                        <li><a href="#report" className="text-primary-light text-lg font-medium hover:text-primary-color hover:translate-x-2 transition-transform">Report Waste</a></li>
                        <li><a href="#impact" className="text-primary-light text-lg font-medium hover:text-primary-color hover:translate-x-2 transition-transform">Our Impact</a></li>
                        <li><a href="#contact" className="text-primary-light text-lg font-medium hover:text-primary-color hover:translate-x-2 transition-transform">Contact</a></li>
                    </ul>
                </div>
                <div className="text-center">
                    <h3 className="text-primary-light text-xl font-bold mb-6">Stay Updated</h3>
                    <p className="text-primary-light text-lg font-medium mb-8">Subscribe to our newsletter for the latest updates.</p>
                    <form id="newsletterForm" className="flex flex-wrap justify-center gap-4">
                        <input type="email" placeholder="Your Email Address" required className="py-4 px-6 border-2 border-border-color rounded-lg bg-dark-bg text-primary-light focus:outline-none focus:border-primary-color focus:shadow-[0_0_10px_rgba(0,204,0,0.3)] transition-all" />
                        <button type="submit" className="btn-primary bg-primary-dark text-primary-light py-4 px-8 hover:bg-primary-darker transition-colors">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto mt-8 flex justify-between items-center flex-col gap-6 md:flex-row">
                <p className="text-primary-light text-base font-medium">© 2025 EcoAction. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-primary-light text-base font-medium hover:text-primary-color hover:translate-y-[-3px] transition-transform">Privacy Policy</a>
                    <a href="#" className="text-primary-light text-base font-medium hover:text-primary-color hover:translate-y-[-3px] transition-transform">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
