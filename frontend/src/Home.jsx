import { Link, useParams } from "react-router-dom";
// import { useGetProductsQuery } "./redux/api/productApiSlice.js";
// import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./components/Loader";
import Message from "./components/Message";
import Header from "./components/Header";

const Home = () => {
  const { keyword } = useParams();
  //   const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return <>{!keyword ? <Header /> : null}</>;
};
export default Home;
