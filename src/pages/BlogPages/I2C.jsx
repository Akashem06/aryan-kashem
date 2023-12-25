import Header from "../../components/Header";

const I2C = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">I2C</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 5 min</p>
                
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-gray-200 text-[1rem] font-Rubik">I2C is a common communication protocol for 
                    connecting sensors and devices in embedded systems, using a two-wire interface. In my experience, I have used it 
                    to develop sensor drivers!</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Serial Data Line (SDA) is a bi-directional 
                    data communication line. We can read documentation to find information on transmission (TX) messages, and on recieved (RX) messages</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">Serial Clock Line (SCL) synchronizes the data transmission 
                    between the master and slave devices. We can find information on the SCL from reading componenet documentation </p>
                </div>
        
                <img className="col-span-6 sm:col-span-3 rounded-3xl" src="/I2C.png" alt="I2C Diagram"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold"> I2C Example Message: </p>
                <img className="col-span-6 rounded-3xl w-full" src="/I2C2.png" alt="Example I2C Message"/>

                <div className="col-span-6">
                  <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">&#8226; Start bit for all messages (Don't worry about this)</p>
                  <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; The address of the RX/TX. I2C can be connected in a chain/bus, so the address is required (This is found on Datasheet)</p>
                  <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; A read/write bit. If it is 0, the master wants to write. If it is 1, the master wants to read </p>
                  <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; ACK/NACK bits inform the reciever if the data was sent succesfully</p>
                  <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Data frames are 8 bit RX/TX messages. There can be any number of them but they are always 8 bits</p>
                  <p className="text-gray-200 text-[1rem] font-Rubik">&#8226; Stop bit for marks the end of all messages (Don't worry about this)</p>
                </div>
                
            </div>

        </div>
    )
}

export default I2C;