import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import CollegeInfo from "../Pages/CollegeInfo/CollegeInfo";
import AllColleges from "../Pages/AllColleges/AllColleges";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register.jsx/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <AllColleges />,
      },
      {
        path: "/colleges/:id",
        element: (
          <PrivateRoute>
            <CollegeInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
