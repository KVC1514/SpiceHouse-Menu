// import AppLayout from "../ui/AppLayout";
// import { useState, useEffect } from "react";
// import { db } from "../main";
// import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
// import { collection, onSnapshot } from "firebase/firestore";
// import ModalCompCustomer from "./ModalCompCustomer";
// import Spinner from "../components/fileUpload1/Spinner";
// import "semantic-ui-css/semantic.min.css";
// import Category from "../components/category/Category";

// function Menu() {
//   const [users, setUsers] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);

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

//   const handleModal = (item) => {
//     setOpen(true);
//     setUser(item);
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <AppLayout>
//       <header>{/* <Search /> */}</header>
//       <div
//         style={{ display: "flex", flexDirection: "column", height: "100vh" }}
//       >
//         <div style={{ display: "flex", flex: 1, overflowY: "auto" }}>
//           <div
//             style={{
//               flex: "0 0 230px",
//               overflowY: "auto",
//               borderRight: "3px solid #ddd",
//               paddingLeft: "20px",
//               marginTop: "20px",
//             }}
//           >
//             <Category />
//           </div>
//           <Container
//             className="mt-10 md:w-1/3 sm:w-1/2 w-full"
//             style={{ flex: 1, minHeight: "500px" }}
//           >
//             <Grid columns={3} stackable container spacing={3} sx={{ mb: 5 }}>
//               {users.map((item) => (
//                 <Grid.Column key={item.id}>
//                   <Card>
//                     <Card.Content>
//                       <Image
//                         src={item.img}
//                         size="medium"
//                         style={{
//                           height: "175px",
//                           width: "300px",
//                         }}
//                       />
//                       <div style={{ marginTop: "10px" }}>
//                         <Card.Header style={{ marginTop: "10px" }}>
//                           {item.Name}
//                         </Card.Header>
//                         <div>
//                           <p>{item.Description}</p>
//                         </div>
//                         <div style={{ textAlign: "right" }}>
//                           <span
//                             style={{ marginLeft: "10px", textAlign: "right" }}
//                           >
//                             {item.Price}
//                           </span>
//                         </div>
//                       </div>
//                     </Card.Content>
//                     <Card.Content extra>
//                       <div style={{ textAlign: "center" }}>
//                         <Button
//                           color="purple"
//                           onClick={() => handleModal(item)}
//                         >
//                           View
//                         </Button>
//                       </div>
//                     </Card.Content>
//                   </Card>
//                 </Grid.Column>
//               ))}
//             </Grid>
//           </Container>
//         </div>
//         <footer style={{ flexShrink: 0 }}>{/* Footer content here */}</footer>
//       </div>
//       {open && <ModalCompCustomer open={open} setOpen={setOpen} {...user} />}
//     </AppLayout>
// //   );
// // }

// // export default Menu;

// import React, { useState, useEffect } from "react";
// import AppLayout from "../ui/AppLayout";
// import { db } from "../main";
// import { Card, Grid, Container, Image, Button } from "semantic-ui-react";
// import { collection, onSnapshot } from "firebase/firestore";
// import ModalCompCustomer from "./ModalCompCustomer";
// import Spinner from "../components/fileUpload1/Spinner";
// import Category from "../components/category/Category";

// function Menu() {
//   const [users, setUsers] = useState([]); // All users from Firebase
//   const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   // Fetch data from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       collection(db, "users"),
//       (snapshot) => {
//         const list = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setUsers(list);
//         setFilteredUsers(list); // Initially, show all users
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsub();
//   }, []);

//   // Handle filtering by category
//   // const filterByCategory = (category) => {
//   //   if (category === "all") {
//   //     // If "all" is selected, show all users
//   //     setFilteredUsers(users);
//   //   } else {
//   //     // Filter users based on category
//   //     const filtered = users.filter((user) => user.category === category);
//   //     setFilteredUsers(filtered);
//   //   }
//   // };

//   const filterByCategory = (category) => {
//     if (category === "all") {
//       setFilteredUsers(users); // Show all users
//     } else {
//       const filtered = users.filter((user) => user.Category === category);
//       setFilteredUsers(filtered);
//     }
//   };

