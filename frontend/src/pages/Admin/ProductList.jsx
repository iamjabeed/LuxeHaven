import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "../../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";
const ProductList = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useFetchCategoriesQuery();
  return (
    <div className="grid place-content-center items-center text-[#eaeaea] py-5 pl-6  sm:pl-[20%] xl:pl-0">
      <div className="flex flex-col justify-center items-center">
        {/* <AdminMenu /> */}
        <div className="flex flex-col ">
          <div className="">
            <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#F6F6F6]">
              Create Product
            </h1>
          </div>

          {imageUrl && (
            <div className="text-center">
              <img
                src={imageUrl}
                alt="product"
                className="block mx-auto max-h-[200px]"
              />
            </div>
          )}

          <div className="mb-3 ml-2">
            <label
              className="border rounded border-[#57575b] text-[#F6F6F6] px-4 block w-[320px] 
            md:w-[460px] xl:w-[98%] text-center cursor-pointer font-bold py-4"
            >
              {image ? image.name : "Upload Image"}

              <input
                type="file"
                name="image"
                accept="image/*"
                // onChange={uploadFileHandler}
                className={`!image ? "hidden" : "text-white" ml-6 mt-1 p-2 bg-[#0F0F10] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-none `}
              />
            </label>
          </div>

          <div className="p-3">
            <div className="flex flex-wrap gap-6">
              <div className="one">
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="two">
                <label htmlFor="name block">Price</label> <br />
                <input
                  type="number"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="one">
                <label htmlFor="name block">Quantity</label> <br />
                <input
                  type="number"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="two">
                <label htmlFor="name block">Brand</label> <br />
                <input
                  type="text"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:gap-6">
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                className="mt-1 p-2 border rounded  mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63] w-[320px] md:w-[460px] xl:w-[98%]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex flex-wrap gap-6">
              <div>
                <label htmlFor="name block">Count In Stock</label> <br />
                <input
                  type="text"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="">Category</label> <br />
                <select
                  placeholder="Choose Category"
                  //   className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                  className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-[#0F0F10] placeholder-[#eaeaeab9]  text-[#F6F6F6] outline-none border-[#57575b] focus:border-[#FF2E63]"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="xl:flex xl:justify-center xl:items-center">
              <button
                // onClick={handleSubmit}
                className="bg-[#db1143f3] hover:bg-[#FF2E63] transition-colors text-white border-none outline-none w-[320px] md:w-[460px] 2xl:w-[100%] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
