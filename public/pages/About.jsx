import React from "react";
import AppLayout from "../../src/ui/AppLayout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <>
      <AppLayout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 1,

            "& h4": {
              fontweight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">
            <h1>Welcom To SpiceHouse</h1>
          </Typography>
          <p2 className="text-l text-black-300 font-Lobster-Regular font-cursive text-center my-10 ">
            Welcome to our Nepalese and Indian restaurant, where culinary
            excellence meets cultural authenticity. In our Nepalese section,
            delight in the flavors of the Himalayas with our carefully crafted
            menu that showcases traditional Nepalese dishes. From the iconic
            momos to the soul-satisfying dal bhat, each dish is a tribute to
            Nepal's rich culinary heritage. Step into the heart of India as you
            explore our Indian restaurant. Our menu features a diverse array of
            dishes that capture the essence of Indian cuisine, from the fiery
            spices of the North to the aromatic flavors of the South. Indulge in
            classics like tikka masala, biryani, and more, prepared with a touch
            of expertise and a dash of tradition. Whether you're a connoisseur
            of Nepalese and Indian cuisine or a first-time adventurer, our
            restaurant promises a gastronomic journey that transports you to the
            streets and kitchens of Nepal and India. Immerse yourself in the
            vibrant colors, aromatic spices, and warm hospitality that define
            our culinary haven.
          </p2>
        </Box>
      </AppLayout>
    </>
  );
}

export default About;
