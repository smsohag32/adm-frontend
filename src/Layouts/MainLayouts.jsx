import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import AdmissionProvider from "../context/AdmissionProvider";
import Footer from "../components/shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <AdmissionProvider>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </AdmissionProvider>
  );
};

export default MainLayouts;
