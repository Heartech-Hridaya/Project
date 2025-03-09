// Impact.jsx
import React from "react";
import empoweringImage from "../img/Empowering Local Communities.jpg"; 
import turningImage from "../img/Turning Plastic into Products.jpg";
import cleanerenvironmentImage from "../img/Cleaner Neighborhoods.jpg";

function Impact() {
    return (
        <section id="impact" className="py-32 px-5 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("./assets/impact-bg.jpg")' }}>
            <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto relative z-10">
                <div className="text-center p-10 bg-black bg-opacity-90 rounded-xl shadow-xl transition-transform duration-300 hover:transform hover:translate-y-[-10px] hover:shadow-2xl">
                    <img src={empoweringImage} alt="Community story" className="rounded-lg mb-6 shadow-xl"/>
                    <h3 className="text-xl font-semibold text-white mb-3">Empowering Local Communities</h3>
                    <p className="text-lg text-white">
                        Through our waste collection program, we've created jobs for 50+ individuals
                        from underprivileged backgrounds.
                    </p>
                </div>
                <div className="text-center p-10 bg-black bg-opacity-90 rounded-xl shadow-xl transition-transform duration-300 hover:transform hover:translate-y-[-10px] hover:shadow-2xl">
                    <img src={turningImage} alt="Recycling story" className="rounded-lg mb-6 shadow-xl"/>
                    <h3 className="text-xl font-semibold text-white mb-3">Turning Plastic into Products</h3>
                    <p className="text-lg text-white">
                        Collected plastic waste is transformed into affordable household items for
                        families in need.
                    </p>
                </div>
                <div className="text-center p-10 bg-black bg-opacity-90 rounded-xl shadow-xl transition-transform duration-300 hover:transform hover:translate-y-[-10px] hover:shadow-2xl">
                    <img src={cleanerenvironmentImage} alt="Environment story" className="rounded-lg mb-6 shadow-xl"/>
                    <h3 className="text-xl font-semibold text-white mb-3">Cleaner Neighborhoods</h3>
                    <p className="text-lg text-white">
                        Over 200 communities have seen significant reduction in illegal dumping since
                        our program began.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Impact;
