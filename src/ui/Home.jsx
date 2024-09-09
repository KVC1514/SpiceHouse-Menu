import React from "react";
import "tailwindcss/tailwind.css";
// import ServiceSelection from "../components/ServiceSelection";
// import ImageSlider from "../features/menu/media/ImageSlider";
import "../utils/index.css";
import AppLayout from "./AppLayout";
import "../../public/styles/HomeStyles.css";
import flashinpan from "../../public/images/flashinpan.mp4";

import Video from "../video/Video";

function Home() {
  return (
    <AppLayout>
      <div className="home">
        <div className="video">
          <Video />
        </div>
        <section className="pb-[150px] py-6 flex flex-col items-center justify-center bgcol servicesContainer">
          <div className="w-full flex flex-col items-center">
            <div className="mb-4 mt-30 relative">
              <video
                autoPlay
                loop
                muted
                className="w-[1208px] h-[400px]"
                style={{ left: "20px", top: "50px" }} // you can also control this with Tailwind
              >
                <source src={flashinpan} type="video/mp4" />
              </video>
            </div>
            {/* <div className="mt-auto">
              <ServiceSelection />
            </div> */}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default Home;
