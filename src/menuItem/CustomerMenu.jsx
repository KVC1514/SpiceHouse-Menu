import AppLayout from "../ui/AppLayout";
import { useState, useEffect } from "react";
import { db } from "../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";

import { collection, onSnapshot } from "firebase/firestore";
import ModalCompCustomer from "./ModalCompCustomer";

import Spinner from "../components/fileUpload1/Spinner";
import "semantic-ui-css/semantic.min.css";
import MenuSideNav from "../components/fileUpload1/pages/MenuSideNav";

function Menu() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({}); // Change state initialization to object
  const [loading, setLoading] = useState(true);
  //   const navigate = useNavigate();

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

  if (loading) {
    return <Spinner />;
  }

  const handleModal = (item) => {
    setOpen(true);
    setUser(item); // Set user data for the modal
  };

  return (
    <AppLayout>
      <header>{/* <Search /> */}</header>

      <div style={{ display: "flex", }}>
        <div style={{ flex: "0 0 150px" }}>
          <MenuSideNav />
        </div>
        <div style={{ flex: "1" }}>
          <Container style={{ minHeight: "500px", marginLeft: "250px" }}>
            <Grid columns={3} stackable container spacing={3} sx={{ mb: 5 }}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                users.map((item) => (
                  <Grid.Column key={item.id}>
                    {" "}
                    {/* Add key prop to Grid.Column */}
                    <Card>
                      <Card.Content>
                        <Image
                          src={item.img}
                          size="medium"
                          style={{
                            height: "175px",
                            width: "300px",
                            // border: "60%",
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
                        {/* <Button
                      color="green"
                      onClick={() => navigate(`/update/${item.id}`)}
                    >
                      Update
                    </Button> */}
                        <div style={{ textAlign: "center" }}>
                          <Button
                            color="purple"
                            onClick={() => handleModal(item)}
                          >
                            View
                          </Button>
                        </div>
                        {open && (
                          <ModalCompCustomer
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            // handleDelete={handleDelete}
                            {...user}
                          />
                        )}
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))
              )}
            </Grid>
          </Container>
        </div>
      </div>
    </AppLayout>
  );
}

export default Menu;
