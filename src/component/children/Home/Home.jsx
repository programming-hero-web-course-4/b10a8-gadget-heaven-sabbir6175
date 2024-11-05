import React from 'react';

import bannerImage from '../../../assets/banner.jpg'
import GadgetData from '../Gadget data/GadgetsData';

const Home = () => {
    return (
       
        <div className=' mb-4'>
            <div className='bg-[#9538E2]  pb-72'>
                    <h1 className='text-center text-3xl md:text-6xl font-extrabold pt-10 pb-4 text-white'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='text-base font-normal text-[#FFFFFF] text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className='flex justify-center mt-5'>
                     <button className='btn bg-white border-none rounded-3xl text-[#9538E2] text-xl font-normal'>Shop Now </button>
                </div>
            </div>
            <div className='border  p-5 rounded  w-[300px] md:w-[700px] lg:w-[1062px]   backdrop-blur-lg  m-auto relative -top-52'>
                <img className=' h-[350px] md:h-[450px] lg:h-[563px] w-full bg-cover bg-no-repeat rounded-lg ' src={bannerImage} alt="" />
            </div>


            <GadgetData></GadgetData>
        </div>

       
    );
};

export default Home;