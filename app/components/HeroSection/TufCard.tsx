import React from "react";
import Image from "next/image";

// Define the type for the props
interface TUFCardProps {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const TUFCard: React.FC<TUFCardProps> = ({
  imgSrc,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex mx-20 my-4 justify-between items-center p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      {/* Left Side Image */}
      <div className="flex items-center">
        <div className="w-20 h-30 rounded-md overflow-hidden">
          <Image
            src={imgSrc}
            alt="TUF+ Logo"
            width={80}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Section - Text */}
      <div className="flex-1 ml-6">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>

      {/* Right Side Button */}
      <div>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 focus:outline-none">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TUFCard;
