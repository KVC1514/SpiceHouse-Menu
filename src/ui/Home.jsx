import React from "react";
import "tailwindcss/tailwind.css";
import ServiceSelection from "../components/ServiceSelection";
import ImageSlider from "../features/menu/media/ImageSlider";
import "../utils/index.css";
import AppLayout from "./AppLayout";
import "../../public/styles/HomeStyles.css";

import Background from "../../public/images/background.jpg";

function Home() {
  // const containerStyles = {
  //   width: "300px", // Adjust the width as needed
  //   height: "200px", // Adjust the height as needed
  // };
  return (
    <AppLayout>
      <div className="home" style={{ backgroundImage: `url(${Background})` }}>
        <section className="pb-[150px] py-6 flex flex-col items-center justify-center bgcol, servicesContainer">
          {/* <div className="box mt-4" style={containerStyles}>
            <ImageSlider />
          </div> */}

          <div className="box mt-24">
            <ServiceSelection />
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default Home;
