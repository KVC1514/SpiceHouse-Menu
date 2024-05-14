import { useState, useEffect } from "react";
import AppLayout from "../../ui/AppLayout";
import { db } from "../../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import ModalComp from "../../components/fileUpload1/pages/ModalComp";
import NavBar from "../../components/fileUpload1/NavBar";
import Spinner from "../../components/fileUpload1/Spinner";

function Menu() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "users", id));
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AppLayout>
      <NavBar />
      <Container>
        <Grid columns={3} stackable>
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
                      // borderRadius: "60%",
                    }}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Card.Header style={{ marginTop: "10px" }}>
                      <bold>{item.Name}</bold>
                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{ marginLeft: "10px", textAlign: "right" }}
                        >
                          {item.Price}
                        </span>
                      </div>
                    </Card.Header>
                  </div>
                </Card.Content>
                <Card.Content extra>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      color="green"
                      onClick={() => navigate(`/update/${item.id}`)}
                    >
                      Update
                    </Button>
                    <Button color="purple" onClick={() => handleModal(item)}>
                      View
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
        {open && (
          <ModalComp
            open={open}
            setOpen={setOpen}
            handleDelete={handleDelete}
            {...user}
          />
        )}
      </Container>
      {loading && <Spinner />}
    </AppLayout>
  );
}

export default Menu;
