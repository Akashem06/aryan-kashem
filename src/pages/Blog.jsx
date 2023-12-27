import React, { useState } from "react";
import Header from '../components/Header';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Link } from "react-router-dom";

// Import statements...

const Blog = () => {
  const [selectedSet, setSelectedSet] = useState("technical");

  // Placeholder data for technical posts
  const technicalPosts = [
    {
      title: "Real Time Operating Systems (RTOS)",
      date: "Expected Janurary 24, 2024",
      to: "/Blog/RTOS",
      summary:
        "RTOS ensures precise timing and predictability in systems, crucial for real-time processing of critical tasks. COMING SOON",
      estimatedTime: "12 min",
    },
    {
      title: "CAN-bus",
      date: "Expected Janurary 6, 2024",
      to: "/Blog/CAN-bus",
      summary:
        "CAN-bus is a robust serial communication protocol widely used in vehicles for real-time communication between electronic control units. COMING SOON",
      estimatedTime: "7 min",
    },
    {
      title: "AHRS Sensor Fusion",
      date: "Janurary 1, 2024",
      to: "/Blog/Sensor-Fusion",
      image: "IMUCalib.png",
      summary:
        "Sensor Fusion combines data from multiple sensors, enhancing accuracy and providing a comprehensive understanding of the environment. For example, autonomous vehicles must know their own velocity, position, and gyroscopic orientation to preform functions. This is a situation where you would implement an Inertial Measurement Unit (IMU) to record position.",
      estimatedTime: "9 min",
    },
    {
      title: "Synchronous vs Asynchronous Communication",
      date: "December 24, 2023",
      to: "/Blog/SyncAsync",
      image: "SyncAsync.png",
      summary:
        "Synchronous: Real-time communication with a clock line; Asynchronous: Time-flexible communication using standard baud rates. Synchronous communication uses a seperate clock line to time data transmission. Asynchronous communication uses a standard transmission rate that all components must agree on.",
      estimatedTime: "3 min",
    },
    {
      title: "UART",
      date: "December 23, 2023",
      to: "/Blog/UART",
      image: "UART.png",
      summary:
        "UART is an asynchronous serial communication protocol commonly used for short-distance communication between devices. Device 1 transmits (TX) messages to the recieving (RX) pins of device 2. Device 1 will recieve (RX) messages from the transmitting (TX) pins of device 2. Messages are transmitted through a serial port.",
      estimatedTime: "3 min",
    },
    {
      title: "SPI",
      date: "December 20, 2023",
      to: "/Blog/SPI",
      image: "SPI.png",
      summary:
        "SPI is a serial communication protocol facilitating data exchange between microcontrollers and devices like sensors and displays. Covering MOSI, MISO, CS, and SCLK. Will also cover coding implementation with an example!",
      estimatedTime: "4 min",
    },
    {
      title: "I2C",
      date: "December 17, 2023",
      to: "/Blog/I2C",
      image: "I2C.png",
      summary:
        "I2C is a common communication protocol for connecting sensors and devices in embedded systems, using a two-wire interface. In my experience, I have used it to develop sensor drivers. Covering SDA and SCL and how to configure each. Will also focus on code implementation!",
      estimatedTime: "5 min",
    },
  ];

  const schoolPosts = [
    {
      title: "ECE 1A",
      date: "December 27, 2023",
      to: "/Blog/ECE1A",
      image: "1A.jpg",
      summary:
        "My ECE 1A experience as a student from Alberta! Strategies and advice I would give myself before I started. Compiled of my academic experience, study tips, class reviews, residence experience, and the moving process. Hopefully this helps incoming Waterloo students!",
      estimatedTime: "5 min",
    },
    {
      title: "High School",
      date: "December 23, 2023",
      to: "/Blog/Highschool",
      image: "CHHS.png",
      summary:
        "My experience and advice for high school students who want to pursue engineering. Compiled of my academic experience, study tips, my motivating factors, activities to do during high school, next steps from high school, and the university application process. Hopefully this helps all high school students!",
      estimatedTime: "6 min",
    },
  ];

  const posts = selectedSet === "technical" ? technicalPosts : schoolPosts;

  return (
    <div className="flex flex-col items-center mb-[5rem]">
      <Header />

      <div className="z-50 flex mt-[1rem] space-x-4">
        <button
          className={`z-50 text-white font-Rubik px-4 py-2 rounded focus:outline-none ${
            selectedSet === "technical" ? "bg-blue-600" : "bg-gray-600"
          }`}
          onClick={() => setSelectedSet("technical")}
        >
          Technical Posts
        </button>

        <button
          className={`z-50 text-white font-Rubik px-4 py-2 rounded focus:outline-none ${
            selectedSet === "school" ? "bg-blue-600" : "bg-gray-600"
          }`}
          onClick={() => setSelectedSet("school")}
        >
          School Posts
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 w-full md:w-[80%]">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ title, date, to, image, summary, estimatedTime }) => {
  return (
    <Link
      to={to}
      className="z-50 grid grid-cols-3 h-[auto] md:h-[15rem] w-full rounded-2xl bg-slate-800 gap-[2rem] p-4 hover:bg-blue-600 transition duration-500"
    >
      <div className="flex flex-col items-center col-span-3 sm:col-span-1">
        {image && (
          <div className="flex items-center justify-center">
            <img
              className="h-full w-auto max-w-full rounded-3xl"
              src={image}
              alt={title}
            />
          </div>
        )}
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-center">
        <p className="text-white font-Rubik font-bold">{title}</p>
        {summary && (
          <p className="my-[1rem] text-gray-200 font-Rubik">{summary}</p>
        )}
        <p className="text-white text-[1rem] font-Rubik">
          {date} &#8226; {estimatedTime}
        </p>
      </div>
    </Link>
  );
};


export { Blog, BlogCard };
