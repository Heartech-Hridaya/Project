import "../App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene1 from "../scenes/Scene1";
import { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground"; // Import AnimatedBackground

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const navigate=useNavigate();
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "100vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "200vh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-25vw",
        y: "300vh",
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/Hero");
  };

  return (
    <main ref={mainRef} className="overflow-x-hidden relative">
      
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
          </div>
        }
      >
        {/* Render AnimatedBackground at the background */}
        <AnimatedBackground /> {/* This will run in the background */}
        
        <section className="relative grid place-items-center h-[100vh]">
          <p className="text-white text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
            Waste Link
          </p>
          <p className="text-white text-center absolute bottom-[5%] mx-4 w-fit text-6xl font-bold">
            The Future of Waste Management
          </p>

          <div ref={sceneRef} className="absolute inset-0 text-white">
            <Canvas>
              <ambientLight />
              <Scene1 progress={progress} />
            </Canvas>
          </div>
        </section>

        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0"></p>
          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            Waste Link is an innovative waste disposal platform that connects households with waste collectors, making waste management as easy as booking a ride. Users can schedule waste pickups, ensuring proper disposal and recycling.
          </p>
        </section>

        <section className="relative flex items-center justify-start h-[100vh]">
          <div className="w-[40%] bg-green-100 p-8 rounded-xl shadow-lg mr-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <select name="role" value={formData.role} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="user">User</option>
                <option value="collector">Collector</option>
              </select>
              <button onClick={() => navigate("/Hero")} type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Login
              </button>
            </form>
          </div>
        </section>

        <section className="relative flex items-center justify-end">
          <div className="w-[40%] bg-green-100 p-8 rounded-xl shadow-lg ml-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Sign Up</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="date" placeholder="Date of Birth" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <button onClick={() => navigate("/Hero")} type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">Sign Up</button>
            </form>
          </div>
        </section>
      </Suspense>
    </main>
  );
}

export default App;
