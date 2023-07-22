import { Link } from "react-router-dom";

const PageTitle = ({ currentPageTitle }) => {
  return (
    <div className="bg-blue-100 flex items-center justify-center pt-16 w-full h-44">
      <div className="adm-container text-black flex items-center justify-center">
        <div className="text-xl font-bold flex gap-1">
          <Link to="/" className="link-primary">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-600">{currentPageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
