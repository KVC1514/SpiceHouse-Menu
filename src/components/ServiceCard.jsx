// import "tailwindcss/tailwind.css";
// import "../utils/index.css";

// function ServiceCard({ title, text, image }) {
//   return (
//     <div className="rounded-lg shadow-sm planet-background-1 cursor-pointer p-12">
//       <div className="flex  justify-center w-16 h-16 bg-red-500 rounded-md">
//         <img src={image} className="w-[80%] brightness-0 invert" />
//       </div>
//       <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
//       <p className="mt-2 text-sm text-gray-300">{text}</p>
//     </div>
//   );
// }

// export default ServiceCard;

import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ title, text, image, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="flex items-center justify-center planet-background-1"
    >
      <div className="rounded-lg shadow-sm cursor-pointer p-8">
        <div className="flex items-center justify-center w-16 h-16 bg-red-700 rounded-md">
          <img
            src={image}
            alt={title}
            className="w-[80%] brightness-0 invert"
          />
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{text}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
