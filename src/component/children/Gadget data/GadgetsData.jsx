import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GadgetData from './GadgetData';


const GadgetsData = () => {
    const [gadgetData, setGadgetData]= useState([])
    //category onujay data
    const [selectCategory, setSelectCategory] = useState('All Product')
     useEffect(()=>{
        fetch('GadgetData.json')
            .then(res => res.json())
            .then(data => setGadgetData(data))
    },[])

    const handleCategoryClick =(category) =>{
        // console.log('data fetch just wait now')
        
        setSelectCategory(category)
        
    }
 
    const GadgetCategoryData = selectCategory === 'All Product'? gadgetData : gadgetData.filter(categoryItems => categoryItems.category === selectCategory)

    // console.log(GadgetCategoryData)

        const button = <>
            <button onClick={() => handleCategoryClick('All Product')} className='btn rounded-2xl bg-[#9538E2]'>All Product</button>
            <button onClick={() => handleCategoryClick('Laptops')} className='btn rounded-2xl hover:bg-[#9538E2]'>Laptops</button>
            <button onClick={() => handleCategoryClick('Phones')} className='btn rounded-2xl hover:bg-[#9538E2]'>Phones</button>
            <button onClick={()=> handleCategoryClick('Accessories')} className='btn rounded-2xl hover:bg-[#9538E2]'>Accessories</button>
            <button onClick={()=> handleCategoryClick('Smart Watches')} className='btn rounded-2xl hover:bg-[#9538E2]'>Smart Watches</button>
            <button onClick={()=> handleCategoryClick('MacBook')} className='btn rounded-2xl hover:bg-[#9538E2]'>MacBook</button>
            <button onClick={()=> handleCategoryClick('Iphone')} className='btn rounded-2xl hover:bg-[#9538E2]'>Iphone</button>
        </>
   
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-16 text-[#9538E2]'>Explore Cutting-Edge Gadgets</h1>


            <div className='grid lg:grid-cols-12  gap-4 '>
                <div className='grid col-span-12 lg:col-span-3 p-3 lg:p-0 bg-gray-200 rounded-2xl'>
                        <div className='flex flex-col  gap-6 p-4'>
                            {button}
                        </div>
                </div>
                <div className='grid col-span-12 lg:col-span-9 lg:ml-10 p-3 md:p-2 lg:p-0'>
                        {
                            GadgetCategoryData.length > 0  ? (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                        {
                                            GadgetCategoryData.map(gadgetData => <GadgetData key={gadgetData.product_id} gadgetData ={gadgetData}></GadgetData> )
                                        }
                                </div>
                            ): (
                                <p className='text-4xl font-extrabold text-[#9538E2] ml-10'>No Data Available</p>
                            )
                        }
                </div>
            </div>
        </div>
    );
};

export default GadgetsData;