import { createBrowserRouter } from "react-router-dom";
import { ScreenDefault } from "../screens";
import { ScreenHome } from "../screens/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ScreenDefault />,
    children: [
      {
        path: "/",
        element: <ScreenHome />,
      },
    ],
  },
]);

export default routes;
