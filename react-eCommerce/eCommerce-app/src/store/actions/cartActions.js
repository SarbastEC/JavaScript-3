import actiontypes from '../actiontypes';


export const addToCart = (product) => {
    return {
        type: actiontypes().cart.addToCart,
        payload: product 
    }
}

export const removeFromCart = (id) => {
    return {
        type: actiontypes().cart.removeFromCart,
        payload: id
    }
}

export const deleteItem = (id) => {
    return {
        type: actiontypes().cart.deleteItem,
        payload: id
    }
}

export const saveShipping = (shipping) => {
    return dispatch => {
        dispatch ({type: actiontypes().cart.shippingSave, payload: shipping })
        localStorage.setItem('shipping', JSON.stringify(shipping))
    } 
}

