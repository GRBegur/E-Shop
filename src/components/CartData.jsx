import React from "react";
import { useSelector } from "react-redux";
import Items from "./Items";

function CartData({handleClick}){
    
    const {cart} = useSelector(state=>state)
    const [originalPrice, finalPrice] = cart.cartItems.reduce(([opSum, fpSum],ele)=>{
        return [opSum+parseInt(ele.strickPrice), fpSum+parseInt(ele.finalPrice)]
    },[0,0])

    return(
        <div className="info-container">
            <button onClick={()=>handleClick()} className="close">X</button>
            {
                cart.cartItems.length===0?
                <h1 style={{color:"gray"}}>Zero Products In Cart</h1> :
                <>
                    <div className="product-tile-holder">
                        {cart.cartItems.map((ele)=>{
                            return <Items key={ele.link} data={ele} fromCart={true} />
                        })}
                    </div>
                    <p>Total Items: {cart.cartItems.length}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Total Discount: {(100-((finalPrice/originalPrice)*100)).toPrecision(2)}%</p>
                    <p>Final Price: {finalPrice}</p>
                    <button disabled={true}>Proceed To Buy</button>
                </>
            }
        </div>
    )
}

export default CartData