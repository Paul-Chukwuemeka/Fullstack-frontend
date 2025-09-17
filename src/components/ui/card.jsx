import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="border w-60">
      <Image src={item.image} width={200} height={300} alt={item.name} />
      <h2 className="w-full h-19 overflow-hidden ">{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default Card;
