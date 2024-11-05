import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] ">
                <h1 className="text-center text-3xl md:text-6xl font-extrabold pt-10 pb-4 text-white">
                Dashboard
                </h1>
                <p className="text-base font-normal text-[#FFFFFF] text-center pb-10">
                Explore the latest gadgets that will take your experience to the next
                level. From smart devices to <br /> the coolest accessories, we have
                it all!
                </p>
                <div className=' gap-4 flex place-content-center pb-5'>
                    <button className='btn border-2 px-16 rounded-full bg-white text-[#9538E2]'>Cart</button>
                    <button className='btn border-2  px-16 rounded-full bg-[#9538E2] text-white'> WishList</button>
                </div>
            </div>

            <div className='flex justify-between items-center py-11'>
                <div className='text-2xl font-extrabold'>Cart</div>
                <div className='flex justify-around items-center gap-6'>
                    <div>
                        <h1 className='text-2xl font-bold mr-20'>Total cost: </h1>
                    </div>
                    <div>
                        <button className='btn border-2  px-16 rounded-full bg-white text-[#9538E2] border-[#9538E2]'>Sort by Price</button>
                    </div>
                    <div>
                        <button className='btn border-2  px-16 rounded-full bg-[#9538E2] text-white'>Purchase</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold py-10'>Some time wait now ............Data comming soon </h1>
            </div>
        </div>
    );
};

export default Dashboard;