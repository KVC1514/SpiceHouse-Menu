import React from "react";
import { Link } from "react-router-dom";
import "../utils/index.css";

function ServiceCard({ title, text, linkTo, image }) {
  const handleHover = (event) => {
    // event.currentTarget.style.backgroundColor = "from #ff1111 to #ff6666"; // Darker reddish color on hover
  };

  const handleLeave = (event) => {
    event.currentTarget.style.backgroundColor = ""; // Reset background color on leave
  };

  return (
    <Link
      to={linkTo}
      className="flex items-center justify-center planet-background-1 background-pink"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="rounded-lg shadow-sm cursor-pointer  text-center headercontainer bg-slate-500">
        <div className="inline-block w-10 h-10 bg-white-300 rounded-md">
          {image}
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
        <p className=" text-black">{text}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
