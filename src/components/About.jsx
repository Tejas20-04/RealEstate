import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" flex flex-col item center justify-center container mx-auto p-14 md:px-20 lg:px-32 
      width-full overflow-hidden text-center "
        id="About"
      >
        <h1 className="text-4xl sm:text-4pxl font-bold mb-2 ">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Brand
          </span>
        </h1>
        <p className=" text-gray-500  mb-8 text-center text-xl  ">
          Passionate about properties , Dedicated to you vision!!
        </p>
        <div className=" flex flex-col md:flex-row items-center md:items-start md:gap-50">
          <img
            src={assets.brand_img}
            alt="brand_img"
            className="w-full sm:w1/2 max-w-lg"
          />
          <div className="flex flex-col item-center md:item-start mt-10 text-gray-600">
            <div className=" grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 text-center md:text-left my-8">
              <div>
                <h1 className="text-4xl font-medium text-gray-600">10+</h1>
                <p>Years of Excellence!</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium text-gray-600">150+</h1>
                <p>Projects Completed!</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium text-gray-600">200+</h1>
                <p>Mn Sq.Ft. Delivered!</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium text-gray-600">33+</h1>
                <p>Ongoing Projects!</p>
              </div>
            </div>
            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-lg leading-relaxed text-gray-700 mt-6 mb-8 text-center md:text-left ">
              we are passionate about helping you find your perfect place to
              call home. With years of experience in the real estate industry,
              our dedicated team is committed to providing exceptional service,
              whether you are buying, selling, or renting a property.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 max-w-50">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
