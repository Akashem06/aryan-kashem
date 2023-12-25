import Header from '../components/Header'
import Contact from '../components/Contact'
import ScrollArrow from '../components/Scrollarrow';
import HomeMobile from './HomeMobile';
import React, { useState, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, Sphere, MeshDistortMaterial } from '@react-three/drei'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Model(props) {
    const { scene } = useGLTF("/Rocket.glb");

    useFrame(() => {
        scene.rotation.y += 0.005;
      });
    
      return <primitive object={scene} scale={[10, 10, 10]} {...props} />;
  }

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
    return (
      
      <div>
        {isMobile ? (
        <HomeMobile />
      ) : (
        <div>
        <div className="h-screen flex flex-col items-center">
          <ScrollArrow />
          <Header />
          <div className="flex flex-col items-center absolute left-[5%] top-[22%] text-center w-[55%]">
            <p className="text-sky-500 text-[7rem] font-extrabold font-Rubik">Aryan Kashem</p>
            <p className="text-white text-[3rem] font-semibold font-Rubik">Electrical Engineering at UWaterloo</p>
            <p className="text-gray-200 w-[75%] mt-10 text-[1.5rem] font-Rubik">
              I am pursuing firmware, vehicular automation, and robotics! Let's connect and explore how our shared interests
              can lead to exciting opportunities and collaborations.🖥️
            </p>
          </div>

          <img className="absolute h-[30rem] top-[25%] right-[5%] rounded-[25rem] border-2 border-sky-500 z-50" src="Aryan2.jpg" alt="Personal photo"/>
  
          <div className="absolute top-[-15%] right-[30%] h-[45%] w-[20rem]">
            <Canvas>
              <ambientLight intensity={0.5} color="rgb(140, 110, 255)" />
              <directionalLight position={[-4, -3, 3]} intensity={1} />
              <Sphere visible args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="rgb(0, 255, 255)"
                  attach="material"
                  distort={0.6}
                  roughness={0.4}
                />
              </Sphere>
            </Canvas>
          </div>
  
          <div className="absolute bottom-[-20%] right-[-15%] h-[110%] w-[60%]">
            <Canvas>
              <ambientLight intensity={1} color="rgb(140, 110, 255)" />
              <directionalLight position={[-3, 2, 1]} intensity={1} />
              <Sphere visible args={[1, 100, 300]} scale={2}>
                <MeshDistortMaterial
                  color="rgb(0, 255, 255)"
                  attach="material"
                  distort={0.72}
                  roughness={0.4}
                />
              </Sphere>
            </Canvas>
          </div>
  
          <div className="absolute bottom-[-25%] left-[-12.5%] h-[65%] w-[30%]">
            <Canvas>
              <ambientLight intensity={0.5} color="rgb(140, 110, 255)" />
              <directionalLight position={[4, 5, 2]} intensity={1} />
              <Sphere visible args={[1, 100, 300]} scale={2}>
                <MeshDistortMaterial
                  color="rgb(0, 255, 255)"
                  attach="material"
                  distort={0.5}
                  roughness={0.4}
                />
              </Sphere>
            </Canvas>
          </div>
  
          <div className="absolute bottom-[5%] left-[28%] flex gap-5">
            <a href="https://www.linkedin.com/in/aryan-kashem/">
              <LinkedInIcon sx={{ fontSize: 40, color: 'rgb(250,250,250)' }} />
            </a>
  
            <a href="https://github.com/Akashem06">
              <GitHubIcon sx={{ fontSize: 40, color: 'rgb(250,250,250)' }} />
            </a>
          </div>
  
        </div>
  
        <div className="h-screen flex flex-col items-center">
          <div className="mt-[5rem] flex flex-col">
            <Contact />
          </div>
  
          <div className="absolute right-[-3rem] h-[100%] w-[50%] z-10 ">
            <Canvas dpr={[1, 2]} camera={{ fov: 10, position: [0, 0, 10], near: 0.1, far: 50, orthographic: true }}>
              <Stage intensity={1} environment="park">
                <Model scale={0.5} />
              </Stage>
            </Canvas>
          </div>

          <div className="absolute right-[-3rem] h-[100%] w-[50%] z-0">
            <Canvas>
              <ambientLight intensity={0.5} color="rgb(140, 110, 255)" />
              <directionalLight position={[3, 2, 2]} intensity={0.75} />
              <Sphere visible args={[1, 100, 300]} scale={2.25}>
                <MeshDistortMaterial
                  color="rgb(0, 255, 255)"
                  attach="material"
                  distort={0.75}
                  roughness={0.4}
                />
              </Sphere>
            </Canvas>
          </div>
  
        </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Home;
  