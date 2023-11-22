import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../redux/api/productApiSlice";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

import { BsArrowLeft } from "react-icons/bs";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Ratings from "./Ratings";
import ProductTabs from "./ProductTabs";
import { addToCart } from "../../redux/features/cart/cartSlice";
import ContentWrapper from "../../components/ContentWrapper";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error?.data || error.message);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <div className="bg-[#0F172A]">
      <ContentWrapper>
        <div className="min-h-[100vh] pb-8">
          <div className="mb-4">
            <Link
              to="/"
              className="text-white font-semibold text-base xl:text-lg"
            >
              <BsArrowLeft size={25} />
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center w-full h-[100%]">
              <Loader />
            </div>
          ) : error ? (
            <Message variant="danger">
              {error?.data?.message || error?.message}
            </Message>
          ) : (
            <>
              <div className="px-4 w-full">
                <div className="container flex mx-auto flex-col md:flex-row gap-8 flex-wrap w-full relative">
                  <div className="w-full md:w-1/3 overflow-hidden container flex mx-auto">
                    <img
                      src={product?.image}
                      alt={product?.name}
                      className="w-full object-cover transition-transform ease-in-out duration-500 transform hover:scale-105"
                    />
                    <HeartIcon product={product} />
                  </div>

                  <div className="pt-8 flex-1 mx-4 h-full ">
                    <div className="w-[90%]">
                      <h2 className="text-base md:text-2xl font-semibold">
                        {product?.name}
                      </h2>
                      <p className="my-4 text-sm md:text-base text-[#97A1AF] ">
                        {product?.description}
                      </p>

                      <p className="text-base md:text-xl font-semibold xl:font-bold mb-4 text-[#009650]">
                        <span className="font-medium text-[#dddfe3]">
                          Price:
                        </span>{" "}
                        <s className="font-medium text-[#97A1AF] mr-2">
                          $ {product?.price * 2}
                        </s>{" "}
                        $ {product?.price}
                      </p>

                      <div className="flex gap-6 my-4">
                        <div className="flex flex-col gap-3">
                          <h1 className="flex items-center ">
                            <FaStore className="mr-2 text-white" /> Brand:{" "}
                            {product?.brand}
                          </h1>
                          <h1 className="flex items-center">
                            <FaClock className="mr-2 text-white" /> Added:{" "}
                            {moment(product?.createAt).format("MMM Do YY")}
                          </h1>
                          <h1 className="flex items-center">
                            <FaStar className="mr-2 text-white" /> Reviews:{" "}
                            {product?.numReviews}
                          </h1>
                        </div>

                        <div className="flex flex-col gap-3">
                          <h1 className="flex items-center ">
                            <FaStar className="mr-2 text-white" /> Ratings:{" "}
                            {rating}
                          </h1>
                          <h1 className="flex items-center ">
                            <FaShoppingCart className="mr-2 text-white" />{" "}
                            Quantity: {product?.quantity}
                          </h1>
                          <h1 className="flex items-center">
                            <FaBox className="mr-2 text-white" /> In Stock:{" "}
                            {product?.countInStock}
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-8  md:my-8 flex-wrap">
                        <Ratings
                          value={product?.rating}
                          text={`${product?.numReviews} reviews`}
                        />

                        {product?.countInStock > 0 && (
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                              className="rounded-sm outline-none p-1 border text-white bg-[#0F172A]"
                            >
                              {[...Array(product?.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        )}
                      </div>
                      <div className="btn-container">
                        <button
                          onClick={addToCartHandler}
                          disabled={product.countInStock === 0}
                          className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-full  px-4 py-2 rounded cursor-pointer text-base font-semibold mt-12 mb-4"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="border border-[#444444] mt-[5rem] container flex flex-wrap items-start justify-between min-h-[300px]">
                    <ProductTabs
                      loadingProductReview={loadingProductReview}
                      userInfo={userInfo}
                      submitHandler={submitHandler}
                      rating={rating}
                      setRating={setRating}
                      comment={comment}
                      setComment={setComment}
                      product={product}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};
export default ProductDetails;
