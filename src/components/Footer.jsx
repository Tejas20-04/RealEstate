import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="mt-4 text-gray-400">
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#Header"
                className="hover:text-white text-gray-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-white text-gray-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-white text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Testimonials"
                className="hover:text-white text-gray-400 transition-colors"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
