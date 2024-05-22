import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "../../public/pages/Footer";

function AppLayout({ children }) {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <div className="AppLayout">
        {isLoading && <Loader />}
        <Header />
        <div className="AppContent ">{children}</div>

        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
