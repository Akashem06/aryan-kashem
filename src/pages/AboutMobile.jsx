import React from "react";
import Header from "../components/Header";
import AboutMeHeader from "../components/AboutHead";

const AboutMobile = () => {
    return (
      <div className="flex flex-col p-4">
        <Header/>
        <AboutMeHeader/>

        <p className="text-white text-[2rem] font-bold mt-[1rem] font-Rubik">Now</p>
        <p className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
            I'm an undergrad at the University of Waterloo studying Electrical Engineering.
            During my time here, I have expanded my skills in as many areas as possible,
            including PCB design, mechanical design, computer vision, and mechatronics,
            while specializing in firmware and control systems engineering.
            Much of my learning comes from working with design teams, and co-ops!
            I'm currently working with Waterloo Aerial Robotics Group and Midnight Sun Solar Rayce Car.
            As I progress through my degree, I get excited seeing how systems come together,
            and I'm always searching for opportunities to experience that :)
        </p>
        <p className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
            Today, I am focusing all my efforts on autonomous and electric vehicles.
            I write tons of C and C++ and I'm trying to develop my intuition for control systems
        </p>

        <a href="https://www.uwmidsun.com/" target="_blank" rel="noopener noreferrer" className="relative mt-4">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="MidnightSun.jpg"
                alt="Midnight Sun"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-50 hover:opacity-100 transition duration-1000">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                MIDNIGHT SUN
                </div>
            </div>
            </div>
        </a>

        <p className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
            During my free time, I've maintained my lifelong passion for the arts by playing piano and drawing consistently.
            I have focused on realistic sketches, and I am trying to move into hyper-realism in the coming future.
            Additionally, I am always trying to give back to my community in Calgary by offering tutoring and
            mentorship to current high school students. Recognizing that not many students have guidance during high school,
            I aim to nurture young minds into future leaders.
        </p>

        <p className="text-fuchsia-500 mt-4 text-base font-semibold text-center font-Rubik">Here are a couple of my favourite drawings!</p>

        <div className="flex flex-col justify-between mt-4">
            <img className="mb-4 h-full w-full rounded-3xl" src="/RealisticArt.jpeg" alt="Realistic painting of young woman" />
            <img className="mb-4 h-full w-full rounded-3xl" src="/RealisticArt2.jpeg" alt="Realistic painting of old man" />
        </div>

  
        <div className="mb-4 mt-4">
          <p className="text-white text-[2rem] font-bold font-Rubik">Growing Up</p>
          <div className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
            I was raised in Calgary, surrounded by the Rocky Mountains. One of my favourite activities to do in the mountains
            is Snow Tubing! And my favourite snack is BeaverTails (These are sweets, no beavers were harmed). What makes
            Calgary feel like home is the friends I have made. They've been a huge influence on who I am, and have introduced me
            to new foods, activities and locations.
          </div>
          <div className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
            Growing up, I had a knack for computers, physics, and electronics, but never had the best guidance to pursue further.
            What I did have were electronic appliances that introduced me to the world of control systems. My first experience with electronic systems was when I built my first PC in 8th grade.
            Although I didn't know what most parts did, I learned lots about memory, CPU cycles, wiring, and batteries!
          </div>
        </div>
  
        <div className="flex flex-col justify-between mt-[1rem] font-Rubik">
          <img className="h-full w-full rounded-3xl" src="Banff.jpg" alt="Banff mountains" />
          <img className="h-full w-full rounded-3xl mt-[1rem]" src="Banff2.jpg" alt="Banff Downtown" />
        </div>
  
  
        <div className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
          In all honesty, I favoured academics and research over practical skills, and a year before university applications, I was dead set on becoming a physicist.
          What changed my mind was working at my high school's FIRST robotics team. This was the birth of my passion for engineering. I found the creativity
          in designing products, and the intuition behind systems was what I loved most. Most importantly, I loved the supportive engineering community.
          My team is a huge reason I continue to pursue electrical engineering and firmware development!
        </div>
  
        <div className="text-gray-200 text-[1rem] mt-[1rem] font-Rubik">
          Additionally, my time at our high school mechanic shop is the main reason I'm interested in the automotive industry.
          My mentor always encouraged me to look deeper into the electric vehicle industry. He was always curious about the viability
          of the industry and introduced me to contemporary vehicle systems. My work on engines inspired me to pursue automotives at University.
        </div>

        <div className="mt-[1rem]">
          <img className="h-full w-full rounded-3xl" src="Robotics.jpeg" alt="FIRST Robotics" />
        </div>
  
      </div>
    );
  };
  
  export default AboutMobile;
  