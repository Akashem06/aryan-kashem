import Header from "../../components/Header";

const SPI = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">SPI</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 4 min</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">SPI is a serial communication protocol facilitating data exchange between 
                microcontrollers and devices like sensors and displays, using 4 lines</p>
                <div className="col-span-6 md:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">MOSI (Master Out Slave In) - Transmit (TX) messages. Toggled on and off to transmit data (Binary)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">MISO (Master In Slave Out) - Recieve (RX) messages. Toggled on and off to recieve data (Binary)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">SCLK (Serial Clock) - provides a clock cycle to tell the slave the timing of bits. Clock Polarity (CPOL) and Clock Phase (CPHA) is defined in component datasheets</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">CS (Chip Select) - Pulls the pin low to select a chip, enables RX/TX messages. Typically used when there's multiple SPI devices</p>
                </div>
                <img className="col-span-6 md:col-span-3 rounded-3xl mt-[0.5rem]" src="SPI.png" alt="SPI diagram"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold"> SPI Message Example: </p>
                <div className="col-span-6 md:col-span-2">
                    <p className="text-white text-[1rem] font-Rubik">Clock polarity determines if the clock is initially LOW (0) or HIGH (1). 
                    If CPOL = 0, then it is LOW. If CPOL = 1, then it is initially HIGH</p>
                    <p className="text-white text-[1rem] font-Rubik mt-[1rem]">Clock phase determines if you read the bit on every 2nd HIGH/LOW shift, or every 1st.
                    If CPHA = 0, then it will read the bit every 1st HIGH/LOW shift. If CPHA = 1, then it will read a bit every 2nd HIGH/LOW shift</p>

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem]">Chip select pulls the pin low to enable all RX and TX messaging to occur</p>

                    <p className="text-white text-[1rem] font-Rubik mt-[1rem]">This is a synchronous communication protocol</p>
                </div>
                <img className="col-span-6 md:col-span-4 rounded-3xl" src="SPI2.jpg" alt="Clock polarity/Clock phase Diagram"/>
                
            </div>
          
        </div>
    )
}

export default SPI;