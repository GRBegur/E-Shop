import { CHECKBOX_CHANGE, RADIO_BUTTON_CHANGE } from "../actions/action"

const initialState={
    radioValue: "All",
    checkboxValues: []
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case RADIO_BUTTON_CHANGE:
            return {
                ...state,
                radioValue: action.value
            }
        
        case CHECKBOX_CHANGE:
            return{
                ...state,
                checkboxValues: action.value
            }
        
        default:
            return state
    }
}

export default reducer