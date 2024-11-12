import React from "react";

function Card({username}) {
  console.log(username);

  return (
    <div className="rounded-md">
      <img
        src="https://images.pexels.com/photos/29100035/pexels-photo-29100035/free-photo-of-vibrant-butterfly-on-red-flower-in-lush-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="butterfly"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0">
        <h1 className="text-lg">{username}</h1>
      </div>
    </div>
  );
}

export default Card;
