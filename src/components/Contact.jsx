import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const requiredFields = ["name", "email", "message"];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        setError(`Please fill in the ${field} field.`);
        return;
      }
    }

    setResult("T-minus 10 seconds");
    setError("");

    try {
      formData.append("access_key", "210f8db2-cf81-4c4a-beee-ef750ba947f0");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        console.log("Lift off!", data);
        setResult(data.message);
      } else {
        console.log("Failure :(", data);
        setError(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="w-[50%] p-[3rem] rounded-xl absolute left-[5%]">
      <p className="text-white text-[3rem] font-semibold font-Rubik">Contact Me</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-[100%] my-[1rem] bg-transparent text-white border-2 border-transparent border-b-white"
        />

        <input
          type="email"
          name="email"
          placeholder="What's your email?"
          className="w-[100%] my-[1rem] bg-transparent text-white border-2 border-transparent border-b-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your message"
          className="w-[100%] resize-none my-[1rem] text-white bg-slate-800 rounded-lg"
        ></textarea>

        <input
          type="submit"
          className="bg-green-600 mt-[1rem] w-[100%] rounded-xl py-[0.5rem] px-[1rem] cursor-pointer hover:bg-green-400 transition duration-300"
        />
        
      </form>
      {error && <p className="mt-[1rem] text-center text-red-500 font-Rubik">{error}</p>}
      {result && <p className="mt-[1rem] text-center text-gray-200 font-Rubik">{result}</p>}
      <p className="text-white text-center mt-[1rem] text-[1rem] font-semibold font-Rubik">
        Or reach out to me at:&nbsp;
        <a href="mailto:akashem@uwaterloo.ca" className="text-fuchsia-500 hover:text-fuchsia-800">
          akashem@uwaterloo.ca
        </a>
      </p>
    </div>
  );
};

export default Contact;
