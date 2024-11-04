import React from 'react';


// {
//     "product_id": "1",
//     "product_title": "Gaming Laptop",
//     "product_image": "https://i.ibb.co.com/7pn4mY9/Gaming-Laptop.jpg",
//     "category": "Laptops",
//     "price": 4797,
//     "description": "High-performance gaming laptop with RTX graphics and a fast refresh rate display.",
//     "specification": ["Intel i7 processor", "16GB RAM", "1TB SSD", "NVIDIA RTX 3070", "144Hz display"],
//     "availability": true,
//     "rating": 4.7
//   },
const GadgetData = ({gadgetData}) => {
    const {product_title,product_image,price} = gadgetData;
    return (
        <div className="card card-compact bg-base-100  shadow-xl border p-4">
            <figure>
                <img
                className='w-full h-52'
                src={product_image}
                alt="Shoes" />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title font-extrabold text-2xl">{product_title}</h2>
                <p className='text-lg font-medium'>Price: {price}</p>
                <button className='btn border-[#9538E2] text-[#9538E2] rounded-2xl'>Show Details</button>
            </div>
        </div>
    );
};

export default GadgetData;