import React from "react";
import Card from "./Card";

const CardList = () => {
  const cardsData = [
    {
      img: "", // Add image link or remove if not needed
      title: "Strivers DSA Sheet",
      body: "Boost your DSA skills with our handy cheat sheets.",
    },
    {
      img: "", // Add image link or remove if not needed
      title: "System Design",
      body: "Design better systems with our simplified approach.",
    },
    {
      img: "", // Add image link or remove if not needed
      title: "Technical Blogs",
      body: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
    },
    {
      img: "", // Add image link or remove if not needed
      title: "Strivers DSA Playlist",
      body: "Master algorithms effortlessly with our curated DSA playlist.",
    },
    {
      img: "", // Add image link or remove if not needed
      title: "CS Subjects",
      body: "Demystify CS topics with our easy-to-understand guides.",
    },
    {
      img: "", // Add image link or remove if not needed
      title: "Strivers CP Sheet",
      body: "Level up your coding game with our practice resources.",
    },
  ];

  return (
    <div className="px-20 flex flex-wrap justify-center ">
      {cardsData.map((card, index) => (
        <div key={index} className=" basis-1/3">
          <Card img={card.img} title={card.title} body={card.body} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
