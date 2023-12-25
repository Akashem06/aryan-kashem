import Header from "../../components/Header";

const SyncAsync = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[2.5rem] md:text-[3rem] font-Rubik font-bold">Synchronous vs Asynchronous</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 3 min</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Synchronous: Real-time communication with a clock line; Asynchronous: Time-flexible communication using standard baud rates</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold"> Synchronous Communication: </p>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Synchronous communication uses a seperate clock line 
                    to time data transmission. This means serial data is sent together with a clock signal. Typically, the data is transmitted at the rising edge 
                    or falilng edge of the clock signal</p>
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Example Synchronous Protocols:</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">&#8226; SPI (Serial Peripheral Interface)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; I2C (Inter-Integrated Circuit)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; USART (Universal Synchronous Asynchronous Receiver Transmitter)</p>

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Key Characteristics:</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">&#8226; Requires separate wire for clock line</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Does not require clock accuracy to operate</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Does not require start/stop bits</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Generally faster than asynchronous protocols</p>
                </div>
                <img className="col-span-6 sm:col-span-3 rounded-3xl" src="/SyncAsync.png" alt="Data clock diagram"/>
        
                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold"> Asynchronous Communication: </p>
                <div className="col-span-6">
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Asynchronous communication uses a standard transmission rate 
                    that all components must agree on. This is called 'Baud Rate'. Asynchronous protocols have states that start  
                    and stop data transmission. In the case of CAN or UART, this is when the pin is pulled low </p>
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Example Asynchronous Protocols:</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">&#8226; CAN (Controller Area Network)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; UART (Universal Synchronous Asynchronous Receiver Transmitter)</p>

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem] font-bold">Key Characteristics:</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">&#8226; Fewer wire connections are required</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Requires an accurate clock (Baud rate)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Start/stop bits are required in each message</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Generally slower than synchronous protocols</p>
                </div>
                <img className="col-span-6 rounded-3xl w-full" src="/SyncAsync2.png" alt="Asynchronous timing diagram"/>

            </div>
        </div>
    )
}

export default SyncAsync;