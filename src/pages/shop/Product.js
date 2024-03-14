import React, { useContext } from 'react';
import './shop.css'

import {ShopContext} from "../../context/Shopcontext"

function Product(props) {
  const {addToCart,cartItems} =useContext(ShopContext)
  const { id, productName, price, ProductImage } = props.data;

  const cartItemAmount=cartItems[id]
  return (
    <div className="col-lg-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={ProductImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <p><b>{productName}</b></p>
            <p><b>$</b>{price}</p>
          </p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount>0 && `(${cartItemAmount})`}</button>
      </div>
    </div>
  );
}

export default Product;

