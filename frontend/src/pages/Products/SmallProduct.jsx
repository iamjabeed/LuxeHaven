import { Link } from "react-router-dom";
// import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  // console.log(product);
  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[15rem] h-[18rem] bg-black overflow-hidden flex flex-col gap-4">
        <div className="relative h-[70%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* <HeartIcon product={product} /> */}
        </div>

        <div className="p-2 h-[30%]">
          <div className="flex items-center flex-col gap-2 mx-2">
            <div className="flex gap-3 w-full">
              <h4>{product.name}</h4>
            </div>
            <div className="flex gap-3 w-full items-center opacity-80">
              <span>{product.brand}</span>
              <span className="text-white w-[60px] px-2 py-1 rounded cursor-pointer text-sm font-semibold">
                ${product.price}
              </span>
              <span>{product.rating} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallProduct;
