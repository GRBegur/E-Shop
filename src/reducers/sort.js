import { SORT_CHANGE } from "../actions/action"

const initialState={
    sortValue: "Price Asc"
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        
        case SORT_CHANGE:
            return{
                sortValue: action.value
            }
        
        default:
            return state
    }
}

export default reducer