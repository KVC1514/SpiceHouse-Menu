import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import Search from "./Search";

function Menu() {
  return (
    <div>
      <header>
        <Search />
      </header>
      <h2>Spice House Menu</h2>
      <Link to="/">Back to Home</Link>
      <MenuItem />
    </div>
  );
}

export default Menu;
