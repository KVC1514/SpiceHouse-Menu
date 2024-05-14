import { Menu, Container, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Menu
      inverted
      borderless
      style={{ padding: "0.3rem", marginBottom: "20px" }}
      attached
    >
      <Container>
        <Menu.Item>
          <h2>Edit Menu</h2>
        </Menu.Item>
        <Menu.Item position="right">
          <Button size="mini" primary onClick={() => navigate("/add")}>
            Add item
          </Button>
          <Button
            size="mini"
            primary
            onClick={() => navigate("/menu")}
            style={{ marginLeft: "10px" }}
          >
            Edit Menu
          </Button>
          <Button
            size="mini"
            primary
            onClick={() => navigate("/signIn")}
            style={{ marginLeft: "10px" }}
          >
            Log Out
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
