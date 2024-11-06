import { toast } from "react-toastify";



// add to cart
const getStoredAddToCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        const cartItems = JSON.parse(cart);
        return cartItems;
    } else {
        return [];
    }
};

const storeAddToCart = (id,product_title) => {
    const storedCart = getStoredAddToCart();
    if (storedCart.includes(id)) {
        toast.warn(`${id} already exists in the cart`);
    } else {
        storedCart.push(id);
        const updatedCart = JSON.stringify(storedCart);
        localStorage.setItem('cart', updatedCart);
        toast.success(`${product_title} Item added Add to Cart`)
    }
};
const clearStoredAddToCart = () => {
    localStorage.removeItem('cart');  // Clears the cart from localStorage
};

// wish list
const getStoredWishList = () => {
    const cart = localStorage.getItem('Wish-list');
    if (cart) {
        const cartItems = JSON.parse(cart);
        return cartItems;
    } else {
        return [];
    }
};

const storeWishList = (id,product_title) => {
    const storedCart = getStoredWishList();
    if (storedCart.includes(id)) {
        toast.warn(`${id} already exists in the Wish-list`);
    } else {
        storedCart.push(id);
        const updatedCart = JSON.stringify(storedCart);
        localStorage.setItem('Wish-list', updatedCart);
        toast.success(`${product_title} items added wish list`)
    }
};
const clearStoredWishList = () => {
    localStorage.removeItem('Wish-list');  // Clears the cart from localStorage
};


export {storeAddToCart,storeWishList,getStoredAddToCart,getStoredWishList,clearStoredAddToCart,clearStoredWishList}