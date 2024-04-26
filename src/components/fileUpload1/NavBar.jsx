import React from "react";
import { Menu, Container, Button, Image } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";

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
          <h2>Upload Image</h2>
        </Menu.Item>
        <Menu.Item position="right">
          <Button size="mini" primary onClick={() => navigate("/add")}>
            Sign in
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
