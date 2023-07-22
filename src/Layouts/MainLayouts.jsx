import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
