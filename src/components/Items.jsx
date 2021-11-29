import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, cartCountDecrement } from '../actions/action'

function Items({data, handleClick, fromCart}){

    const {cart} = useSelector(state=>state)
    const dispatch = useDispatch()
    const handleRemove=(event)=>{
        event.stopPropagation()
        const new_arr = cart.cartItems.filter((ele)=>{
            return ele.link!==data.link
        })
        dispatch(cartCountDecrement())
        dispatch(updateCart(new_arr))
    }

    return(
        <div className="indiv-tile-holder" onClick={()=>handleClick(data)}>
            <img src={data["otherImages"][0]} alt="Product" width="200"/>
            <p>{data["name"]}</p>
            <p><i>{data["description"]}</i></p>
            <p>Rs.{data["finalPrice"]} <strike>{data["strickPrice"]}</strike> <span style={{color:"red"}}>{data["discount"]}% OFF</span></p>
            {fromCart && <button onClick={handleRemove} >Remove From Cart</button>}
        </div>
    )
}

export default Items


//...............Schema................
// { 'cat': '', 
// 'folded': 'Y', 
// 'gender': 'M', 
// 'name': 'HERE&NOW', 
// 'description': 'Men Regular Fit Casual Shirt', 
// 'finalPrice': '824', 
// 'strickPrice': '1499', 
// 'discount': 45, 
// 'productSize': '38, 40, 42, 44, 46', 
// 'link': 'https://www.myntra.com/shirts/herenow/herenow-men-red--black-regular-fit-checked-casual-shirt/2414313/buy', 
// 'otherImages': ['https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg', 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368507-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-2.jpg', 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368495-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-3.jpg', 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368483-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-4.jpg'] 
// }