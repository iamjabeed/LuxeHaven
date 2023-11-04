const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Add Category",
  handleDelete,
}) => {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          className="mt-1 p-2 border rounded w-[400px] bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
          placeholder="Write category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-between">
          <button className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-2xl">
            {buttonText}
          </button>

          {handleDelete && (
            <button
              onClick={handleDelete}
              className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-2xl focus:outline-none focus:ring-2 foucs:ring-red-500 focus:ring-opacity-50"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
