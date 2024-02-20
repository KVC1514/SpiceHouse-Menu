import React from "react";
import "tailwindcss/tailwind.css";
import ServiceCard from "./ServiceCard";
import "../utils/index.css";

// background-color bg-gradient-to-r from-red-700 to-orange-400

function ServiceSelection() {
  return (
    <section className=" pb-[300px] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-black">Our Services</h2>
          <p className="mt-4 text-xl text-black">Check out our Services</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          <ServiceCard
            title="Menu"
            text="Checkout our Menu"
            linkTo="/Menu"
            image={
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/chili-pepper.png"
                alt="chili-pepper"
              />
            }
          />
          <ServiceCard
            title="Calculator"
            text="Looking to split the bill? Use our calculator!!"
            linkTo="/Calculator"
            image={
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/calculator.png"
                alt="calculator"
              />
            }
          />
          <ServiceCard
            title="Weather"
            text="Any plans for later? Make sure you don't get wet."
            linkTo="/Weather"
            image={
              <img
                width="200"
                height="200"
                src="https://img.icons8.com/3d-fluency/94/umbrella.png"
                alt="umbrella"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceSelection;
