import { toast } from "react-toastify";




const getStoredAddToCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        const cartItems = JSON.parse(cart);
        return cartItems;
    } else {
        return [];
    }
};

const storeAddToCart = (id) => {
    const storedCart = getStoredAddToCart();
    if (storedCart.includes(id)) {
        toast.warn(`${id} already exists in the cart`);
    } else {
        storedCart.push(id);
        const updatedCart = JSON.stringify(storedCart);
        localStorage.setItem('cart', updatedCart);
        toast.success('cart is Added Add to Cart')
    }
};


const getStoredWishList = () => {
    const cart = localStorage.getItem('Wish-list');
    if (cart) {
        const cartItems = JSON.parse(cart);
        return cartItems;
    } else {
        return [];
    }
};

const storeWishList = (id) => {
    const storedCart = getStoredWishList();
    if (storedCart.includes(id)) {
        toast.warn(`${id} already exists in the Wish-list`);
    } else {
        storedCart.push(id);
        const updatedCart = JSON.stringify(storedCart);
        localStorage.setItem('Wish-list', updatedCart);
        toast.success('added wish list')
    }
};


export {storeAddToCart,storeWishList}