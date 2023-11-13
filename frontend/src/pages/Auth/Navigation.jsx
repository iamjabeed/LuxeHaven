// import { useState } from "react";
// import {
//   AiOutlineHome,
//   AiOutlineShopping,
//   AiOutlineLogin,
//   AiOutlineUserAdd,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";

// import { Link, useNavigate } from "react-router-dom";
// import "./Navigation.css";
// import { FaHeart } from "react-icons/fa";

// import { useSelector, useDispatch } from "react-redux";
// import { useLogoutMutation } from "../../redux/api/usersApislice.js";
// import { logout } from "../../redux/features/auth/authSlice";

// import { toast } from "react-toastify";

// import Logo from "../../assets/logo.png";
// const Navigation = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   // console.log(userInfo);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//     // console.log(dropdownOpen);
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const closeSidebar = () => {
//     setShowSidebar(false);
//   };

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       setDropdownOpen(false);
//       toast.success("User successfully Logged out");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       style={{ zIndex: 999 }}
//       className={`${
//         showSidebar ? "hidden" : "flex"
//       } hidden md:flex xl:flex lg:flex flex-col justify-between bg-black p-4 text-[#F6F6F6] w-[10rem] hover:w-[15%] h-[100vh] fixed `}
//       id="navigation-container"
//     >
//       <div className="flex flex-col justify-center space-y-4">
//         {/* <Link
//           to="/"
//           className="flex items-center transition-transform transform hover:translate-x-2"
//         >
//           <img src={Logo} alt="Logo" />
//         </Link> */}
//         <Link
//           to="/"
//           className="flex items-center transition-transform transform hover:translate-x-2"
//         >
//           <AiOutlineHome size={26} className="mt-[3rem] " />
//           <span className="hidden nav-item-name text-base font-medium  mt-[3rem] ml-4">
//             Home
//           </span>
//         </Link>
//         <Link
//           to="/shop"
//           className="flex items-center transition-transform transform hover:translate-x-2"
//         >
//           <AiOutlineShopping size={26} className="mt-[3rem] " />
//           <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
//             Shop
//           </span>
//         </Link>
//         <Link
//           to="/cart"
//           className="flex items-center transition-transform transform hover:translate-x-2 "
//         >
//           <AiOutlineShoppingCart size={26} className="mt-[3rem] " />
//           <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
//             Cart
//           </span>
//         </Link>
//         <Link
//           to="/favorite"
//           className="flex items-center transition-transform transform hover:translate-x-2"
//         >
//           <FaHeart size={26} className="mt-[3rem]" />{" "}
//           <span className="hidden nav-item-name text-base font-medium text-[#F6F6F6] mt-[3rem] ml-4">
//             Favorite
//           </span>
//         </Link>
//       </div>
//       {/* <-----------Login User Account details----------> */}
//       <div className="relative mb-4">
//         <button
//           onClick={toggleDropdown}
//           className="flex items-center text-gray-800 focus:outline-none"
//         >
//           {userInfo ? (
//             <span className="text-base font-medium text-[#F6F6F6] capitalize">
//               {userInfo.username}
//             </span>
//           ) : (
//             <></>
//           )}
//           {userInfo && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-5 w-5 ml-1`}
//               style={{
//                 transform: dropdownOpen ? "rotate(360deg)" : "rotate(0deg)",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//               />
//             </svg>
//           )}
//         </button>

//         {dropdownOpen && userInfo && (
//           <ul
//             className={`absolute right-[-10px] mt-2  space-y-2 bg-[#db1143f3] text-[#ffffff] rounded-md ${
//               !userInfo.isAdmin ? "-top-20" : "-top-80"
//             } `}
//             onClick={() => setDropdownOpen(false)}
//           >
//             {userInfo.isAdmin && (
//               <>
//                 <li>
//                   <Link
//                     to="/admin/dashboard"
//                     className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/admin/productlist"
//                     className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//                   >
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/admin/categorylist"
//                     className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//                   >
//                     Category
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/admin/orderlist"
//                     className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//                   >
//                     Orders
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/admin/userlist"
//                     className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//                   >
//                     Users
//                   </Link>
//                 </li>
//               </>
//             )}

//             <li>
//               <Link
//                 to="/profile"
//                 className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
//               >
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={logoutHandler}
//                 className=" w-full text-left block px-4 py-2 rounded-md hover:bg-[#FF2E63]"
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         )}
//       </div>

//       {!userInfo && (
//         <ul>
//           <li>
//             <Link
//               to="/login"
//               className="flex items-center transition-transform transform hover:translate-x-2"
//             >
//               <AiOutlineLogin size={26} className="mt-[3rem] " />{" "}
//               <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
//                 Login
//               </span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/register"
//               className="flex items-center transition-transform transform hover:translate-x-2"
//             >
//               <AiOutlineUserAdd size={26} className="mt-[3rem] " />{" "}
//               <span className="hidden nav-item-name text-base font-medium text-gray-400 mt-[3rem] ml-4">
//                 Register
//               </span>
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>

//   );
// };
// export default Navigation;

// Top navbar styling:
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
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApislice.js";
import { logout } from "../../redux/features/auth/authSlice";

import ContentWrapper from "../../components/ContentWrapper.jsx";

import { toast } from "react-toastify";

import Logo from "../../assets/logo.png";
import AdminMenu from "../Admin/AdminMenu.jsx";

