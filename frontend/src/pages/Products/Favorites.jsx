import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <div className="container w-full mx-auto px-4 flex flex-col justify-center items-center bg-[#0F172A]">
        <h1 className="text-lg xl:text-2xl font-bold mb-8 capitalize">
          Favorite Products
        </h1>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {favorites.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
