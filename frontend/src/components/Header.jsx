import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 

function Header({ openLoginModal, isLoggedIn, userName, handleLogout }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const navigate=useNavigate();
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
            setIsNavOpen(false);
            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            const sections = document.querySelectorAll("section[id]");
            let current = "#home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (
                    window.pageYOffset >= sectionTop &&
                    window.pageYOffset < sectionTop + sectionHeight
                ) {
                    current = `#${section.getAttribute("id")}`;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openSignUpModal = () => openLoginModal(true);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"}`}>
            <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto">
                <div className="flex items-center text-green-500 text-3xl font-bold">
                    <FontAwesomeIcon icon={faLeaf} className="mr-2 hover:rotate-12 transition-transform duration-300" />
                    <h1>WasteLink</h1>
                </div>
                <ul className={`hidden md:flex gap-8 text-lg font-medium text-white`}> 
                    {['#home', '#about', '#report', '#impact', '#contact'].map((link) => (
                        <li key={link}>
                            <a 
                                href={link} 
                                onClick={(e) => handleNavClick(e, link)} 
                                className={`relative transition-colors duration-300 ${activeSection === link ? "text-green-400" : "hover:text-green-400"}`}
                            >
                                {link.replace("#", "").charAt(0).toUpperCase() + link.slice(2)}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex gap-4">
                
                <button onClick={() => navigate("/Hero")} type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">Log Out</button>
                </div>
                <div className="md:hidden flex flex-col gap-2 cursor-pointer" onClick={toggleNav}>
                    <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isNavOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-8 h-1 bg-white transition-opacity duration-300 ${isNavOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
                {isNavOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-2xl space-y-6 md:hidden">
                        {['#home', '#about', '#report', '#impact', '#contact'].map((link) => (
                            <a 
                                key={link} 
                                href={link} 
                                onClick={(e) => handleNavClick(e, link)} 
                                className="hover:text-green-400"
                            >
                                {link.replace("#", "").charAt(0).toUpperCase() + link.slice(2)}
                            </a>
                        ))}
                        <div className="flex flex-col gap-4">
                           
                                <button className="bg-green-900 px-6 py-3 rounded-lg text-white hover:bg-green-900" onClick={handleLogout}>
                                    Logout
                                </button>
                            
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
