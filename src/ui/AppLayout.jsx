import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
