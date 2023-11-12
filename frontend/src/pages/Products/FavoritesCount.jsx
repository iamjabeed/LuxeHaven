import { useSelector } from "react-redux";

const FavoritesCount = ({ ml, mb }) => {
  const favorites = useSelector((state) => state.favorites);
  const favoriteCount = favorites.length;

  return (
    <div className={`absolute ml-${[ml]} mb-${[mb]} `}>
      {favoriteCount > 0 && (
        <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
          {favoriteCount}
        </span>
      )}
    </div>
  );
};

export default FavoritesCount;
