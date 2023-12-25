import Header from "../../components/Header";
import { BlogCard } from "../Blog";

const SensorFusion = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">Sensor Fusion</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 9 min</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Sensor fusion is using multiple sensors to improve measurement accuracy. 
                This is extremely important in situations where knowing an objects spatial orientation is essential. For example, autonomous vehicles 
                must know their own velocity, position, and gyroscopic orientation to preform functions. This is a situation where you would implement an 
                Inertial Measurement Unit (IMU) to record position. This document will focus on implementation. For more information on 
                theory behind sensor fusion please visit:</p>

                <div className="col-span-6">
                    <BlogCard 
                        title="MATLAB Sensor Fusion"
                        date="MathWorks"
                        to="https://www.mathworks.com/help/fusion/inertial-sensor-fusion.html"
                        image="/MATLAB.png"
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
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; yaw/pitch rotation </p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226;  acceleration, velocity and position </p>
                </div>
                
                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Why should we use Sensor Fusion?</p>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">Before we move on, it is important to understand why we need sensor fusion. 
                    As stated earlier, sensor fusion improves accuracy, but you may be wondering why can't we use a single gyroscope to 
                    get yaw/pitch rotation, or a single accelerometer to get acceleration, or just a magnetometer to find north</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]"> Well, each sensor is prone to errors. Gyroscopes are extremely prone 
                    to drift over time. Drift refers to the gradual bias formed towards 1 direction. Magnetometers must be calibrated to deal with external magnetic fields. And accelerometers can be prone to a bias in measurement. 
                    Additionally, all sensor readings fluctuate, even when their motion stops. These errors can be reduced by using sensor fusion. The combination of
                    sensors accounts for inaccuracy from a single sensor
                    </p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Here is a graph visualizing the fluctuations in sensor readings</p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl relative" src="/IMUCalib2.png" alt="IMU data error"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">How to Implement an IMU</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">To implement sensor fusion we require raw sensor data to be 
                refined into pure data. What this means is initial mag, accel and gyro readings, are all unreliable and must be processed through an 
                algorithim to get accurate readings. The most common algorithims are Mahony Filter, Madgwick Filter, and Kalman Filter. For the purpose of 
                implementation, I won't focus on how each of these works. What matters is the required calibration inputs, and the data that we recieve at the end</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Gyroscope</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Gyroscopes have an X, Y and Z offset that must be defined. This offset 
                is used to refine raw gyroscope readings using 1 of the 3 filters. The method to find the offset values will be covered later in this document, 
                in the Magnetometer section</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Accelerometer</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Accelerometers are simlar to gyroscopes, and have an X, Y and Z offset. 
                The offset is used to refine raw accelerometer data using 1 of the 3 filters. Again, the method to find the offset values will be covered later in 
                the document, in the Magnetometer section</p>
                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Magnetometer</p>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">External magnetic fields are categorized into two groups, 
                    Soft-Iron, and Hard-Iron. </p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl" src="/IMUCalib.png" alt="Magnetometer calibration"/>
            </div>
        </div>
    )
}

export default SensorFusion;