import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div>
      <h1>Spice House Menu</h1>
      <Link to="/">Back to Home</Link>
      <MenuItem />
    </div>
  );
}

export default Menu;
