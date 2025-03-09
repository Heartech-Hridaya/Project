import { use, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Garbage1 } from "../Garbage1";

gsap.registerPlugin(ScrollTrigger);

const Scene1 = ({progress}) => {
  const cameraRef = useRef(null);
 useFrame(() => {
  cameraRef.current.lookAt(0, 1.5, 0)
 })

 useEffect(() => {
  const updateCamPos = () => {
    const positions = [
      [0, 2, 10],  // Initial position
      [-4, 3, 10], // Middle transition
      [4, 3, 10],  // Further transition
      [0, 1.5, 8]  // Final position (closer view)
    ];
    
    const segmentProgress = 1 / (positions.length - 1);
    const segmentIndex = Math.floor(progress / segmentProgress);

    if (segmentIndex >= positions.length - 1) return;

    const percentage = (progress % segmentProgress) / segmentProgress;
    const [startX, startY, startZ] = positions[segmentIndex];
    const [endX, endY, endZ] = positions[segmentIndex + 1];

    const x = startX + (endX - startX) * percentage;
    const y = startY + (endY - startY) * percentage;
    const z = startZ + (endZ - startZ) * percentage;

    gsap.to(cameraRef.current.position, {
      x,
      y,
      z,
      duration: 0.5,
      ease: "power1.out",
      onUpdate: () => {
        if (cameraRef.current) {
          cameraRef.current.lookAt(0, 1.5, 0); // Ensure camera always looks at the object
        }
      }
    });
  };

  updateCamPos();
}, [progress]);

useFrame(() => {
  if (cameraRef.current) {
    cameraRef.current.lookAt(0, 2, 0); // Adjust height (Y) to keep bin in view
  }
});


  return (
    <>
    <PerspectiveCamera
  ref={cameraRef}
  fov={70} // Increase FOV to capture more space
  near={0.1}
  far={1000}
  makeDefault
  position={[0, 1.5, 10]}
/>


      <Environment preset="city" />
      <Garbage1 />
      
      
    </>
  );
};

export default Scene1;
