import { Link, NavLink } from "react-router-dom";
import "../../public/styles/HeaderStyles.css";
import { useState } from "react";
import "../utils/index.css";
import "tailwindcss/tailwind.css";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RestaurantIcon from "@mui/icons-material/Restaurant";

function Header() {
  const headerStyle = {
    fontFamily: "'Cinzel Decorative', cursive",
    fontSize: "4rem", // Adjust the size as needed
    // lineHeight: "2rem", // Adjust the line height as needed
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  };
  const headerStyle2 = {
    fontFamily: "'Cinzel Decorative', cursive",
    fontSize: "2rem", // Adjust the size as needed
    // lineHeight: "2rem", // Adjust the line height as needed
    fontWeight: "bold",
    textAlign: "center",
  };
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"black"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <RestaurantIcon />
        My Resturant
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>View Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>Edit Menu</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box sx={{ p: 1 }}>
        <Toolbar />
      </Box>
      <Link to="/">
        <h1 style={headerStyle}>SPICE HOUSE</h1>
      </Link>
      <h1 style={headerStyle2}>Best Indian Resturant In Northern Ireland</h1>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "red" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              arial-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuBookIcon />
            </IconButton>
            <Typography
              color={"black"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <RestaurantIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>View Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/add"}>Edit Menu</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default Header;
