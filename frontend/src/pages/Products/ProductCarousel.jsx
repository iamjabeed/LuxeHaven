import {
  useGetTopProductsQuery,
  useGetNewProductsQuery,
} from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";

import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import ContentWrapper from "../../components/ContentWrapper";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetNewProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    // <ContentWrapper>
    <div className="">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1 className="text-base lg:text-2xl font-bold mb-8">
            Featured Products
          </h1>

          <Slider
            {...settings}
            className="w-[80vw] md:w-[40rem] 2xl:w-[50rem] mx-auto"
          >
            {products.map(
              ({
                image,
                _id,
                name,
                price,
                description,
                brand,
                createdAt,
                numReviews,
                rating,
                quantity,
                countInStock,
              }) => (
                <div key={_id} className="mx-auto h-[450px] md:h-[700px]">
                  <img
                    src={image}
                    alt={name}
                    className="w-full rounded-sm object-cover h-[80%]"
                  />

                  <div className="mt-2 flex border border-[#444444] px-2 p-2 text-[#d8e2f2c3] overflow-hidden">
                    <div className="one">
                      <div className="flex gap-8 justify-between">
                        <h2 className="text-base md:text-lg font-medium text-white/80 mb-2">
                          {name.substring(0, 50)}...
                        </h2>
                        <p className="text-[#009650] text-sm md:text-base md:font-bold hidden md:flex">
                          {" "}
                          $ {price}
                        </p>
                      </div>
                      <p className="md:flex text-sm hidden">
                        {description.substring(0, 120)} ...
                      </p>
                    </div>

                    {/* <div className="flex justify-between w-1/2">
                      <div className="one">
                        <h1 className="flex items-center mb-6">
                          <FaStore className="mr-2 text-white" /> Brand: {brand}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaClock className="mr-2 text-white" /> Added:{" "}
                          {moment(createdAt).fromNow()}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaStar className="mr-2 text-white" /> Reviews:
                          {numReviews}
                        </h1>
                      </div>

                      <div className="two">
                        <h1 className="flex items-center mb-6">
                          <FaStar className="mr-2 text-white" /> Ratings:{" "}
                          {Math.round(rating)}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaShoppingCart className="mr-2 text-white" />{" "}
                          Quantity: {quantity}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaBox className="mr-2 text-white" /> In Stock:{" "}
                          {countInStock}
                        </h1>
                      </div>
                    </div> */}
                  </div>
                </div>
              )
            )}
          </Slider>
        </>
      )}
    </div>
    // </ContentWrapper>
  );
};

export default ProductCarousel;
