import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Menu from "../features/menu/Menu";
import Home from "../ui/Home";
import Error from "../ui/Error";
import AppLayout from "../ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
