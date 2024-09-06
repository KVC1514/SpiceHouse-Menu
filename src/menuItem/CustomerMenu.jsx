import AppLayout from "../ui/AppLayout";
import { useState, useEffect } from "react";
import { db } from "../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
import { collection, onSnapshot } from "firebase/firestore";
import ModalCompCustomer from "./ModalCompCustomer";
import Spinner from "../components/fileUpload1/Spinner";
import "semantic-ui-css/semantic.min.css";
import Category from "../components/category/Category";

function Menu() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const handleModal = (item) => {
    setOpen(true);
    setUser(item);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <AppLayout>
      <header>{/* <Search /> */}</header>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div style={{ display: "flex", flex: 1, overflowY: "auto" }}>
          <div
            style={{
              flex: "0 0 230px",
              overflowY: "auto",
              borderRight: "3px solid #ddd",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Category />
          </div>
          <Container
            className="mt-10 md:w-1/3 sm:w-1/2 w-full"
            style={{ flex: 1, minHeight: "500px" }}
          >
            <Grid columns={3} stackable container spacing={3} sx={{ mb: 5 }}>
              {users.map((item) => (
                <Grid.Column key={item.id}>
                  <Card>
                    <Card.Content>
                      <Image
                        src={item.img}
                        size="medium"
                        style={{
                          height: "175px",
                          width: "300px",
                        }}
                      />
                      <div style={{ marginTop: "10px" }}>
                        <Card.Header style={{ marginTop: "10px" }}>
                          {item.Name}
                        </Card.Header>
                        <div>
                          <p>{item.Description}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <span
                            style={{ marginLeft: "10px", textAlign: "right" }}
                          >
                            {item.Price}
                          </span>
                        </div>
                      </div>
                    </Card.Content>
                    <Card.Content extra>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          color="purple"
                          onClick={() => handleModal(item)}
                        >
                          View
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        </div>
        <footer style={{ flexShrink: 0 }}>{/* Footer content here */}</footer>
      </div>
      {open && <ModalCompCustomer open={open} setOpen={setOpen} {...user} />}
    </AppLayout>
  );
}

export default Menu;
