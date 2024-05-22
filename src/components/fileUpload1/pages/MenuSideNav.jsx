import { useState, useEffect } from "react";
import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Item } from "semantic-ui-react";

function MenuSideNav() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
      }}
      style={{
        width: "200px",
        // flexDirection: "column",
        height: "100%",
        position: "relative",
        // top: "50px",
        // left: 0,
        zIndex: -1,
        // paddingBottom: "100px",
        paddingTop: "200px",

        alignItems: "center",
        borderLeft: "12px solid transparent",
        overflowY: "auto",
      }}
    >
      <SideNav.Nav>
        <NavItem eventKey={Item} key={Item}>
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",
              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              // transition: "transform 0.1s ease-out",
            }}
          >
            Popular Dishes
          </NavText>
        </NavItem>
        <NavItem eventKey="starters">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",
              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              // transition: "transform 0.1s ease-out",
            }}
          >
            Starters
          </NavText>
        </NavItem>
        <NavItem eventKey="Mains">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Mains
          </NavText>
        </NavItem>
        <NavItem eventKey="Tandoori Specials">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Tandoori Specials
          </NavText>
        </NavItem>
        <NavItem eventKey="Nepali Starters">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Nepali Starters
          </NavText>
        </NavItem>
        <NavItem eventKey="Nepali Dishes">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Nepali Dishes
          </NavText>
        </NavItem>
        <NavItem eventKey="Pizzas">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Pizzas
          </NavText>
        </NavItem>
        <NavItem eventKey="Sides">
          <NavText
            style={{
              // position: "fixed",
              width: "170px", // Set the width to match the sidenav
              textAlign: "center",

              backgroundColor: "darkred",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "19px",
              margin: "18px 0px",
              // transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              //   transition: "transform 0.1s ease-out",
            }}
          >
            Sides
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MenuSideNav;
