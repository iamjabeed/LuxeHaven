import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-52 h-64 border border-[#444444] overflow-hidden bg-black rounded-sm hover:shadow-lg hover:shadow-[#ffffffb7]/10">
      <div className="relative h-[70%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform ease-in-out duration-300 transform hover:scale-105"
        />
        <HeartIcon product={product} />
      </div>

      <div className="h-[30%] mt-2 px-2 overflow-hidden">
        <Link to={`/product/${product._id}`}>
          <div className="flex justify-between flex-col">
            <h4 className="text-sm lg:text-base">
              {product.name.substring(0, 20)}...
            </h4>
            <div className="flex gap-4 mt-2">
              <span className="text-sm ">
                <span className="opacity-70">Price:</span> ${product.price}
              </span>
              <span className="text-sm ">{product.rating}⭐</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Product;
