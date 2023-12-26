import Header from '../components/Header'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <div className="flex flex-col items-center mb-[5rem]">
      <Header />

      <div className="mt-8 flex flex-col items-center gap-4 w-full md:w-[65%]">

      <BlogCard 
        title="Real Time Operating Systems (RTOS)" 
        date="Janurary 24, 2024"
        to="/Blog/RTOS"
        summary="RTOS ensures precise timing and predictability in systems, crucial for real-time processing of critical tasks"
        estimatedTime="12 min"
       />
      <BlogCard 
        title="CAN-bus" 
        date="Janurary 6, 2024"
        to="/Blog/CAN-bus"
        summary="CAN-bus is a robust serial communication protocol widely used in vehicles for real-time communication between electronic control units"
        estimatedTime="7 min"
       />
      <BlogCard 
        title="AHRS Sensor Fusion" 
        date="Janurary 1, 2024"
        to="/Blog/Sensor-Fusion"
        image="IMUCalib.png"
        summary="Sensor Fusion combines data from multiple sensors, enhancing accuracy and providing a comprehensive understanding of the environment"
        estimatedTime="9 min"
       />
      <BlogCard 
        title="Synchronous vs Asynchronous Communication" 
        date="December 24, 2023"
        to="/Blog/SyncAsync"
        image="SyncAsync.png"
        summary="Synchronous: Real-time communication with a clock line; Asynchronous: Time-flexible communication using standard baud rates"
        estimatedTime="3 min"
       />
      <BlogCard 
        title="UART"
        date="December 23, 2023"
        to="/Blog/UART" 
        image="UART.png"
        summary="UART is an asynchronous serial communication protocol commonly used for short-distance communication between devices"
        estimatedTime="3 min"
      />
      <BlogCard 
        title="SPI" 
        date="December 20, 2023"
        to="/Blog/SPI" 
        image="SPI.png"
        summary="SPI is a serial communication protocol facilitating data exchange between microcontrollers and devices like sensors and displays"
        estimatedTime="4 min"
      />
      <BlogCard
        title="I2C"
        date="December 17, 2023"
        to="/Blog/I2C"
        image="I2C.png"
        summary="I2C is a common communication protocol for connecting sensors and devices in embedded systems, using a two-wire interface"
        estimatedTime="5 min"
      />

      </div>

      <div className="absolute bottom-[-200%] md:bottom-[-65%] md:right-[-50%] h-screen w-full">
        <Canvas>
          <ambientLight intensity={1} color="rgb(140, 110, 255)" />
          <directionalLight position={[-4, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 300]} scale={2}>
            <MeshDistortMaterial
              color="rgb(0, 255, 255)"
              attach="material"
              distort={0.7}
              roughness={0.4}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="absolute md:bottom-[-15%] md:left-[-50%] h-screen w-full z-0">
        <Canvas>
          <ambientLight intensity={1} color="rgb(140, 110, 255)" />
          <directionalLight position={[3, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 300]} scale={2}>
            <MeshDistortMaterial
              color="rgb(0, 255, 255)"
              attach="material"
              distort={0.65}
              roughness={0.4}
            />
          </Sphere>
        </Canvas>
      </div>

    </div>
  );
};

const BlogCard = ({ title, date, to, image, summary, estimatedTime }) => {
  return (
    <Link
      to={to}
      className="z-50 grid grid-cols-3 h-[auto] md:h-[10rem] w-full rounded-2xl bg-slate-800 gap-[2rem] p-4 hover:bg-blue-600 transition duration-500"
    >
      <div className="flex items-center col-span-3 sm:col-span-1">
        {image && <img className="h-full w-full rounded-3xl" src={image} alt={title} />}
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-center">
        <p className="text-white font-Rubik font-bold">{title}</p>
        {summary && <p className="my-[1rem] text-gray-200 font-Rubik">{summary}</p>}
        <p className="text-white text-[1rem] font-Rubik">
          {date} &#8226; {estimatedTime}
        </p>
      </div>
    </Link>
  );
};

export { Blog, BlogCard };
