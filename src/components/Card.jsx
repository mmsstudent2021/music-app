import React from "react";
import { Link } from "react-router-dom";

const Card = ({ song }) => {
  return (
    <Link to={`/detail/${song?.id}`}>
      <div className="bg-gray-100 shadow-md w-44 p-5 rounded-lg">
        <div className="">
          <img src={song?.thumbnail} alt="" />
          <h1 className="text-xl">{song?.title}</h1>
          <p>{song?.artists[0]?.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
