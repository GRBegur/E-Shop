import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import data from '../data'
import { openCloseCart } from '../actions/action'
import CartData from './CartData'
import Items from './Items'
import Product from './Product'


function Content(){
    const {filter, navBar, sort, cart} = useSelector(state=>state)
    const [sorfil_data, setData] = useState(data)
    const [info, setInfo] = useState({
        clicked: false,
        infoData : {}
    })
    const dispatch = useDispatch()

    const sortData=(data)=>{
        switch(sort.sortValue){
            case "Price Asc":{
                searchFilter(data.sort((a,b)=>{
                    return a.finalPrice-b.finalPrice
                }))
                break
            }

            case "Price Desc":{
                searchFilter(data.sort((a,b)=>{
                    return b.finalPrice-a.finalPrice
                }))
                break
            }

            case "Better Discount":{
                searchFilter(data.sort((a,b)=>{
                    return b.discount-a.discount
                }))
                break
            }
        }
    }

    const radioFilter=(data)=>{
        switch(filter.radioValue){
            case "All":{
                sortData(data)
                break
            }

            case "Male":{
                sortData(data.filter((ele)=>{
                    return ele.gender==="M"
                }))
                break
            }

            case "Female":{
                sortData(data.filter((ele)=>{
                    return ele.gender==="F"
                }))
                break
            }
        }
    }

    const checkboxFilter=(data)=>{
        if(filter.checkboxValues.length===2){
            radioFilter(data.filter((ele)=>{
                return ele.folded==="Y" && ele.cat==="W"
            }))
        }else if(filter.checkboxValues[0]==="White"){
            radioFilter(data.filter((ele)=>{
                return ele.cat==="W"
            }))
        }else if(filter.checkboxValues[0]==="Folded Sleeves"){
            radioFilter(data.filter((ele)=>{
                return ele.folded==="Y"
            }))
        }else{
            radioFilter(data)
        }
    }

    const searchFilter=(data)=>{
        setData(data.filter((ele)=>{
            return ele.name.toLowerCase().includes(navBar.searchInput.toLowerCase()) || ele.description.toLowerCase().includes(navBar.searchInput.toLowerCase())
        }))
    }

    const handleClick=(data)=>{
        if(info.clicked!==true && data!==undefined){
            setInfo({
                clicked: true,
                infoData: data
            })
        }else{
            setInfo({
                clicked: false,
                infoData: {}
            })
        }
        dispatch(openCloseCart(false))
    }

    useEffect(()=>{
        checkboxFilter(data)
    },[navBar.searchInput, filter.radioValue, filter.checkboxValues])

    useEffect(()=>{
        sortData(sorfil_data)
    },[sort.sortValue])

    return (
        <>
            <div className="product-tile-holder">
                {sorfil_data.map((ele)=>
                    <Items key={ele.link} data={ele} handleClick={handleClick}/>
                )}
            </div>
            {info.clicked && <Product data={info.infoData} handleClick={handleClick} />}
            {cart.openCloseCart && <CartData handleClick={handleClick} />}
        </>
    )
}

export default Content