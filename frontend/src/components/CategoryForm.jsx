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
          className="mt-1 p-2 border rounded w-[90%] bg-[#0E1629] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
          placeholder="Write category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-between gap-4">
          <button className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none md:w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-sm">
            {buttonText}
          </button>

          {handleDelete && (
            <button
              onClick={handleDelete}
              className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none md:w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-sm"
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
