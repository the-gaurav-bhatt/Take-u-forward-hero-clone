"use client";
import React from "react";
import Countdown from "./Countdown";
import Image from "next/image";
import ThemeSwitch from "../Contexts/themeSwitcher";
const HeaderWithCountdown = () => {
  return (
    <>
      <header className=" shadow-md py-4">
        <div className=" p-2 dark:text-white text-black rounded-lg">
          <Countdown deadline="2024-12-31T23:59:59" />
        </div>
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <Image
              src={"/tufImg.png"}
              width={120}
              height={100}
              className=" mx-40 rounded-full"
              alt="Tuf logo"
            />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <button className="bg-gray-100 text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Get 1:1 Mentorship
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition">
              Login
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center dark:text-white text-black p-10 justify-center text-center">
        <div className="text-4xl font-bold mb-4">
          <span className="font-normal">Gear Up for </span>
          <span className="text-red-500">Success:</span>
          <span className="font-normal"> Your Ultimate Preparation Hub!</span>
        </div>
        <div className="text-sm font-light text-gray-500">
          Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
          Design Systems, Hone Competitive Skills, and Ace Interviews
          Effortlessly
        </div>
      </div>
    </>
  );
};

export default HeaderWithCountdown;
