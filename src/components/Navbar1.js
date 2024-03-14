import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {ShoppingCart} from 'phosphor-react'
function Navbar1() {
  return (
    <div className='navbar'>

        <div className='links' >
        <Link to ='/'>Shop</Link>
        <Link to='/cart'>
            <ShoppingCart size={32}/>
        </Link>
        </div>
     
    </div>
  )
}

export default Navbar1
