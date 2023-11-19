import { useSelector } from "react-redux";

const FavoritesCount = () => {
  const favorites = useSelector((state) => state.favorites);
  const favoriteCount = favorites.length;

  return (
    <div className={`absolute top-[-10px] left-4 `}>
      {favoriteCount > 0 && (
        <span className="h-4 w-4 px-1 py-0 text-sm text-white bg-[#db1143f3] rounded-full">
          {favoriteCount}
        </span>
      )}
    </div>
  );
};

export default FavoritesCount;
