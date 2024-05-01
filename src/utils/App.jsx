import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Menu from "../features/menu/Menu";
import Home from "../ui/Home";
import Error from "../ui/Error";
import Calculator from "../features/menu/Calculator";
import Weather from "../features/menu/Weather";
import About from "../../public/pages/About";
import Contact from "../../public/pages/Contact";
import FileUpload from "../../public/pages/FileUpload";
// import Cart from "../cart/Cart";

// import AddEditUser from "../components/fileUpload1/pages/AddEditUser";
// import Footer from "../../public/pages/Footer";

const router = createBrowserRouter([
  {
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      // Fix bug
      {
        path: "/add",
        element: <FileUpload />,
      },
      {
        path: "/update/:id",
        element: <FileUpload />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },

      // {
      //   path: "/footer",
      //   element: <Footer />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
