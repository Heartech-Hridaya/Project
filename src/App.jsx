import Hero from "./components/Hero";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import ReportWaste from "./components/ReportWaste";
import About from "./components/About";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    
      <main  className="overflow-x-hidden bg-black">
        <Suspense  
          fallback={
           <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
           </div>
          }
        >
         <section>
          <Login />
          {/* <Header />
          <Hero />
          <HowItWorks />
          <ReportWaste />
          <About />
          <Impact />
          <Testimonials />
          <Contact />
          <Footer /> */}
        </section>

     </Suspense>
     </main> 
     
       
  );

}
export default App;
