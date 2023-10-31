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
import { useLoginMutation } from "../../redux/api/usersApislice.js";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const [logoutApiCall] = useLogoutMutation();

  // const logoutHandler = async () => {
  //   try {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     navigate("/login");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between bg-black p-4 text-white w-[4%] hover:w-[15%] h-[100vh] fixed `}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineHome size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
            HOME
          </span>
        </Link>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShopping size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
            SHOP
          </span>
        </Link>
        <Link
          to="/cart"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineShoppingCart size={26} className="mt-[3rem] " />
          <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
            CART
          </span>
        </Link>
        <Link
          to="/favorite"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <FaHeart size={26} className="mt-[3rem] " />{" "}
          <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
            FAVORITE
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
            <span className="text-white">{userInfo.username}</span>
          ) : (
            <></>
          )}
        </button>
      </div>
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
