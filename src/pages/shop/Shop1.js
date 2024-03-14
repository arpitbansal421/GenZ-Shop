import React from 'react'
import {PRODUCT} from '../../components/products'
import Product from './Product'
import "./shop.css"
function Shop() {
  return (
    <div>
      
      <div className="shop">
        <div className='shopTitle'>
          <h1>Genz Shop</h1>
        </div>

        <div className=" row mt-5 products">
          {PRODUCT.map((product)=>(
            <Product data={product}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Shop
