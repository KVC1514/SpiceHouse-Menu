import React, { useState, useEffect } from "react";
import { db } from "../main"; // Firebase DB
import { collection, onSnapshot } from "firebase/firestore"; // Firestore methods
import { Card, Grid, Container, Image, Button, Input } from "semantic-ui-react"; // UI components
import AppLayout from "../ui/AppLayout";
import Spinner from "../components/fileUpload1/Spinner";
import ModalCompCustomer from "./ModalCompCustomer";
import Category from "../components/category/Category"; // Import Category component

function Menu() {
  const [users, setUsers] = useState([]); // All users fetched from Firebase
  const [filteredUsers, setFilteredUsers] = useState([]); // Users filtered by category and search
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [selectedCategory, setSelectedCategory] = useState("all"); // Category filter state

  // Fetch data from Firebase Firestore
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(list);
        setFilteredUsers(list); // Initially show all users
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );

    return () => unsub(); // Cleanup subscription on unmount
  }, []);

  // Handle filtering users by category and search query
  const filterByCategory = (category) => {
    setSelectedCategory(category); // Update selected category
    const filtered = users.filter((user) => {
      // Check if the user matches the category and search query
      const matchesCategory = category === "all" || user.Category === category;
      const matchesSearchQuery = user.Name.toLowerCase().includes(
        searchQuery.toLowerCase()
      );
      return matchesCategory && matchesSearchQuery;
    });
    setFilteredUsers(filtered); // Update the filtered users
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query

    // Filter users based on current category and search query
    const filtered = users.filter((user) => {
      const matchesCategory =
        selectedCategory === "all" || user.Category === selectedCategory;
      const matchesSearchQuery = user.Name.toLowerCase().includes(
        query.toLowerCase()
      );
      return matchesCategory && matchesSearchQuery;
    });
    setFilteredUsers(filtered);
  };

  const handleModal = (item) => {
    setOpen(true);
    setUser(item);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <AppLayout>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div style={{ display: "flex", flex: 1, overflowY: "auto" }}>
          <div
            style={{
              flex: "0 0 230px",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Category filterByCategory={filterByCategory} />
          </div>

          <Container style={{ flex: 1, minHeight: "500px" }}>
            <Input
              icon="search"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchChange}
              fluid
              style={{
                marginBottom: "20px",
                width: "300px",
                marginLeft: "37px",
              }}
            />
            <Grid columns={3} stackable container spacing={3}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((item) => (
                  <Grid.Column key={item.id}>
                    <Card style={{ width: "300px", height: "400px" }}>
                      <Card.Content>
                        <Image
                          src={item.img}
                          size="medium"
                          style={{
                            height: "175px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.src = "path/to/placeholder/image.png"; // Placeholder image
                          }}
                        />
                        <div style={{ marginTop: "10px" }}>
                          <Card.Header>{item.Name}</Card.Header>
                          <div
                            style={{
                              height: "50px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <p>{item.Description}</p>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <span>{item.Price}</span>
                          </div>
                        </div>
                      </Card.Content>
                      <Card.Content extra>
                        <div style={{ textAlign: "center" }}>
                          <Button color="red" onClick={() => handleModal(item)}>
                            View
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))
              ) : (
                <div>No items found</div>
              )}
            </Grid>
          </Container>
        </div>
      </div>
      {open && <ModalCompCustomer open={open} setOpen={setOpen} {...user} />}
    </AppLayout>
  );
}

export default Menu;