//   const handleModal = (item) => {
//     setOpen(true);
//     setUser(item);
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <AppLayout>
//       <div
//         style={{ display: "flex", flexDirection: "column", height: "100vh" }}
//       >
//         <div style={{ display: "flex", flex: 1, overflowY: "auto" }}>
//           {/* Pass the filterByCategory function to Category */}
//           <div
//             style={{
//               flex: "0 0 230px",
//               paddingLeft: "20px",
//               marginTop: "20px",
//             }}
//           >
//             <Category filterByCategory={filterByCategory} />
//           </div>

//           <Container style={{ flex: 1, minHeight: "500px" }}>
//             <Grid columns={3} stackable container spacing={3}>
//               {filteredUsers.map((item) => (
//                 <Grid.Column key={item.id}>
//                   <Card>
//                     <Card.Content>
//                       <Image
//                         src={item.img}
//                         size="medium"
//                         style={{ height: "175px", width: "300px" }}
//                       />
//                       <div style={{ marginTop: "10px" }}>
//                         <Card.Header>{item.Name}</Card.Header>
//                         <p>{item.Description}</p>
//                         <div style={{ textAlign: "right" }}>
//                           <span>{item.Price}</span>
//                         </div>
//                       </div>
//                     </Card.Content>
//                     <Card.Content extra>
//                       <div style={{ textAlign: "center" }}>
//                         <Button
//                           color="purple"
//                           onClick={() => handleModal(item)}
//                         >
//                           View
//                         </Button>
//                       </div>
//                     </Card.Content>
//                   </Card>
//                 </Grid.Column>
//               ))}
//             </Grid>
//           </Container>
//         </div>
//       </div>
//       {open && <ModalCompCustomer open={open} setOpen={setOpen} {...user} />}
//     </AppLayout>
//   );
// }

// export default Menu;


import React, { useState, useEffect } from "react";
import { db } from "../main"; // Firebase DB
import { collection, onSnapshot } from "firebase/firestore"; // Firestore methods
import { Card, Grid, Container, Image, Button } from "semantic-ui-react"; // UI components
import AppLayout from "../ui/AppLayout";
import Spinner from "../components/fileUpload1/Spinner";
import ModalCompCustomer from "./ModalCompCustomer";
import Category from "../components/category/Category"; // Import Category component

function Menu() {
  const [users, setUsers] = useState([]); // All users fetched from Firebase
  const [filteredUsers, setFilteredUsers] = useState([]); // Users filtered by category
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase Firestore
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

  // Handle filtering users by category
  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredUsers(users); // Show all users if "All" is selected
    } else {
      const filtered = users.filter((user) => user.Category === category);
      setFilteredUsers(filtered);
    }
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
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ display: "flex", flex: 1, overflowY: "auto" }}>
          {/* Pass filterByCategory to Category component */}
          <div style={{ flex: "0 0 230px", paddingLeft: "20px", marginTop: "20px" }}>
            <Category filterByCategory={filterByCategory} />
          </div>

          <Container style={{ flex: 1, minHeight: "500px" }}>
            <Grid columns={3} stackable container spacing={3}>
              {filteredUsers.map((item) => (
                <Grid.Column key={item.id}>
                  <Card>
                    <Card.Content>
                      <Image src={item.img} size="medium" style={{ height: "175px", width: "300px" }} />
                      <div style={{ marginTop: "10px" }}>
                        <Card.Header>{item.Name}</Card.Header>
                        <p>{item.Description}</p>
                        <div style={{ textAlign: "right" }}>
                          <span>{item.Price}</span>
                        </div>
                      </div>
                    </Card.Content>
                    <Card.Content extra>
                      <div style={{ textAlign: "center" }}>
                        <Button color="purple" onClick={() => handleModal(item)}>
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
      </div>
      {open && <ModalCompCustomer open={open} setOpen={setOpen} {...user} />}
    </AppLayout>
  );
}

export default Menu;
