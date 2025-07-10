import React, { use, useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

export default function Contact() {
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
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
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
      </form>
    </div>
  );
}
