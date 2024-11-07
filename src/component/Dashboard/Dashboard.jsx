import React, { useEffect, useState } from 'react';
import ModalImg from '../../assets/Group.png'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { clearStoredAddToCart, clearStoredWishList, getStoredAddToCart, getStoredWishList} from '../Add To LocalStorage/AddToStorage';


const Dashboard = () => {
    
    const [AddToCart, setAddToCart] = useState([]);
    const [WishList, setWishList] = useState([]);
    const [activeBtn, setActiveBtn] = useState('cart');
    const [totalCost, setTotalCost] = useState(0)
    const navigate = useNavigate()
    const allData = useLoaderData()
    
    useEffect(()=> {
        const storedAddToCart = getStoredAddToCart();
        const storedCartInt = storedAddToCart.map(id => parseInt(id))
        // console.log(storedAddToCart, storedCartInt,allData)
        const AddToCartList =allData?.filter(cart => storedCartInt.includes(cart.product_id))
        setAddToCart(AddToCartList);


        const storedWishList = getStoredWishList();
        const storedWishInt = storedWishList.map(id => parseInt(id))
        // console.log(storedWishList, storedWishInt,allData)
        const storeWishList =allData?.filter(wishList => storedWishInt.includes(wishList.product_id))
        setWishList(storeWishList)
    },[allData])

    const handleClickButton = (Tab)=>{
        setActiveBtn(Tab)
    }
    
    // sort by price
    const handleSortByPriceClick = ()=>{
        const sortByPrice = [...AddToCart].sort((a, b) => b.price - a.price);
        setAddToCart(sortByPrice)
    }
    //handlePurchase button
    const handlePurchase =()=> {
        // console.log('hello ')
       const totalCost = AddToCart.reduce((previous, current) => previous + current.price, 0)
        // console.log(totalCost)
        setTotalCost(totalCost)
        clearStoredAddToCart()
        clearStoredWishList()
        setAddToCart([])
       
    }
    const handleBtnClose =()=> {
        navigate('/')
        // console.log("hello")
    }

    return (
        <div >
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
                    <button className={`btn border-2 px-16 rounded-full 
                        ${activeBtn === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                            onClick={() => handleClickButton('cart')}>
                            Cart
                    </button>
                    <button className={`btn border-2 px-16 rounded-full 
                            ${activeBtn === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                            onClick={() => handleClickButton('wishlist')}
                    >
                        WishList
                    </button>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center py-11'>
                    <div className='text-2xl font-extrabold'>{activeBtn === 'cart' ? 'Cart' : 'Wishlist'}</div>
                    <div className='flex justify-around items-center gap-6'>
                    {activeBtn === 'cart' &&(
                            <>
                                <div>
                                    <h1 className='text-2xl font-bold mr-20'>Total cost: {AddToCart.reduce((previous, current) => previous + current.price, 0)}$ </h1>
                                </div>
                                <div>
                                    <button onClick={handleSortByPriceClick} className='btn border-2  px-16 rounded-full bg-white text-[#9538E2] border-[#9538E2]'>Sort by Price</button>
                                </div>
                                <div>
                                    <button  onClick={()=>{document.getElementById('my_modal_3').showModal(); handlePurchase()}} className='btn border-2  px-16 rounded-full bg-[#9538E2] text-white'>Purchase</button>
                                    {/* modal */}
                                    <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box text-center ">
                                        <div className="flex place-content-center" >
                                                <img className="" src={ModalImg} alt="" />
                                        </div>
                                            <h3 className="font-bold text-lg mt-3">Payment Successfully</h3>
                                            <p className="py-2">Thanks for purchasing.</p>
                                            <span className="my-4">price: {totalCost}</span>
                                        <form method="dialog">
                                            <button onClick={handleBtnClose}  className="btn px-14 rounded-full bg-purple-600 text-white ">Close</button>
                                        </form>
                                    </div>
                                    </dialog>
                                </div>
                            </>
                        )
                    }
                        
                    </div>
                </div>
                <div>
                    {activeBtn === 'cart' ? (
                    <div>
                        {AddToCart.length === 0 ? (
                            <h2 className='text-center text-3xl text-red-400 font-bold'>Cart is empty</h2>
                        ) : (
                            AddToCart.map((cart, index) => (
                                <div key={index} className='flex justify-between w-full items-center p-4 border-2 border-gray-400 rounded-xl my-10'>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img className='w-[60px] md:w-[183px] h-[80px] md:h-[183px] border-2 rounded-xl' src={cart.product_image} alt="" />
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='text-3xl font-extrabold'>{cart.product_title}</h1>
                                            <p>{cart.description}</p>
                                            <h1 className='text-lg md:text-xl font-bold'> Price: {cart.price}$</h1>
                                            <span className="text-xl font-bold">Rating:</span>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                                <div className="text-xl font-bold">
                                                    <p>{cart.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(cart.product_id)}>
                                            <img src="https://img.icons8.com/color/48/delete-forever.png" alt="Delete" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    ) : (
                        <div>
                            {WishList.length === 0 ? (
                                <h2 className='text-center text-3xl text-red-400 font-bold py-10'>Wish list is empty</h2>
                            ) : (
                                WishList.map((list, index) => (
                                    <div key={index} className='flex justify-between w-full items-center p-4 border-2 border-gray-400 rounded-xl my-10'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <img className='w-[60px] md:w-[183px] h-[80px] md:h-[183px] border-2 rounded-xl' src={list.product_image} alt="" />
                                            </div>
                                            <div className='space-y-2'>
                                                <h1 className='text-3xl font-extrabold'>{list.product_title}</h1>
                                                <p>{list.description}</p>
                                                <h1 className='text-lg md:text-xl font-bold'> Price: {list.price}$</h1>
                                                <span className="text-xl font-bold">Rating:</span>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="rating">
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    </div>
                                                    <div className="text-xl font-bold">
                                                        <p>{list.rating}</p>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDelete(list.product_id)}>
                                                <img src="https://img.icons8.com/color/48/delete-forever.png" alt="Delete" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};





export default Dashboard;