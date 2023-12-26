import Header from "../../components/Header";

const RTOS = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">Real Time Operating Systems (RTOS)</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">Written for my understanding | 7 min</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Coming soon.</p>
            </div>
        </div>
    )
}

export default RTOS;