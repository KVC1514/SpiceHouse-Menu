// //

// import { useState, useEffect } from "react";
// import AppLayout from "../../ui/AppLayout";
// import { db } from "../../main";
// import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";
// import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
// import ModalComp from "../../components/fileUpload1/pages/ModalComp";
// import NavBar from "../../components/fileUpload1/NavBar";
// import Spinner from "../../components/fileUpload1/Spinner";
// import MenuSideNav from "../../components/fileUpload1/pages/MenuSideNav";
// import Category from "../../components/category/Category";


// function Menu() {
//   const [users, setUsers] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("Popular Dishes");
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsub = onSnapshot(
//       collection(db, "users"),
//       (snapshot) => {
//         let list = [];
//         snapshot.docs.forEach((doc) => {
//           list.push({ id: doc.id, ...doc.data() });
//         });
//         setUsers(list);
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     setFilteredUsers(
//       users.filter((user) => user.category === selectedCategory)
//     );
//   }, [users, selectedCategory]);

//   const handleModal = (item) => {
//     setOpen(true);
//     setUser(item);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this?")) {
//       try {
//         setOpen(false);
//         await deleteDoc(doc(db, "users", id));
//         setUsers(users.filter((user) => user.id !== id));
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <AppLayout>
//       <NavBar />
//       <Category /> 
//         <Container style={{ minHeight: "500px" }}>
//           <Grid columns={3} stackable container spacing={3} sx={{ mb: 5 }}>
//             {filteredUsers.map((item) => (
//               <Grid.Column key={item.id}>
//                 <Card>
//                   <Card.Content>
//                     <Image
//                       src={item.img}
//                       size="medium"
//                       style={{ height: "175px", width: "300px" }}
//                     />
//                     <div style={{ marginTop: "10px" }}>
//                       <Card.Header style={{ marginTop: "10px" }}>
//                         {item.Name}
//                       </Card.Header>
//                       <div>
//                         <p>{item.Description}</p>
//                       </div>
//                       <div style={{ textAlign: "right" }}>
//                         <span
//                           style={{ marginLeft: "10px", textAlign: "right" }}
//                         >
//                           {item.Price}
//                         </span>
//                       </div>
//                     </div>
//                   </Card.Content>
//                   <Card.Content extra>
//                     <div style={{ textAlign: "center" }}>
//                       <Button
//                         color="green"
//                         onClick={() => navigate(`/update/${item.id}`)}
//                       >
//                         Update
//                       </Button>
//                       <Button color="purple" onClick={() => handleModal(item)}>
//                         View
//                       </Button>
//                     </div>
//                   </Card.Content>
//                 </Card>
//               </Grid.Column>
//             ))}
//           </Grid>
//           {open && (
//             <ModalComp
//               open={open}
//               setOpen={setOpen}
//               handleDelete={handleDelete}
//               {...user}
//             />
//           )}
//         </Container>
//       {/* </div> */}
//     </AppLayout>
//   );
// }

// export default Menu;

import { useState, useEffect } from "react";
import AppLayout from "../../ui/AppLayout";
import { db } from "../../main";
import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import ModalComp from "../../components/fileUpload1/pages/ModalComp";
import NavBar from "../../components/fileUpload1/NavBar";
import Spinner from "../../components/fileUpload1/Spinner";
import Category from "../../components/category/Category";

function Menu() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Popular Dishes");
  const [filteredUsers, setFilteredUsers] = useState([]);
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

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.category === selectedCategory)
    );
  }, [users, selectedCategory]);

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

  if (loading) {
    return <Spinner />;
  }

  return (
    <AppLayout>
      <NavBar />
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: "0 0 230px", overflowY: "auto", borderRight: "3px solid #ddd" }}>
          <Category />
        </div>
        <Container style={{ flex: "1", padding: "20px", overflowY: "auto" }}>
          <Grid columns={3} stackable container spacing={3} sx={{ mb: 5 }}>
            {filteredUsers.map((item) => (
              <Grid.Column key={item.id}>
                <Card>
                  <Card.Content>
                    <Image
                      src={item.img}
                      size="medium"
                      style={{ height: "175px", width: "300px" }}
                    />
                    <div style={{ marginTop: "10px" }}>
                      <Card.Header style={{ marginTop: "10px" }}>
                        {item.Name}
                      </Card.Header>
                      <div>
                        <p>{item.Description}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ marginLeft: "10px", textAlign: "right" }}>
                          {item.Price}
                        </span>
                      </div>
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
      </div>
    </AppLayout>
  );
}

export default Menu;

