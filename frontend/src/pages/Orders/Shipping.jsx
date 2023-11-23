import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saveShippingAddress,
  savePaymentMethod,
} from "../../redux/features/cart/cartSlice";
import ProgressSteps from "../../components/ProgressSteps";
import ContentWrapper from "../../components/ContentWrapper";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  // Payment
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  return (
    <div className="bg-[#0E1629] mx-auto mt-10 min-h-screen">
      <ContentWrapper>
        <ProgressSteps step1 step2 />
        <div className="mt-[2rem] flex w-full h-full flex-wrap">
          <form
            onSubmit={submitHandler}
            className="w-[40rem] mx-auto ml-[13%] md:ml-auto"
          >
            <h1 className="text-2xl font-semibold mb-4">Shipping</h1>
            <div className="mb-4">
              <label className="block text-white mb-2">Address</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-[#0E1629] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                placeholder="Enter address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">City</label>
              <input
                type="text"
                className="t-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-[#0E1629] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                placeholder="Enter city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Postal Code</label>
              <input
                type="text"
                className="p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-[#0E1629] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                placeholder="Enter postal code"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Country</label>
              <input
                type="text"
                className="p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-[#0E1629] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                placeholder="Enter country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label className="block">Select Method</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-pink-500"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    autoComplete="off"
                  />

                  <span className="ml-2">PayPal or Credit Card</span>
                </label>
              </div>
            </div>

            <button
              className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[320px] md:w-[460px] 2xl:w-[520px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Shipping;
