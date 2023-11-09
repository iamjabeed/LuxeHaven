import { Link, useParams } from "react-router-dom";

import Loader from "./components/Loader";
import Message from "./components/Message";
import Header from "./components/Header";
import { useGetProductsQuery } from "./redux/api/productApiSlice";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="px-4 text-base xl:text-xl 2xl:text-2xl font-semibold">
              Special Product
            </h1>

            <Link
              to="/shop"
              className="bg-[#f84c01] font-bold rounded-lg py-2 px-10"
            >
              Shop
            </Link>
            <div className="flex justify-between flex-wrap mt-[2rem]">
              {data?.products.map((product) => (
                <div key={product._id}>
                  {/* <Product product={product}/> */}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
