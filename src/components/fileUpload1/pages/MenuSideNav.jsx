import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const MenuSideNav = ({ onSelectCategory }) => {
  const categories = [
    "Popular Dishes",
    "Starters",
    "Mains",
    "Tandoori Specials",
    "Nepali Starters",
    "Nepali Dishes",
    "Pizzas",
    "Sides",
  ];

  return (
    <SideNav
      onSelect={(selected) => {
        onSelectCategory(selected);
      }}
      style={{
        width: "200px",
        height: "100%",
        position: "relative",
        zIndex: -1,
        paddingTop: "200px",
        alignItems: "center",
        borderLeft: "12px solid transparent",
        overflowY: "auto",
      }}
    >
      <SideNav.Nav>
        {categories.map((category, index) => (
          <NavItem eventKey={category} key={index}>
            <NavText
              style={{
                width: "170px",
                textAlign: "center",
                backgroundColor: "darkred",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                margin: "18px 0px",
              }}
            >
              {category}
            </NavText>
          </NavItem>
        ))}
      </SideNav.Nav>
    </SideNav>
  );
};

export default MenuSideNav;
