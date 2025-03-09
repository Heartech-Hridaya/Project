import "../App.css";

import React from "react";
import HowItWorks from "./HowItWorks";
import ReportWaste from "./ReportWaste";
import About from "./About";
import Impact from "./Impact";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function StaticPage() {
  return (
    <>
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center">
      
      <iframe
        src="/myStaticPage/index.html"
        className="w-full h-full border-none overflow-hidden"
        title="Static Page"
      />
    </div>
             <Header />
             
              <HowItWorks />
              <ReportWaste />
              <About />
              <Impact />
              <Testimonials />
              <Contact />
              <Footer /> 
  </>
  );
}
