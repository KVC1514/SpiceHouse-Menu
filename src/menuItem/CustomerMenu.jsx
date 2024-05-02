import AppLayout from "../ui/AppLayout";
import { useState, useEffect } from "react";
import { db } from "../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import ModalCompCustomer from "./ModalCompCustomer";
// import NavBar from "../components/fileUpload1/NavBar";
import Spinner from "../components/fileUpload1/Spinner";

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

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this?")) {
  //     try {
  //       setOpen(false);
  //       await deleteDoc(doc(db, "users", id));
  //       setUsers(users.filter((user) => user.id !== id));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  return (
    <AppLayout>
      <header>{/* <Search /> */}</header>
      {/* <NavBar /> */}

      <Container>
        <Grid columns={3} stackable>
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
                        borderRadius: "60%",
                      }}
                    />
                    <Card.Header style={{ marginTop: "10px" }}>
                      {item.Name}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    {/* <Button
                      color="green"
                      onClick={() => navigate(`/update/${item.id}`)}
                    >
                      Update
                    </Button> */}
                    <Button color="purple" onClick={() => handleModal(item)}>
                      View
                    </Button>
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
    </AppLayout>
  );
}

export default Menu;
