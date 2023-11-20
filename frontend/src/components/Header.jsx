import { useGetTopProductsQuery } from "../redux/api/productApiSlice";

import ProductCarousel from "../pages/Products/ProductCarousel";
import SmallProduct from "../pages/Products/SmallProduct";
import BannerSlider from "./BannerSlider";
import Loader from "./Loader";
import Hero from "./Hero";
import ContentWrapper from "./ContentWrapper";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  //   console.log(data);

  // if (isLoading) {
  //   return <Loader />;
  // }
  if (error) {
    return <h1>ERROR</h1>;
  }
  return (
    <>
      <div className="bg-[#0e1629]">
        <Hero />
        <ContentWrapper>
          <div className="container justify-around items-start flex flex-wrap mx-auto gap-4">
            <div className="mb-[2rem] lg:mb-0">
              <h4 className="text-base lg:text-2xl font-bold mb-8">
                Top Products
              </h4>
              <div className="grid grid-cols-2 gap-4 items-center w-full">
                {data?.map((product) => (
                  <div key={product._id}>
                    <SmallProduct product={product} />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <ProductCarousel />
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div style={{ overflow: "hidden" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#0e1629", width: "275%", height: 100 }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>
    </>
  );
};
export default Header;
