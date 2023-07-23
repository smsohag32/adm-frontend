import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import CollegeInfo from "../Pages/CollegeInfo/CollegeInfo";
import AllColleges from "../Pages/AllColleges/AllColleges";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register.jsx/Register";
import Account from "../Pages/Account/Account";
import Admission from "../Pages/Admission/Admission";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import AdmissionFrom from "../Pages/AdmissionFrom/AdmissionFrom";
import MyCollege from "../Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
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
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        ),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "/admission/form/:id",
        element: (
          <PrivateRoute>
            <AdmissionFrom />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
