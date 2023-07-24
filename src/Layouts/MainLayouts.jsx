import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import AdmissionProvider from "../context/AdmissionProvider";
import Footer from "../components/shared/Footer/Footer";
import SearchDataProvider from "../context/SearchDataProvider";

const MainLayouts = () => {
  return (
    <SearchDataProvider>
      <AdmissionProvider>
        <div>
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </AdmissionProvider>
    </SearchDataProvider>
  );
};

export default MainLayouts;
