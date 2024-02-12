import "tailwindcss/tailwind.css";
import ServiceSelection from "../components/ServiceSelection";

function Home() {
  return (
    <div>
      <h2 className="text-4xl text-white-300 font-semibold text-center header">
        Welcome To Spice House
      </h2>

      <ServiceSelection />
      {/* <VideoPlayer width={960} height={540} /> */}
    </div>
  );
}

export default Home;
