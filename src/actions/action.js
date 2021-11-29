export const INPUT_CHANGE = "inputChange"
export const CART_COUNT_INCREMENT = "cartCountInc"
export const CART_COUNT_DECREMENT = "cartCountDec"

export const RADIO_BUTTON_CHANGE = "radioButtonChange"
export const CHECKBOX_CHANGE = "checkBoxChange"

export const SORT_CHANGE = "sortChange"

export const UPDATE_CART = "updateCart"
export const OPEN_CLOSE_CART = "openCart"


export function inputSearchUpdate(inputValue){
    return{
        type: INPUT_CHANGE,
        value: inputValue
    }
}

export function cartCountIncrement(){
    return{
        type: CART_COUNT_INCREMENT
    }
}

export function cartCountDecrement(){
    return{
        type: CART_COUNT_DECREMENT
    }
}

// ......................Filters........................
export function radioButtonChange(value){
    return{
        type: RADIO_BUTTON_CHANGE,
        value
    }
}

export function checkBoxChange(value){
    return {
        type: CHECKBOX_CHANGE,
        value,
    }
}

//....................Sort................................

export function sortChange(value){
    return {
        type: SORT_CHANGE,
        value
    }
}

//.........................Cart..............................

export function updateCart(value){
    return {
        type: UPDATE_CART,
        value
    }
}

export function openCloseCart(value){
    return {
        type: OPEN_CLOSE_CART,
        value
    }
}