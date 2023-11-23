import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import ProgressSteps from "../../components/ProgressSteps";
import Loader from "../../components/Loader";
import { useCreateOrderMutation } from "../../redux/api/orderApiSlice";
import { clearCartItems } from "../../redux/features/cart/cartSlice";
import ContentWrapper from "../../components/ContentWrapper";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-[#0E1629] min-h-screen">
      <ContentWrapper>
        <ProgressSteps step1 step2 step3 />
        <div className="mx-auto mt-8 px-4">
          {cart.cartItems.length === 0 ? (
            <Message>Your cart is empty</Message>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <td className="px-1 py-2 text-left align-top">Image</td>
                    <td className="px-1 py-2 text-left hidden lg:block">
                      Product
                    </td>
                    <td className="px-1 py-2 text-left">Quantity</td>
                    <td className="px-1 py-2 text-left">Price</td>
                    <td className="px-1 py-2 text-left">Total</td>
                  </tr>
                </thead>

                <tbody>
                  {cart.cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <Link to={`/product/${item.product}`}>
                          {" "}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 object-cover"
                          />
                        </Link>
                      </td>

                      <td className="p-2 hidden lg:block">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </td>
                      <td className="p-2">{item.qty}</td>
                      <td className="p-2">{item.price.toFixed(2)}</td>
                      <td className="p-2">
                        $ {(item.qty * item.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-5">
              Order Summary
            </h2>
            <div className="flex justify-between flex-wrap p-4 bg-[#0E1629] border border-[#444444] items-center gap-8">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold mb-4">Items:</span> $
                  {cart.itemsPrice}
                </li>
                <li>
                  <span className="font-semibold mb-4">Shipping:</span> $
                  {cart.shippingPrice}
                </li>
                <li>
                  <span className="font-semibold mb-4">Tax:</span> $
                  {cart.taxPrice}
                </li>
                <li>
                  <span className="font-semibold mb-4">Total:</span> $
                  {cart.totalPrice}
                </li>
              </ul>

              {error && (
                <Message variant="danger">{error.data.message}</Message>
              )}

              <div>
                <h2 className="text-lg xl:text-xl font-semibold mb-2">
                  Shipping:
                </h2>
                <p>
                  <strong>Address:</strong> {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{" "}
                  {cart.shippingAddress.country}
                </p>
              </div>

              <div>
                <h2 className="text-lg xl:text-xl font-semibold mb-4">
                  Payment Method
                </h2>
                <strong>Method:</strong> {cart.paymentMethod}
              </div>
            </div>

            <div className="flex justify-center items-center w-full">
              <button
                type="button"
                className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[320px] md:w-[460px] 2xl:w-[520px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>

            {isLoading && <Loader />}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PlaceOrder;
