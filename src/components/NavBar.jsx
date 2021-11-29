import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputSearchUpdate, openCloseCart } from '../actions/action'
import logo from '../icon1.jpg'
import cart from '../shopping-cart-solid.svg'

function NavBar(){
    const {navBar} = useSelector(state=>state)
    const dispatch = useDispatch()

    const handleInputChange=(event)=>{
        dispatch(inputSearchUpdate(event.target.value))
    }

    const handleClick=()=>{
        dispatch(openCloseCart(true))
    }

    return(
        <nav>
            <div className="icon-holder">
                <img src={logo} alt="logo" style={{marginLeft:"2rem"}}/>
            </div>
            <h1 id="title">E-SHOP</h1>
            <div id="search-cart">
                <input id="search" type="text" value={navBar.searchInput} onChange={handleInputChange} placeholder="Enter search text" /> 
                <div className="cart-holder" onClick={handleClick}>
                    <img src={cart} alt="cart logo" /> <div className="cart-list-length">
                        {navBar.cartCount}
                    </div>
                </div>
            </div>
        </nav> 
    )
}

export default NavBar