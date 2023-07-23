import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="adm-container mx-auto flex items-center justify-between">
        <div>
          <p>&copy; 2023 ADM Website. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms of Service</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
