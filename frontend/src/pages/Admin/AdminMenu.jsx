import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import ContentWrapper from "../../components/ContentWrapper";

const AdminMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(onClick);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ContentWrapper>
        <div>
          <button className={`rounded-lg`} onClick={toggleMenu}>
            {/* {isMenuOpen ? (
              <AiOutlineClose color="white" size={26} />
            ) : (
              <>
                <HiOutlineMenuAlt1 color="white" size={26} />
              </>
            )} */}
            <RxDashboard size={26} />
          </button>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="relative">
          {isMenuOpen && (
            <section className="bg-[#000000] p-4 fixed top-[80px] right-6 2xl:right-[10%]">
              <ul className="list-none mt-2" onClick={toggleMenu}>
                <li>
                  <NavLink
                    className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/dashboard"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/categorylist"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    Create Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/productlist"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    Create Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/allproductslist"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/userlist"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
                    to="/admin/orderlist"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    Manage Orders
                  </NavLink>
                </li>
              </ul>
            </section>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AdminMenu;
