import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cartCountDecrement, cartCountIncrement, updateCart } from '../actions/action'


function Product({data, handleClick}){

    const {cart} = useSelector(state=>state)
    const dispatch = useDispatch()
    const [added, setAdded] = useState(cart.cartItems.includes(data))

    const handleAdd = ()=>{
        let new_arr;
        if(added){
            new_arr = cart.cartItems.filter((ele)=>{
                return ele.link!==data.link
            })
            dispatch(cartCountDecrement())
            setAdded(false)
        }else{
            new_arr = [...cart.cartItems,data]
            setAdded(true)
            dispatch(cartCountIncrement())
        }
        dispatch(updateCart(new_arr))
        
    }
    
    return(
        <div className="info-container">
            <button onClick={()=>handleClick()} className="close">X</button>
            <div id="images">
                {data.otherImages.map((ele, index)=>{
                    return <img key={ele} src={ele} alt={`Product ${index+1}`} width="200px" />
                })}
            </div>
            <div id="product-info">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <p>Rs. {data.finalPrice}</p>
                <p><strike>Rs. {data.strickPrice}</strike></p>
                <p>{data.discount}% OFF</p>
                <p>Size</p>
                {data.productSize.split(",").map(ele=>{
                   return <button key={ele}>{ele}</button>
                })}<br/>
                <button onClick={handleAdd}>{added?"Remove from cart":"Add to cart"}</button>
            </div>
        </div>
    )
}

export default Product