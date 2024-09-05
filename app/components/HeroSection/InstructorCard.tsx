import React from "react";
import Image from "next/image";

const InstructorCard = () => {
  const name = "Raj Vikramaditya";
  const position = "SWE-III @ Google | Founder takeUforward";
  const description = [
    "Software Engineer at Google.",
    "Offers from Facebook London and other startups.",
    "Previously worked with Amazon, Media.net.",
    "Followed by 1M+ people across YT, LinkedIn and other socials.",
    "Candidate Master at Codeforces.",
    "6* at Codechef.",
  ];
  const imageSrc = "/image.jpg"; // Replace this with actual path to image
  const companies = [
    "/images/google.png",
    "/images/amazon.png",
    "/images/medianet.png",
    "/images/geeksforgeeks.png",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-red-600 dark:text-red-400 text-xl text-center font-semibold mb-4">
        INSTRUCTOR
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-4 md:mb-0 md:mr-8">
          <Image
            className="w-96 h-96 rounded-lg"
            width={150}
            height={150}
            src={"/image.png"}
            alt={name}
          />
        </div>
        {/* Details Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Meet Our Exceptional Instructor
          </h1>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {position}
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              {companies.map((company, index) => (
                <img
                  key={index}
                  src={company}
                  alt={`Company logo ${index}`}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
