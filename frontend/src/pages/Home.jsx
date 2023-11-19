import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import Footer from "./Footer";

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
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <div className="min-h-[100vh] mt-12">
          <div className="flex justify-between items-center mx-auto px-8 mb-10">
            <h1 className="text-base xl:text-3xl">Special Products</h1>
            <button className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[100px] md:w-[140px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold">
              <Link to="/shop" className="">
                Shop
              </Link>
            </button>
          </div>

          <div>
            <div className="flex justify-center flex-wrap gap-6 mt-[2rem]">
              {data?.products?.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
