import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { FaHeart } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApislice.js";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    document.addEventListener("onclick", () => setDropdownOpen(!dropdownOpen));
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between bg-black p-4 text-[#F6F6F6] w-[10rem] hover:w-[15%] h-[100vh] fixed `}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineHome size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium  mt-[3rem] ml-4">
            Home
          </span>
        </Link>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShopping size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
            Shop
          </span>
        </Link>
        <Link
          to="/cart"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineShoppingCart size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
            Cart
          </span>
        </Link>
        <Link
          to="/favorite"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <FaHeart size={26} className="mt-[3rem]" />{" "}
          <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
            Favorite
          </span>
        </Link>
      </div>
      {/* <-----------Login User Account details----------> */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-base font-medium text-[#F6F6F6] capitalize">
              {userInfo.username}
            </span>
          ) : (
            <></>
          )}
          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={`absolute right-[-40px]  mt-2 mr-14 space-y-2 bg-gray-200 text-gray-600 ${
              !userInfo.isAdmin ? "-top-20" : "-top-80"
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/productlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>

      {!userInfo && (
        <ul>
          <li>
            <Link
              to="/login"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <AiOutlineLogin size={26} className="mt-[3rem] " />{" "}
              <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
                Login
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <AiOutlineUserAdd size={26} className="mt-[3rem] " />{" "}
              <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
                Register
              </span>
            </Link>
          </li>
        </ul>
      )}
    </div>

    /* <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between bg-black p-4 text-white w-[4%] hover:w-[15%] h-[100vh] fixed `}
    >
      LuxeHaven
    </div> */
  );
};
export default Navigation;
