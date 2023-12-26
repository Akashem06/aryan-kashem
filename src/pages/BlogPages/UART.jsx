import Header from "../../components/Header";
import { BlogCard } from "../Blog";

const UART = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">UART</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 3 min</p>

                <div className="col-span-6 md:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">UART is an asynchronous serial communication protocol 
                    commonly used for short-distance communication between devices</p>
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik">Device 1 transmits (TX) messages to the recieving (RX) pins of device 2. 
                    Device 1 will recieve (RX) messages from the transmitting (TX) pins of device 2. Messages are transmitted through a serial port</p>
                    <p className="mt-[1rem] text-gray-200 text-[1rem] font-Rubik">When working with STM32, I like to use PuTTY to view UART messages. 
                    With Arduino, the IDE has a direct serial interface that will display UART messages. These messages come handy when troubleshooting firmware </p>
                </div>
                    
                <img className="col-span-6 md:col-span-3 rounded-3xl" src="UART.png" alt="UART diagram"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">USART vs UART: </p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik mt-[1rem]">USART is a more advanced version of UART 
                that supports synchronous and asynchronous commnuication. UART only supports asyncrhonous communication, making USART more versatile. 
                With synchronous communication we can implement a clock signal to determine the rate of communication. This eliminates the need for a common baud rate. 
                USART has a clock pin called 'CLK'</p>

                <p className="col-span-6 text-white text-[1rem] font-Rubik mt-[1rem] font-bold">For more information refer to this:</p>
                <div className="col-span-6">
                    <BlogCard 
                        title="Synchronous vs Asynchronous Communication" 
                        date="December 24, 2023"
                        to="/Blog/SyncAsync"
                        image="SyncAsync.png"
                        summary="Synchronous: Real-time communication with a clock line; Asynchronous: Time-flexible communication using standard baud rates"
                        estimatedTime="3 min"
                    />
                </div>
            </div>
        </div>
    )
}

export default UART;