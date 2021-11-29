import React from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { checkBoxChange, radioButtonChange } from "../actions/action";
import SortBar from "./SortBar";


function Filters(){

    const {filter} = useSelector(state=>state)
    const dispatch = useDispatch();

    const handleCheckBoxChange=(event)=>{
        let arr;
        if(event.target.checked){
            arr = [...filter.checkboxValues,event.target.name]
        }else{
            arr = filter.checkboxValues.filter((ele)=>{
                return ele!==event.target.name
            })
        }
        dispatch(checkBoxChange(arr))
        
    }

    const handleRadioChange=(event)=>{
        
        dispatch(radioButtonChange(event.target.value))

    }

    return(
        <div className="filter-holder">
            <div>
                <label onChange={handleRadioChange}>
                    Gender:<br/>
                    <input type="radio" name="Gender" defaultChecked={true}  value="All" />All<br/>
                    <input type="radio" name="Gender" value="Male" />Male<br/>
                    <input type="radio" name="Gender" value="Female" />Female
                </label>
            </div>
            <div>
                <label>
                    Categories: <br />
                    <input type="checkbox" onChange={handleCheckBoxChange} name="White" />White<br/>
                    <input type="checkbox" onChange={handleCheckBoxChange} name="Folded Sleeves" />Floded Sleeves
                </label>
            </div>
            <SortBar />
        </div>
    )
}

export default Filters