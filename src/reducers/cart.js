import { OPEN_CLOSE_CART, UPDATE_CART } from "../actions/action"

const initialState = {
    cartItems: [],
    openCloseCart: false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_CART:
            return {
                ...state,
                cartItems: action.value
            }
        
        case OPEN_CLOSE_CART:
            return {
                ...state,
                openCloseCart: action.value
            }

        default:
            return state
    }
}

export default reducer