import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { sortChange } from '../actions/action'

function SortBar(){

    const {sort} = useSelector(state=>state)
    const dispatch = useDispatch()

    const handleSortChange=(event)=>{
        dispatch(sortChange(event.target.value))
    }

    return(
        <label>Sort By:
            <select value={sort.sortValue} onChange={handleSortChange}>
                <option  value="Price Asc">Price Asc</option>
                <option  value="Price Desc">Price Desc</option>
                <option  value="Better Discount">Better Discount</option>
            </select>
        </label>
    )
}

export default SortBar