import Header from "../../components/Header";
import { BlogCard } from "../Blog";

const SensorFusion = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">AHRS Sensor Fusion</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 9 min</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Sensor fusion is using multiple sensors to improve measurement accuracy. 
                This is extremely important in situations where knowing an objects spatial orientation is essential. For example, autonomous vehicles 
                must know their own velocity, position, and gyroscopic orientation to preform functions. This is a situation where you would implement an 
                Inertial Measurement Unit (IMU) to record position. AHRS refers to Attitude and Heading Reference System. This is a form of sensor 
                fusion that is provides accuracte yaw, roll and heading (Angle from north) angles. This document will focus on implementation. For more information on 
                theory behind sensor fusion please visit:</p>

                <div className="col-span-6">
                    <BlogCard 
                        title="MATLAB Sensor Fusion"
                        date="MathWorks"
                        to="https://www.mathworks.com/help/fusion/inertial-sensor-fusion.html"
                        image="MATLAB.png"
                        summary="MATLAB documentation on sensor fusion implementation, using a 9 axis IMU. Extremely helpful 
                        to visualize the mathematical reasoning for sensor fusion"
                        estimatedTime="MATLAB"
                    />
                </div>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">What is an IMU?</p>
                <div className="col-span-6">
                    <p className="text-gray-200 text-[1rem] font-Rubik">An IMU is either 6 axis or 9 axis. 
                    6 axis means it measures acceleration and gyroscopic rotation in X, Y, and Z planes. 9 axis means it measures 
                    accerleration, gyroscopic rotation, and magnetic field strength in X, Y, and Z planes. Each has its strengths, 
                    but I will be focusing on 9 axis IMU's</p>

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">9 axis IMU can be use to accurately calculate: </p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; heading angle (Angle away from North)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; yaw/roll rotation </p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226;  acceleration, velocity and position </p>
                </div>
                
                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Why should we use Sensor Fusion?</p>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">Before we move on, it is important to understand why we need sensor fusion. 
                    As stated earlier, sensor fusion improves accuracy, but you may be wondering why can't we use a single gyroscope to 
                    get yaw/roll rotation, or a single accelerometer to get acceleration, or just a magnetometer to find north</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]"> Well, each sensor is prone to errors. Gyroscopes are extremely prone 
                    to drift over time. Drift refers to the gradual bias formed towards 1 direction. Magnetometers must be calibrated to deal with external magnetic fields. And accelerometers can be prone to a bias in measurement. 
                    Additionally, all sensor readings fluctuate, even when their motion stops. These errors can be reduced by using sensor fusion. The combination of
                    sensors accounts for inaccuracy from a single sensor
                    </p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Here is a graph visualizing the fluctuations in sensor readings</p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl relative" src="IMUCalib2.png" alt="IMU data error"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">How to Implement an IMU</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">To implement sensor fusion we require raw sensor data to be 
                refined into pure data. What this means is initial mag, accel and gyro readings, are all unreliable and must be processed through an 
                algorithim to get accurate readings. The most common algorithims are Mahony Filter, Madgwick Filter, and Kalman Filter. For the purpose of 
                implementation, I won't focus on how each of these works. What matters is the required calibration inputs, and the data that we recieve at the end</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Gyroscope</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Gyroscopes have an X, Y and Z offset that must be defined. This offset 
                is used to refine raw gyroscope readings using 1 of the 3 filters. The method to find the offset values will be covered later in this document</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Accelerometer</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Accelerometers are simlar to gyroscopes, and have an X, Y and Z offset. 
                The offset is used to refine raw accelerometer data using 1 of the 3 filters. Again, the method to find the offset values will be covered later in 
                the document</p>
                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Magnetometer</p>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">External magnetic fields are categorized into two groups, 
                    Soft-Iron, and Hard-Iron </p> 

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Soft-Iron Calibration Matrix</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">Soft-Iron offsets are created by ferromagnets - temporary magnetic fields. 
                    For example, when iron is put in an external magnetic field, it produces its own magnetic field, acting as a Soft-Iron magnet. 
                    To deal with Soft-Iron offset, we must apply a Soft-Iron matrix. This is a 3x3 matrix which re-maps the X, Y and Z magnetic 
                    field strengths (An application of Linear Algebra)</p>
                    
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Hard-Iron Offset</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">Hard-Iron offsets are created by permanent magnets, which produce a constant bias in data. 
                    To deal with Hard-Iron magnets, we can simply subtract the offset from the raw readings </p>

                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">The image shows how Hard-Iron offset can shift magnetic field strength 
                    in each axis. The three circles are a 2 dimensional representation of magnetic field strength using the X/Y, Y/Z, and Z/X axis </p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl" src="IMUCalib3.jpeg" alt="Magnetometer calibration"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">MotionCal</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">MotionCal is an amazing software which I used to 
                calibrate my IMU's! It finds Soft-Iron matrix, Hard-Iron offsets, gyroscope offset, and accelerometer offset. Here is the 
                procedure: </p>

                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">1. Download and open MotionCal using the following link: 
                    <a href="https://www.pjrc.com/store/prop_shield.html">https://www.pjrc.com/store/prop_shield.html</a></p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Quick tip: Your device may not trust the download and it will not proceed. 
                    Right click on your respective download, copy link address, and paste it into the search bar to initiate the download</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">2. Set up serial communication between IMU and device. With arduino use 
                    Serial.print(RawData). Make sure you are PRINTING raw gyroscope, accelerometer and 
                    magnetometer values in X, Y and Z</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">3. Rotate the IMU in every axis. Try to get 
                    a sphere in the MotionCal software. At the bottom you should have a gap of less than 1%!</p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl" src="IMUCalib.png" alt="Magnetometer calibration"/>

                <div className="col-span-6">
                    <BlogCard 
                        title="MotionCal Download"
                        date="PJRC"
                        to="https://www.pjrc.com/store/prop_shield.html"
                        image="PJRC.jpg"
                        summary="MotionCal is a software that determines IMU offset values. All we have to do is rotate the IMU! Download 
                        the appropiate file for your OS"
                        estimatedTime="MotionCal"
                    />
                </div>
                
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">You should now have all offset values and a Soft-Iron matrix that you can implement 
                into a filtering algorithim like the Mahony Filter, Madgwick Filter, or Kalman Filter. For practicality, find a library that implements 
                your preferred algorithim for you! </p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Calculations for Filter Input</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">These values are still not ready for use, so make sure 
                you review the library documentation for the filter you are using. After doing the appropiate calculations you should now be able to 
                obtain any aspect of spatial orientation related to the IMU! Below are common calculations for all libraries</p>

                <div className="col-span-6">
                    <p className="text-white text-[1rem] font-Rubik font-bold">Gyroscope Offset</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">Refined Gyro = Raw Gyro - Gyro Offset</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Reminder that this is vector subtraction, so subtract X, Y and Z</p>
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Accelerometer Offset</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">Refined Accel = Raw Accel - Accel Offset</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Reminder that this is vector subtraction, so subtract X, Y and Z</p>
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Magnetometer Offset</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">Refined Mag = Raw Mag - Mag Hard-Iron Offset</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Reminder that this is vector subtraction, so subtract X, Y and Z</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Now with the Refined Mag, multiply the vector with the Soft-Iron matrix</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Reminder that this is matrix multiplication, so multiply the X, Y and Z with the 
                    top row for the X value, the middle row for the Y value, and the bottom row for the Z value. For a review on matrix multiplication refer to the 
                    following video:</p>

                </div>
            </div>
        </div>
    )
}

export default SensorFusion;