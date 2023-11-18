import { Link } from "react-router-dom";
// import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  console.log(product);
  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[15rem] h-[18rem] border overflow-hidden flex flex-col gap-4">
        <div className="relative h-[70%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full rounded"
          />
          {/* <HeartIcon product={product} /> */}
        </div>

        <div className="p-2 h-[30%]">
          <div className="flex items-center flex-col gap-2">
            <div className="flex gap-3 justify-center items-center w-full">
              <h4>{product.name}</h4>
            </div>
            <div className="flex gap-2 w-full justify-around">
              <span>{product.brand}</span>
              <span>{product.rating} ⭐</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallProduct;
