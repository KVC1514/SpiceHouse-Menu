import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "../../public/pages/Footer";

function AppLayout({ children }) {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <div className="layout">
        {isLoading && <Loader />}
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
