import React from "react";

// Define the type for the props
interface InfoCardProps {
  number: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, description }) => {
  return (
    <div
      className={`p-6 rounded-lg min-h-72 shadow-md text-center transition-all duration-300 ease-in-out
      bg-white  text-black
      hover:bg-red-500 hover:text-white
      dark:bg-gray-800 
       dark:text-white
      `}
    >
      <h2 className="text-4xl font-bold opacity-50">{number}</h2>
      <h3 className="text-2xl font-semibold mt-2">{title}</h3>
      <p className="mt-4 text-base">{description}</p>
    </div>
  );
};

export default InfoCard;
