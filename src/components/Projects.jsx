import React, { use, useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

export default function Projects() {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [CardsToShow, SetCardsToShow] = useState(1);
  useEffect(() => {
    const updatecardstoshow = () => {
      if (window.innerWidth >= 1024) {
        SetCardsToShow(projectsData.length);
      } else {
        SetCardsToShow(1);
      }
    };
    updatecardstoshow();
    window.addEventListener("resize", updatecardstoshow);
    return () => window.removeEventListener("resize", updatecardstoshow);
  }, []);
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };
  const prevtProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-2 ">
        Projects{" "}
        <span className="underline underline-offset-5 decoration-1 under">
          {" "}
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Crafting spaces ,Building legacies-Explore Our Portfolio
      </p>
      <div className="flex justify-end item-center mb-8">
        <button
          className=" bg-gray-200 rounded p-3 mr-2 cursor-pointer"
          aria-label="Previous Project"
          onClick={prevtProject}
          c
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className=" bg-gray-200 rounded p-3 mr-2 cursor-pointer"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* slider container for projects */}
      <div className="overflow-hidden ">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(CurrentIndex * 100) / CardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price}
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
