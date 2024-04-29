import AppLayout from "../../ui/AppLayout";
import React, { useEffect, useState } from "react";
import { db } from "../../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

function Menu() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Default loading state is true
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false); // Set loading to false once data is fetched
      },
      (error) => {
        console.error("Error fetching data:", error); // Handle error
        setLoading(false); // Set loading to false in case of error
      }
    );

    // Cleanup function for unsubscribing from snapshot listener
    return () => unsub();
  }, []);

  return (
    <AppLayout>
      <header>{/* <Search /> */}</header>

      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Card.Group>
          <Grid columns={3} stackable>
            {loading ? (
              <p>Loading...</p> // Display loading message while data is being fetched
            ) : (
              users.map((item) => (
                <Grid.Column key={item.id}>
                  <Card>
                    <Card.Content>
                      <Image
                        src={item.img}
                        size="medium"
                        style={{
                          height: "175px",
                          width: "300px",
                          borderRadius: "60%",
                        }}
                      />
                      <Card.Header style={{ marginTop: "10px" }}>
                        {item.name}
                      </Card.Header>
                      <Card.Description>{item.info}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        color="green"
                        onClick={() => navigate(`/update/${item.id}`)}
                      >
                        Update
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))
            )}
          </Grid>
        </Card.Group>
      </Container>
    </AppLayout>
  );
}

export default Menu;
