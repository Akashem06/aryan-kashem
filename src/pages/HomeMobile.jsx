import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import ContactMobile from '../components/ContactMobile';
import ScrollArrow from '../components/Scrollarrow';

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, Sphere, MeshDistortMaterial } from '@react-three/drei'

function Model(props) {
    const { scene } = useGLTF("Rocket.glb");

    useFrame(() => {
        scene.rotation.y += 0.005;
      });
    
      return <primitive object={scene} scale={[10, 10, 10]} {...props} />;
  }

const HomeMobile = () => {

  return (
    <div className="flex flex-col items-center mb-[5rem]">
      <ScrollArrow className="z-10"/>
      <Header />
      <div className="flex flex-col items-center text-center w-full mt-[1rem] z-10">
        <p className="text-sky-500 text-[3rem] font-extrabold font-Rubik">Aryan Kashem</p>
        <p className="text-white text-[1.5rem] font-semibold font-Rubik">
          Electrical Engineering at UWaterloo
        </p>
        <p className="text-gray-200 w-[90%] mt-4 text-[1rem] font-Rubik">
          I am pursuing firmware, vehicular automation, and robotics! Let's connect and explore how our shared interests can lead to exciting opportunities and collaborations.
        </p>
        <img className="rounded-full border-2 border-sky-500 mt-[3rem]" src="Aryan2.jpg" alt="Personal photo"/>
      </div>

      <div className="absolute bottom-[-20%] h-screen w-full z-0">
            <Canvas>
              <ambientLight intensity={0.5} color="rgb(140, 110, 255)" />
              <directionalLight position={[0, 4, 2]} intensity={0.75} />
              <Sphere visible args={[1, 100, 300]} scale={2.25}>
                <MeshDistortMaterial
                  color="rgb(0, 255, 255)"
                  attach="material"
                  distort={0.7}
                  roughness={0.4}
                />
              </Sphere>
            </Canvas>
      </div>

      <div className="mt-[-10rem] h-screen w-full z-[5] select-none relative">
            <Canvas dpr={[1, 2]} camera={{ fov: 10, position: [0, 0, 10], near: 0.1, far: 50, orthographic: true }}>
              <Stage intensity={1} environment="park">
                <Model scale={0.5} />
              </Stage>
            </Canvas>
      </div>
    
      <div className="mt-[-15rem]">
        <ContactMobile />
      </div>
      
      <div className="mt-[3rem] flex gap-[3rem]">
            <a href="https://www.linkedin.com/in/aryan-kashem/">
              <LinkedInIcon sx={{ fontSize: 40, color: 'rgb(250,250,250)' }} />
            </a>
  
            <a href="https://github.com/Akashem06">
              <GitHubIcon sx={{ fontSize: 40, color: 'rgb(250,250,250)' }} />
            </a>
        </div>

    </div>
  );
};

export default HomeMobile;
