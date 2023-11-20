import { Link } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

// import ContentWrapper from "./components/ContentWrapper";
const Hero = () => {
  return (
    <div className="bg-[#0e1629]">
      <ContentWrapper>
        <div className="h-[520px] w-full flex justify-center py-8">
          <div className="w-[70%] pt-[4%] flex items-center text-center flex-col">
            <h4 className="text-[#c379ff] border border-[#c379ff] border-spacing-[1rem] text-xl border-dotted px-4 py-1 w-fit my-4">
              Luxehaven: Your Effortless Shopping Sanctuary{" "}
              <Link to={"/shop"} className="text-white text-xl pl-2">
                Shop
              </Link>
            </h4>
            <h2 className="text-[#c892f3] text-3xl font-semibold leading-10 border-dotted px-4 py-1 w-fit">
              Seamless. Secure. Simply Luxe.
            </h2>
            <p className="text-[#97A1AF] mt-4 text-lg">
              Discover Luxehaven, where shopping feels like a breeze.
              Effortlessly browse our curated selection, enjoy swift and secure
              transactions, and revel in a 20% boost in satisfaction. Luxehaven:
              Elevating your online shopping game with style and ease!
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default Hero;
