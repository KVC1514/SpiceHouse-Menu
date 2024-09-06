// import Biryani from "../../public/images/Biryani.jpg";
// import chips from "../../public/images/chips.jpg";
// import Cp from "../../public/images/cp.jpg";
// import khanaset from "../../public/images/KhanaSet.jpg";
// import khanaset2 from "../../public/images/khanaset2.jpg";
// import momoMain from "../../public/images/momoMain.jpg";
// import ob2 from "../../public/images/ob2.jpg";
// import sekua from "../../public/images/sekua.jpg";
// import Tmix from "../../public/images/Tmix.jpg";
// import vp from "../../public/images/vp.jpg";

// export const MenuList = [
//   {
//     name: "Biryani",
//     description:
//       "Biryani is a popular and flavorful South Asian dish made with aromatic basmati rice, meat (such as chicken, mutton, or beef), and a blend of aromatic spices. It is often cooked with yogurt, fried onions, and tomatoes, which contribute to its rich and distinctive taste. The dish is layered and cooked either by dum pukht (slow-cooking over a low flame) or by boiling the rice separately and then layering it with the cooked meat and spices. Biryani can be found in various regional variations, each with its own unique flavor profile and preparation method. It is a well-loved and celebrated dish in many South Asian countries, including India, Pakistan, Bangladesh, and others.",
//     image: Biryani,
//   },
//   {
//     name: "Chips",
//     description:
//       "These are thick-cut or chunky slices of potatoes that are usually deep-fried until golden and crispy",
//     image: chips,
//   },
//   {
//     name: "Chicken Pokora",
//     description:
//       "Chicken pakora is a popular South Asian snack or appetizer where bite-sized pieces of chicken are coated in a spiced chickpea flour (gram flour or besan) batter and then deep-fried until crispy. The batter typically includes various spices like cumin, coriander, turmeric, and chili powder, which give the chicken pakoras their distinctive flavor.iryani is a popular and flavorful South Asian dish made with aromatic basmati rice, meat (such as chicken, mutton, or beef), and a blend of aromatic spices. It is often cooked with yogurt, fried onions, and tomatoes, which contribute to its rich and distinctive taste. The dish is layered and cooked either by dum pukht (slow-cooking over a low flame) or by boiling the rice separately and then layering it with the cooked meat and spices. Biryani can be found in various regional variations, each with its own unique flavor profile and preparation method. It is a well-loved and celebrated dish in many South Asian countries, including India, Pakistan, Bangladesh, and others.",
//     image: Cp,
//   },
//   {
//     name: "Khanaset",
//     description:
//       " This is a staple dish in Nepal, consisting of lentil soup (dal) served with rice (bhat). It is often accompanied by various side dishes such as vegetables, pickles, and sometimes meat or fish. popular and flavorful South Asian dish made with aromatic basmati rice, meat (such as chicken, mutton, or beef), and a blend of aromatic spices. It is often cooked with yogurt, fried onions, and tomatoes, which contribute to its rich and distinctive taste. The dish is layered and cooked either by dum pukht (slow-cooking over a low flame) or by boiling the rice separately and then layering it with the cooked meat and spices. Biryani can be found in various regional variations, each with its own unique flavor profile and preparation method. It is a well-loved and celebrated dish in many South Asian countries, including India, Pakistan, Bangladesh, and others.",
//     image: khanaset,
//   },
//   {
//     name: "Khanaset veg",
//     description:
//       "This is a staple dish in Nepal, consisting of lentil soup (dal) served with rice (bhat). It is often accompanied by various side dishes such as vegetables, pickles, and sometimes meat or fish. is a popular and flavorful South Asian dish made with aromatic basmati rice, meat (such as chicken, mutton, or beef), and a blend of aromatic spices. It is often cooked with yogurt, fried onions, and tomatoes, which contribute to its rich and distinctive taste. The dish is layered and cooked either by dum pukht (slow-cooking over a low flame) or by boiling the rice separately and then layering it with the cooked meat and spices. Biryani can be found in various regional variations, each with its own unique flavor profile and preparation method. It is a well-loved and celebrated dish in many South Asian countries, including India, Pakistan, Bangladesh, and others.",
//     image: khanaset2,
//   },
//   {
//     name: "MoMo Starter",
//     description:
//       "These are dumplings filled with meat (commonly buffalo or chicken) or vegetables. Momos are typically steamed or fried and served with a dipping sauce. ",
//     image: momoMain,
//   },
//   {
//     name: "Onion Bhaji Starter",
//     description:
//       "Onion bhaji is a popular and delicious Indian snack made from thinly sliced onions mixed with a spiced gram flour (besan) batter and deep-fried until golden brown and crispy. It's a common street food and appetizer in Indian cuisine. The term bhaji generally refers to deep-fried fritters. is a popular and flavorful South Asian dish made with aromatic basmati rice, meat (such as chicken, mutton, or beef), and a blend of aromatic spices. It is often cooked with yogurt, fried onions, and tomatoes, which contribute to its rich and distinctive taste. The dish is layered and cooked either by dum pukht (slow-cooking over a low flame) or by boiling the rice separately and then layering it with the cooked meat and spices. Biryani can be found in various regional variations, each with its own unique flavor profile and preparation method. It is a well-loved and celebrated dish in many South Asian countries, including India, Pakistan, Bangladesh, and others.",
//     image: ob2,
//   },
//   {
//     name: "Sekua",
//     description:
//       "Sekuwa is a popular grilled meat dish in Nepali cuisine. It's commonly made with marinated meat, skewered, and then grilled or barbecued for a delicious smoky flavor. While it's often associated with street food, you can also find it in restaurants and homes across Nepal.",
//     image: sekua,
//   },
//   {
//     name: "Tandoori mix",
//     description:
//       "Tandoori mix usually refers to a blend of spices used to marinate food, especially meats, in preparation for Tandoori-style cooking. Tandoori cuisine is associated with the use of a tandoor, which is a traditional clay oven. The mix typically imparts a vibrant color and robust flavor to the dishes. Here's a basic recipe for a Tandoori spice mix:",
//     image: Tmix,
//   },
//   {
//     name: "Vegitable pokora",
//     description:
//       "Vegetable pakora, also known as vegetable fritters, is a popular and delicious Indian snack made by deep-frying mixed vegetables coated in a spiced chickpea flour (besan) batter. It's a versatile dish, and the choice of vegetables can vary based on personal preferences and availability. Here's a basic recipe for making vegetable pakora:",
//     image: vp,
//   },
// ];

import { useEffect, useState } from "react";
import { db } from "../main";
import { Button, Card, Grid, Container, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { border, borderRadius, width } from "@mui/system";

export const MenuList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for handling errors
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
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
        console.error("Error fetching data:", error); // Handle error
        setError(error); // Set error state
        setLoading(false);
      }
    );

    // Cleanup function for unsubscribing from snapshot listener
    return () => unsub();
  }, []);

  return (
    <Container>
      {loading ? (
        <p>Loading...</p> // Display loading message while data is being fetched
      ) : error ? (
        <p>Error: {error.message}</p> // Display error message if there's an error
      ) : (
        <Card.Group>
          <Grid columns={3} stackable>
            {users.map((item) => (
              <Grid.Column key={item.id}>
                <Card>
                  <Card.Content>
                    <Image
                      src={item.img}
                      size="medium"
                      style={{
                        height: "90px",
                        width: "150px",
                        borderRadius: "50%",
                      }}
                    />
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Card.Group>
      )}
    </Container>
  );
};
