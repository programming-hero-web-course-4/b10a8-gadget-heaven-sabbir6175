import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import {  storeAddToCart, storeWishList } from "../../Add To LocalStorage/AddtoStorage";

// {
//     "product_id": "1",
//     "product_title": "Gaming Laptop",
//     "product_image": "https://i.ibb.co.com/7pn4mY9/Gaming-Laptop.jpg",
//     "category": "Laptops",
//     "price": 797,
//     "description": "High-performance gaming laptop with RTX graphics and a fast refresh rate display.",
//     "specification": ["Intel i7 processor", "16GB RAM", "1TB SSD", "NVIDIA RTX 3070", "144Hz display"],
//     "availability": true,
//     "rating": 4.7
//   },

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const productData = data.find((product) => product.product_id === id);
  // console.log(productData)
  // console.log(typeof product_id, typeof data[0].product_id, typeof id,data)
  // console.log(product_Id)

  const {
    product_image,
    product_id: ProductId,
    product_title,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = productData;


const handleAddToCart = (id)=>{
    storeAddToCart(id);
}
const handleWishList = (id)=> {
    storeWishList(id);
}


  return (
    <div className="">
      <div className="bg-[#9538E2] ">
        <h1 className="text-center text-3xl md:text-6xl font-extrabold pt-10 pb-4 text-white">
          Product Details
        </h1>
        <p className="text-base font-normal text-[#FFFFFF] text-center pb-60">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="border  p-5 rounded  w-[300px] md:w-[700px] lg:w-[1062px]   backdrop-blur-lg  m-auto relative -top-48">
        <div className="hero  bg-white ">
          <div className="hero-content flex-col lg:flex-row h-full gap-10 ">
            <img
              src={product_image}
              
              className="w-[424px] h-full  rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <p className="text-xl font-bold py-3 mb-3">Price: {price}$</p>
              <button className="btn bg-[#309C081A] rounded-full px-20 border-lime-500 text-[#309C08]">In Stock</button>
              <p className="py-3  text-[#09080F99] text-lg font-normal">
               {description}
              </p>
              <p className="text-2xl font-bold">Specification:</p>
              <ol className="text-black mb-2">
                {specification.map((items, index) => (
                    <li
                        key={index}
                        className=" border-none text-base text-[#09080F99] font-medium list-decimal ml-10 "
                    >
                    {items}
                    </li>
                ))}
              </ol>
              <span className="text-xl font-bold">Rating:</span>
              <div className="flex items-center gap-3 mb-4">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="text-xl font-bold">
                        <p> {rating}</p>
                    </div>
              </div>
              <div className="flex items-center gap-5">
                    <button onClick={() => {handleAddToCart(product_id)}} className="btn bg-[#9538E2] md:px-14 text-white rounded-2xl md:text-xl font-medium">Add to card <BsCart3> </BsCart3> </button>
                    <FaRegHeart onClick={() => {handleWishList(product_id)}} className="text-2xl shadow bg-white w-12 h-12 border-2 rounded-full p-3 cursor-pointer "></FaRegHeart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
