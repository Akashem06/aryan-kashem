import Header from "../../components/Header";

const Highschool = () => {
    return (
        <div className="flex flex-col items-center mb-[5rem]">
            <Header />
            <div className="grid grid-cols-6 gap-4 relative w-[90%] md:w-[70%] top-[5%]">
                <p className="col-span-6 text-white text-[3rem] font-Rubik font-bold">High School</p>
                <p className="col-span-6 relative bottom-[75%] text-white text-[1rem] font-Rubik font-semibold">My perspective | 6 min</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">I went to Crescent Heights High School in Calgary, Alberta from 2020-2023. This 
                was a public high school that I chose mainly because of my friends, but also the AP program. The school was a 10 minute walk away from downtown 
                but an hour away from my home. My experience in high school is unique since I belonged to the AP cohort, meaning I would spend 
                little time in 'regular' classes. I was always surrounded by the same faces making each year very comfortable for me :) Despite that, 
                I'm hoping my advice and experiences are relatable to you!</p>

                <img className="col-span-6 rounded-3xl w-full h-full" src="CHHS2.jpg" alt="Crescent Heights"/>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">How to plan your classes and studying</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">When I was in high school I knew from the very beginning I 
                was entering the STEM field. Although I did not know which degree, I knew the general field which was crucial in helping me choose 
                my classes. I ended up taking as many STEM classes as I could, including biology, chemistry, physics, math and calculus. I also 
                made sure that I pushed myself, without compromising my performance. I am the type of person that needs a difficult challenge to arise 
                before I push myself, which is why I took AP courses.</p>
                
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik text-center font-bold">Know the general field you are prusuing, and craft your 
                schedule to succeed in that field, while also pushing yourself</p>

                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Elective/option gives you an oppertunity to explore new 
                fields and develop new skills. When choosing which class to take I suggest you ask yourself the following 
                questions, with 1 being the most important and 4 being the least</p>

                <div className="col-span-6">
                    <p className="text-gray-200 text-[1rem] font-Rubik">1. How applicable are the skills you learn to your future career?</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Example: For me auto mechanics and computer science were very applicable to my 
                    future goals. That is why I took those elective/option courses. I also took a cooking class to become more independent</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">2. How passionate you are about this elective/option course?</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Example: I was really passoinate about the fine arts since 5th grade. That 
                    is why I took an art elective/option every year</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">3. Do you have friends taking the same elective/option?</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Yes you can make new friends, but having someone you already know in that class 
                    really makes an elective/option fun</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">4. How much workload is there? And how achievable is a high mark?</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">No student wants work, so it is important to consider the workload 
                    for each elective/option you are taking. At the end of the day, electives/options should be GPA boosters that require minimal work. 
                    I am placing this at fourth since some courses are worth taking, even if there is a high workload.</p>
                </div>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">My tips to do well academically</p>           
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik">Doing well in courses is essential in setting up your future 
                plans. For students who wish to prusue further studies, your academic performance is your foundation. A good score in a class 
                opens up many oppertunities, but does not certify anything. Despite academic pressure, do not forget that marks do not define 
                your worth</p>
                <p className="col-span-6 text-gray-200 text-[1rem] font-Rubik text-center font-bold">The key to academic success is understanding 
                school is NOT about grades. It is about learning new concepts and problem-solving. Grades should be seen as a bonus you recieve 
                for your learning efforts. Here are some tips I used to learn better: </p>

                <div className="col-span-6">
                    <p className="text-gray-200 text-[1rem] font-Rubik">1. Practice problems! Writing notes is overrated</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">This is THE BEST way to study. Applying a concept will teach 
                    you more about it than copying down notes. Again this is very dependent on the class, but practice problems will lead you 
                    to success in math, calculus, physics, and chemistry. Practice problems force you into making connections between concepts, 
                    wbile also preparing for test-level questions! Additionally, being able to problem-solve like second nature is what 
                    seperates great students from good students. Life is not about memorizing all the solutions to every problem, but being able 
                    to tackle any problem confidently :)</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">2. How to approach practice problems?</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Brute force it! Do what you think is right and verify your answer. 
                    If you get it right, congrats your logic is perfect. However if you get the question wrong, take time to refine your logic and 
                    understand your mistake. Review the answer thoroughly and move on. Make sure to review the correct answer again, or write the process down somewhere. 
                    Practice is all about honing your logic!</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">3. Make difficult concepts simple</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">As you progress through school, you will notice concepts become 
                    highly technical. The language is sometimes very hard to grasp. Instead of learning to understand highly technical language, 
                    I found success understanding concepts visually or with simple terms. For example, when I hear 'Derivative', I imagine 
                    it conceptually on a graph, rather than describing it using limits. The best students are able to describe difficult concepts 
                    to a child</p>
                    <p className="text-gray-200 text-[1rem] font-Rubik mt-[1rem]">4. Do not overstudy</p>
                    <p className="text-gray-400 text-[1rem] font-Rubik">Overstudying refers to reviewing a chapter in your textbook when 
                    you already understand the concepts. In some courses this is a valid approach. Specifically courses that test you using quotes 
                    straight from your textbook (I hate these courses. They should not exist!)</p>
                </div>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">Activities</p>

                <p className="col-span-6 text-white text-[1.5rem] font-Rubik mt-[1rem] font-bold">University Applications</p>
            </div>
        </div>
    )
}

export default Highschool;