import { Link } from "react-router-dom";
// import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[20rem] ml-[2rem] p-3">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-auto rounded"
        />
        {/* <HeartIcon product={product} /> */}
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div>{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;

// <div
//   className="cursor-pointer mb-25 flex-shrink-0"
//   onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
// >
//   <div className="relative w-full aspect-w-1 aspect-h-1.5 bg-cover bg-center mb-30 flex items-end justify-between p-10 transition-all ease-300">
//     <Img className="absolute top-0 left-0 w-full h-full rounded-12 overflow-hidden" src={posterUrl} />
//   </div>
//   <div className="text-white flex flex-col">
//     <span className="text-16 mb-10 leading-24 md:text-20">
//       {data.title || data.name}
//     </span>
//     <span className="text-14 opacity-50">
//       {dayjs(data.release_date).format("MMM D, YYYY")}
//     </span>
//   </div>
// </div>
