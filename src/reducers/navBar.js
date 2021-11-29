import { CART_COUNT_DECREMENT, CART_COUNT_INCREMENT, INPUT_CHANGE } from "../actions/action"

const initialState = {
    searchInput: "",
    cartCount: 0
}

const navBar = (state=initialState,action)=>{
    switch(action.type){
        case INPUT_CHANGE:
            return {...state, 
                searchInput : action.value 
            }
        
        case CART_COUNT_INCREMENT:
            return {
                ...state,
                cartCount: state.cartCount+1
            }
        
        case CART_COUNT_DECREMENT:
            return {
                ...state,
                cartCount: state.cartCount-1
            }

        default:
            return state
        
    }
}

export default navBar