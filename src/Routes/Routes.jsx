import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import CollegeInfo from "../Pages/CollegeInfo/CollegeInfo";
import AllColleges from "../Pages/AllColleges/AllColleges";

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
        element: <CollegeInfo />,
      },
    ],
  },
]);

export default router;
