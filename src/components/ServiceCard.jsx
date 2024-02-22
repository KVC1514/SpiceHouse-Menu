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
      className="flex items-center justify-center planet-background-1"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="rounded-lg shadow-sm cursor-pointer p-8 text-center">
        <div className="inline-block w-20 h-20 bg-white-300 rounded-md">
          {image}
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-black">{text}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