import FavoritesCount from "../Products/FavoritesCount.jsx";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  //Mobile devices
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    // console.log(dropdownOpen);
  };

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  // const closeSidebar = () => {
  //   setShowSidebar(false);
  // };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      setDropdownOpen(false);
      toast.success("User successfully Logged out");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-black p-4 text-[#F6F6F6] text-center z-10 transition-all ease-in duration-300 flex justify-between items-center">
      <ContentWrapper>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <button
                className={`p-2 rounded-lg flex md:hidden`}
                onClick={openMobileMenu}
              >
                {mobileMenu ? (
                  <AiOutlineClose color="white" size={26} />
                ) : (
                  <>
                    <HiOutlineMenuAlt1 color="white" size={26} />
                  </>
                )}
              </button>

              <Link to="/" className=" md:flex items-center">
                <img src={Logo} className="w-[140px]" />
              </Link>
            </div>
            <div className="hidden md:flex xl:flex lg:flex justify-center gap-8 items-center">
              <Link to="/" className="flex items-center">
                <AiOutlineHome size={26} className="mt-3" />
                {/* <span className="text-base font-medium mt-3 ml-2">Home</span> */}
              </Link>
              <Link to="/shop" className="flex items-center">
                <AiOutlineShopping size={26} className="mt-3" />
                {/* <span className="text-base font-medium mt-3 ml-2 text-[#F6F6F6]">
                  Shop
                </span> */}
              </Link>
              <Link to="/cart" className="flex items-center">
                <AiOutlineShoppingCart size={26} className="mt-3" />
                {/* <span className="text-base font-medium mt-3 ml-2 text-[#F6F6F6]">
                  Cart
                </span> */}
              </Link>
              <Link to="/favorite" className="flex items-center">
                <MdOutlineFavoriteBorder size={26} className="mt-3" />
                {/* <span className="text-base font-medium mt-3 ml-2 text-[#F6F6F6]">
                  Favorite
                </span> */}
                <FavoritesCount />
              </Link>
            </div>

            <div
              className={`${
                userInfo?.isAdmin ? "flex gap-2 md:gap-3" : ""
              } "relative" `}
            >
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
                    className={`h-5 w-5 ml-1 ${
                      dropdownOpen
                        ? "transform rotate-0 transition-transform"
                        : "transform rotate-360 transition-transform"
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

              <div onClick={() => setDropdownOpen(false)}>
                {userInfo?.isAdmin && (
                  <AdminMenu
                    setDropdownOpen={setDropdownOpen}
                    dropdownOpen={dropdownOpen}
                  />
                )}
              </div>

              {dropdownOpen && userInfo && (
                <ul
                  className={`absolute bg-[#db1143f3] text-[#ffffff] rounded-md top-[80px] border`}
                  onClick={() => setDropdownOpen(false)}
                >
                  {userInfo.isAdmin && (
                    <>
                      <li>
                        <Link
                          to="/admin/dashboard"
                          className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/productlist"
                          className="block px-4 py-2 rounded-md hover:bg-[#FF2E63] border-b-2"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/categorylist"
                          className="block px-4 py-2 rounded-md hover-bg-[#FF2E63] border-b-2"
                        >
                          Category
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/orderlist"
                          className="block px-4 py-2 rounded-md hover-bg-[#FF2E63] border-b-2"
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/userlist"
                          className="block px-4 py-2 rounded-md hover-bg-[#FF2E63] border-b-2"
                        >
                          Users
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 rounded-md hover-bg-[#FF2E63] border-b-2"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left block px-4 py-2 rounded-md hover-bg-[#FF2E63]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {!userInfo && (
              <ul className="flex justify-between items-center gap-4">
                <li>
                  <Link to="/login" className="flex items-center">
                    <AiOutlineLogin size={26} className="" />
                    {/* <span className="text-base font-medium text-gray-400  ml-4">
                      Login
                    </span> */}
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="flex items-center">
                    <AiOutlineUserAdd size={26} className="" />
                    {/* <span className="text-base font-medium text-gray-400  ml-4">
                      Register
                    </span> */}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu  */}
        {mobileMenu && (
          <div
            className={`${
              mobileMenu ? "mobile  border-t bg-black pb-5" : "desktop"
            }  flex flex-col pl-7 pt-4 gap-6`}
            onClick={() => setMobileMenu(false)}
          >
            <Link
              to="/"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <AiOutlineHome className="mr-2" size={26} />
              <span className="">Home</span>{" "}
            </Link>

            <Link
              to="/shop"
              className="flex items-center transition-transform transform hover:translate-x-2"
            >
              <AiOutlineShopping className="mr-2" size={26} />
              <span className="">Shop</span>{" "}
            </Link>

            <Link to="/cart" className="flex relative">
              <div className="flex items-center transition-transform transform hover:translate-x-2">
                <AiOutlineShoppingCart className=" mr-2" size={26} />
                <span className="">Cart</span>{" "}
              </div>

              {/* <div className="absolute top-9">
                {cartItems.length > 0 && (
                  <span>
                    <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </span>
                  </span>
                )}
              </div> */}
            </Link>

            <Link to="/favorite" className="flex relative">
              <div className="flex justify-center items-center transition-transform transform hover:translate-x-2">
                <MdOutlineFavoriteBorder className=" mr-2" size={20} />
                <span className="">Favorites</span>
                {/* <FavoritesCount ml={10} mb={5} /> */}
              </div>
            </Link>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};
export default Navigation;
