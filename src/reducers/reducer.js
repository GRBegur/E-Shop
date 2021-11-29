import { combineReducers } from "redux"
import navBar from "./navBar"
import filter from './filter'
import sort from './sort'
import cart from './cart'

const reducer = combineReducers({
    navBar,
    filter,
    sort,
    cart
}) 


export default reducer