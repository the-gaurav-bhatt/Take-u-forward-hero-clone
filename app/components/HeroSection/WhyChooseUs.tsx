import React from "react";
import InfoCard from "./InfoCard";

// Sample card data
const cardsData = [
  {
    number: "01",
    title: "Expert-Crafted Learning",
    description:
      "Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.",
    isHighlighted: true,
  },
  {
    number: "02",
    title: "Structured Learning Path",
    description:
      "Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects – all through premium blog posts and in-depth video solutions.",
  },
  {
    number: "03",
    title: "Unmatched Content Depth",
    description:
      "We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div>
        <h2 className=" text-5xl font-bold text-center  text-black">
          Why choose us?
        </h2>
        <h4 className="text-xl pt-4 text-center  text-black">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </h4>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full max-w-sm">
            <InfoCard
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;
