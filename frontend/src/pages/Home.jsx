import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import Footer from "./Footer";
import ContentWrapper from "../components/ContentWrapper";
import HeroBottom from "../components/HeroBottom";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? (
        <>
          <Header />
        </>
      ) : null}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[100vh]">
          <Loader />
        </div>
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <div>
          <ContentWrapper>
            <div className="min-h-[100vh] h-full text-black mb-8">
              <div className="flex justify-between items-center mx-4 mb-10">
                <h1 className="text-base lg:text-2xl font-[700] uppercase underline-offset-1">
                  Special Products
                </h1>
                <button className="bg-[#0e1629] hover:bg-[#060911] transition-colors ease-in-out duration-500 text-white border-none outline-none w-[100px] md:w-[140px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold">
                  <Link to="/shop" className="">
                    Shop
                  </Link>
                </button>
              </div>
              <div className="mx-4">
                <h1 className="text-[#FF4800] text-base md:text-lg lg:text-4xl font-bold mb-4">
                  Explore Luxehaven's Curated Collection
                </h1>
                <p className="text-[#222222] text-sm md:text-base font-medium">
                  Dive into a world of elegance and choice with Luxehaven's
                  carefully curated selection. Each product is a testament to
                  quality and style, ensuring your shopping experience is
                  nothing short of extraordinary. Discover the latest trends and
                  timeless classics – Luxehaven, where every click unveils a new
                  level of sophistication.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center container mx-auto gap-6 mt-[2rem] flex-wrap overflow-hidden">
                  {data?.products?.map((product) => (
                    <div key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContentWrapper>
          <div style={{ overflow: "hidden" }}>
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "#FF4800",
                width: "275%",
                height: 102,
                transform: "rotate(180deg) scaleX(-1)",
              }}
            >
              <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
          </div>
          <HeroBottom />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
