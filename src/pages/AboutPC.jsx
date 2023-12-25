import Header from '../components/Header';
import AboutMeHeader from '../components/AboutHead';
 
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AboutPC = () => {
    return (
        <div className="flex flex-col items-center">
            <Header/>
            
            <AboutMeHeader/>

            <div className="grid grid-cols-6 gap-4 relative w-[70%] top-[5%]">
                <div className="col-span-3">
                    <p className="mt-[1rem] text-white text-[3rem] font-Rubik z-50">Now</p>
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                    I'm an undergrad at the University of Waterloo studying Electrical Engineering. 
                    During my time here, I have expanded my skills in as many areas as possible, 
                    including PCB design, mechanical design, computer vision, and mechatronics, 
                    while specializing in firmware and control systems engineering. 
                    Much of my learning comes from working with design teams, and co-ops! 
                    I'm currently working with Waterloo Aerial Robotics Group and Midnight Sun Solar Rayce Car. 
                    As I progress through my degree, I get excited seeing how systems come together, 
                    and I'm always searching for opportunities to experience that :)
                    </p>
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                    Today, I am focusing all my efforts on autonomous and electric vehicles. 
                    I write tons of C and C++ and I'm trying to develop my intuition for control systems
                    </p>
                </div>

                <a href="https://www.uwmidsun.com/" target="_blank" rel="noopener noreferrer" className="relative col-span-3 mt-[1rem]">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl">
                        <img
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src="MidnightSun.jpg"
                        alt="Midnight Sun"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-50 z-20 hover:opacity-100 hover:bg-orange-600 transition duration-1000">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-[2rem] font-bold">
                                MIDNIGHT SUN
                            </div>
                        </div>
                    </div>
                </a>

                <div className="col-span-2">
                    <img className="mt-[1rem] h-[26rem] w-[20rem] rounded-3xl" src="/RealisticArt.jpeg" alt="Realistic painting of young woman"/>
                </div>

                <div className="col-span-2">
                    <img className="mt-[1rem] h-[26rem] w-[20rem] rounded-3xl" src="/RealisticArt2.jpeg" alt="Realistic painting of old man"/>
                </div>

                <div className="col-span-2">
                    <p className="mt-[4rem] text-gray-200 text-[1rem] font-Rubik z-50">
                    During my free time, I've maintained my lifelong passion for the arts by playing piano and drawing consistently. 
                    I have focused on realistic sketches, and I am trying to move into hyper-realism in the coming future. 
                    Additionally, I am always trying to give back to my community in Calgary by offering tutoring and 
                    mentorship to current high school students. Recognizing that not many students have guidance during high school, 
                    I aim to nurture young minds into future leaders.
                    </p>

                    <p className="mt-[1rem] text-fuchsia-500 -200 text-[1rem] font-semibold text-center font-Rubik z-50">Here are a couple of my favourite drawings!</p>
                </div>

            </div>


            <div className="mb-[5rem] mt-[1rem] w-[70%] grid grid-cols-6 gap-4">
                <p className="col-span-6 text-white text-[3rem] font-Rubik z-50">Growing Up</p>
                
                <div className="col-span-2">
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                        I was raised in Calgary, surrounded by the Rocky Mountains. One of my favourite activities to do in the mountains 
                        is Snow Tubing! And my favourite snack is BeaverTails (These are sweets, no beavers were harmed). What makes 
                        Calgary feel like home is the friends I have made. They've been a huge influence on who I am, and have introduced me 
                        to new foods, activities and locations. 
                    </p>
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                        Growing up, I had a knack for computers, physics, and electronics, but never had the best guidance to pursue further.
                        What I did have were electronic appliances that introduced me to the world of control systems. My first experience with electronic systems was when I built my first PC in 8th grade.
                        Although I didn't know what most parts did, I learned lots about memory, CPU cycles, wiring, and batteries!
                    </p>
                </div>

                <img className="col-span-2 mt-[1rem] rounded-3xl" src="Banff.jpg" alt="Banff mountains"/>
                <img className="col-span-2 mt-[1rem] rounded-3xl" src="Banff2.jpg" alt="Banff Downtown"/>

                <img className="col-span-3 mt-[1rem] rounded-3xl z-50" src="Robotics.jpeg" alt="FIRST Robotics"/>

                <div className="col-span-3">
                <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                    In all honesty, I favoured academics and research over practical skills, and a year before university applications, I was dead set on becoming a physicist.
                    What changed my mind was working at my high school's FIRST robotics team. This was the birth of my passion for engineering. I found the creativity
                    in designing products, and the intuition behind systems was what I loved most. Most importantly, I loved the supportive engineering community.
                    My team is a huge reason I continue to pursue electrical engineering and firmware development!
                </p>
                <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik z-50">
                    Additionally, my time at our high school mechanic shop is the main reason I'm interested in the automotive industry. 
                    My mentor always encouraged me to look deeper into the electric vehicle industry. He was always curious about the viability 
                    of the industry and introduced me to contemporary vehicle systems. My work on engines inspired me to pursue automotives at University.  
                </p>
                </div>

            </div>

        
            <div className="absolute top-[50%] left-[-10%] h-[65%] w-[25%] z-0">
                <Canvas>
                    <ambientLight intensity={1} color="rgb(140, 110, 255)" />
                    <directionalLight position={[4, 0, 2]} intensity={1} />
                    <Sphere visible args={[1, 100, 300]} scale={2}>
                        <MeshDistortMaterial
                        color="rgb(0, 255, 255)"
                        attach="material"
                        distort={0.6}
                        roughness={0.4}
                        />
                    </Sphere>
                </Canvas>
            </div>

            <div className="absolute top-[150%] right-[-5%] h-[45%] w-[20%] z-0">
                <Canvas>
                    <ambientLight intensity={1} color="rgb(140, 110, 255)" />
                    <directionalLight position={[-4, 0, 2]} intensity={1} />
                    <Sphere visible args={[1, 100, 300]} scale={2}>
                        <MeshDistortMaterial
                        color="rgb(0, 255, 255)"
                        attach="material"
                        distort={0.64}
                        roughness={0.4}
                        />
                    </Sphere>
                </Canvas>
            </div>

            <div className="absolute top-[200%] left-[-10%] h-[55%] w-[25%] z-0">
                <Canvas>
                    <ambientLight intensity={1} color="rgb(140, 110, 255)" />
                    <directionalLight position={[4, 1, 2]} intensity={1} />
                    <Sphere visible args={[1, 100, 300]} scale={2}>
                        <MeshDistortMaterial
                        color="rgb(0, 255, 255)"
                        attach="material"
                        distort={0.6}
                        roughness={0.4}
                        />
                    </Sphere>
                </Canvas>
            </div>

        </div>
    )
}

export default AboutPC