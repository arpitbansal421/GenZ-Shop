import React, { createContext, useState } from 'react';
import Product from '../pages/shop/Product';
import { PRODUCT } from '../components/products';

export const ShopContext = createContext(null);



const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopcontextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newQuantity = (prev[itemId] || 0) + 1;
      return { ...prev, [itemId]: newQuantity };
    });
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newQuantity = Math.max((prev[itemId] || 0) - 1, 0);
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopcontextProvider;
