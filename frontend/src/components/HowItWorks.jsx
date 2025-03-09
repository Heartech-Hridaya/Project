import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTruck, faRecycle, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-gray-900 py-32 px-6">
            <h2 className="text-center text-white text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                <div className="text-center p-12 rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-2xl">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-700 transition-transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faCamera} className="text-red-500 text-5xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Report</h3>
                    <p className="text-white text-lg">Take a photo of waste and submit a report with location details.</p>
                </div>
                <div className="text-center p-12 rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-2xl">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-700 transition-transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faTruck} className="text-red-500 text-5xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Collect</h3>
                    <p className="text-white text-lg">Local authorities are notified to collect the reported waste.</p>
                </div>
                <div className="text-center p-12 rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-2xl">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-700 transition-transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faRecycle} className="text-red-500 text-5xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Recycle</h3>
                    <p className="text-white text-lg">Waste is sorted and processed for reuse and recycling.</p>
                </div>
                <div className="text-center p-12 rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-2xl">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-700 transition-transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faHandsHelping} className="text-red-500 text-5xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Support</h3>
                    <p className="text-white text-lg">Recycled materials help communities and create jobs.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
