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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-10 lg:px-20">
      {cardsData.map((card, index) => (
        <div key={index} className="p-4">
          <Card img={card.img} title={card.title} body={card.body} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
