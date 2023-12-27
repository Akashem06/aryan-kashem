import Header from "../../components/Header";

const Highschool = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">High School</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">My perspective | 6 min</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Coming soon.</p>
            </div>
        </div>
    )
}

export default Highschool;