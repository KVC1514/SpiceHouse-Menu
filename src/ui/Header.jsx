import { Link } from "react-router-dom";
// import Search from "../src/features/menu/Search";
import "tailwindcss/tailwind.css";
function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="text-8xl font size-1.25rem line-height-2rem font-bold text-center bg-gradient-to-r from-red-500 to-orange-500 text-color bg-white">
          SPICE HOUSE
        </h1>
      </Link>
    </header>
  );
}

export default Header;
