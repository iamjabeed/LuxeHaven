import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

import { BsArrowLeft } from "react-icons/bs";

import EmptyBag from "../assets/emptybag.png";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(cartItems);

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div className="bg-[#0F172A]">
      <div className="container flex wrap mx-auto min-h-screen w-full bg-[#0F172A]">
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center flex-col w-full h-full">
            <img src={EmptyBag} alt="EmptyBag" className="w-56" />
            <Link to="/shop">
              <button className="bg-[#E96B10] hover:bg-[#ff7512] transition-colors text-black border-none outline-none w-[220px] md:w-[320px] 2xl:w-[420px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold relative">
                {" "}
                <BsArrowLeft size={26} className="absolute left-8 md:left-16" />
                Go To Shop
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex w-[100%] md:w-[95%] justify-between flex-col lg:flex-row gap-4">
              <div className="border border-[#444444] flex-1 px-4 py-2">
                <h1 className="text-base md:text-2xl font-semibold mb-8">
                  Shopping Cart 🛒
                </h1>
                {cartItems?.map((item) => (
                  <div
                    key={item._id}
                    className="flex md:gap-16 mb-6 h-40 md:h-52 bg-[#162036c9]"
                  >
                    <div className="overflow-hidden transition-transform ease-in-out duration-300 transform hover:scale-105 w-1/4 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover"
                      />
                    </div>
                    <div className="flex justify-between flex-1 mx-5">
                      <div className="w-[70%] pt-4">
                        <div className=" ">
                          <Link to={`/product/${item._id}`} className="">
                            <h4 className="text-white capitalize text-xs  md:text-base xl:text-lg font-light xl:font-semibold hover:underline">
                              {item.name.substring(0, 35)}...
                            </h4>
                          </Link>
                          <h4 className="hidden md:flex text-[#dcdcdc] text-sm font-medium">
                            {item.description.substring(0, 90)}...
                          </h4>

                          <h4 className="my-2 text-[#dcdcdc] text-sm md:text-base font-medium">
                            {item.brand}
                          </h4>
                        </div>

                        <div className="flex gap-6">
                          <select
                            className="outline-none p-1 border text-white bg-[#0F172A]"
                            value={item.qty}
                            onChange={(e) =>
                              addToCartHandler(item, Number(e.target.value))
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                          <button
                            className="outline-none p-1 border text-white bg-transparent h-8 px-3"
                            onClick={() => removeFromCartHandler(item._id)}
                          >
                            <FaTrash className="" />
                          </button>
                        </div>
                      </div>

                      <div className="w-[30%] flex justify-center pt-8">
                        <h4 className="mt-2 text-white font-bold">
                          $ {item.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Section  */}

              <div className="border border-[#444444] shadow-lg w-[100%] lg:w-1/3 ">
                <div className="px-4 py-2">
                  <h1 className="text-base md:text-2xl font-semibold mb-4 text-white">
                    Price Detail
                  </h1>
                  <h2 className="text-xl font-semibold mb-8 text-white">
                    Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  </h2>

                  <div className="flex flex-col gap-4">
                    <div className="flex text-2xl w-full items-center justify-between gap-4 font-semibold">
                      <h4 className="text-sm md:text-base">Total MRP</h4>
                      <h4 className="text-sm md:text-base">
                        ${" "}
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </h4>
                    </div>
                    <div className="flex text-2xl w-full items-center justify-between gap-4 font-semibold mb-4">
                      <h4 className="text-sm md:text-base">Delivery</h4>
                      <h4 className="text-sm md:text-base">
                        <s>100.00</s> Free Delivery
                      </h4>
                    </div>
                    <div className="flex text-2xl w-full items-center justify-between gap-4 font-semibold mb-4">
                      <button
                        className="bg-transparent border transition-colors text-[#009650] outline-none w-full  px-4 py-2 rounded cursor-pointer text-base font-semibold"
                        onClick={() =>
                          alert("This item is not eligible for discount")
                        }
                      >
                        % Apply coupon
                      </button>
                    </div>

                    <div className="flex text-2xl w-full items-center justify-between gap-4 font-semibold mt-4">
                      <h4 className="text-base md:text-xl font-bold">
                        Total Amount
                      </h4>
                      <h4 className="text-base md:text-xl font-bold">
                        ${" "}
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </h4>
                    </div>
                  </div>
                  <button
                    className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-full  px-4 py-2 rounded cursor-pointer text-base font-semibold mt-12 mb-4"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
