import React, { use, useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { toast } from "react-toastify";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8aa37f72-9c18-43fc-ae21-9ef9835567df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submited Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="text-center p-6 py-20 g:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bo;d mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready o Make a Move? Build Your Future Together{" "}
      </p>
      <form
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        onSubmit={onSubmit}
      >
        <div className="flex felx-wrap">
          <div className="w-full md:w-1/2 text-left ">
            Your Name
            <input
              name="Name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left ">
            Your Email
            <input
              name="Email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-800 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer">
          {result ? result : "Send"}
        </button>
      </form>
    </div>
  );
}
