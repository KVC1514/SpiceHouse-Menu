import { Link } from "react-router-dom";
// import Search from "../src/features/menu/Search";
import "../utils/index.css";
import "tailwindcss/tailwind.css";
function Header() {
  const headerStyle = {
    fontFamily: "'Cinzel Decorative', cursive",
    fontSize: "4rem", // Adjust the size as needed
    // lineHeight: "2rem", // Adjust the line height as needed
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <header>
      <Link to="/">
        <h1 style={headerStyle}>SPICE HOUSE</h1>
      </Link>
    </header>
  );
}

export default Header;
