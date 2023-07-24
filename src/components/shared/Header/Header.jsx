import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useContext, useState } from "react";
import axios from "axios";
import { SearchContext } from "../../../context/SearchDataProvider";

const Header = () => {
  const { setSearchData, setLoading } = useContext(SearchContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut();
  };

  // handle to college search
  const handleSearch = () => {
    if (!text) {
      return;
    }
    if (!(location.pathname === "search")) {
      navigate("/search");
    }
    if (text.length > 0) {
      setLoading(true);
      axios
        .get(`https://adm-backend.vercel.app/search/${text}`)
        .then((data) => {
          setSearchData(data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  // nav item
  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "primary-link"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "primary-link"
          }
          to="/colleges"
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "primary-link"
          }
          to="/admission"
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "primary-link"
          }
          to="/my-college"
        >
          My College
        </NavLink>
      </li>
      {user ? (
        <span className="dropdown hidden md:block dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="user" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 hidden md:block rounded-box w-52"
          >
            <li>
              <Link to="/account" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </span>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "primary-link"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="fixed z-20 top-0 left-0 right-0 h-16 flex items-center drop-shadow-lg">
      <div className="navbar bg-base-100 adm-container">
        <div className="navbar-start w-auto mr-6">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="text-primary font-bold text-xl md:text-2xl">
            ADM
          </Link>
        </div>
        <div className="navbar-center max-w-lg w-[50%] md:w-auto">
          <div className="w-full flex items-center">
            <div className=" flex items-center relative gap-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                onChange={(e) => setText(e.target.value)}
                id="default-search"
                className="block w-full py-2 px-4 pl-10 text-sm text-gray-900 rounded-none border-gray-100 border outline-none bg-gray-50"
                placeholder="Search collage..."
                required
              />
              <button
                type="button"
                onClick={handleSearch}
                className="btn btn-sm btn-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* md hidden */}
        {user && (
          <span className="dropdown ms-2 md:hidden dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/account" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </span>
        )}
        {!user && (
          <li className="md:hidden items-end text-end ms-5">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "primary-link"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
        <div className="navbar-end hidden w-full lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
