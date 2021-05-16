import actiontypes from '../actiontypes';
import axios from 'axios';


export const createOrder = (order) => {
    return async (dispatch, getState) => {
        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();
            
            dispatch(createOrderLoading(true))
            const res = await axios.post('http://localhost:9999/api/orders', order, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })            

            dispatch(setOrder(res.data.order))
            dispatch(createOrderLoading(false))
            dispatch(cartEmpty())
            localStorage.removeItem('cartProducts')

        }
        catch (err){
            dispatch(createOrderLoading(false))
            dispatch(createOrderFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const createOrderLoading = (payload) => {
    return {
        type: actiontypes().order.createOrderLoading,
        payload
    }
}

export const setOrder = (payload) => {
    return {
        type: actiontypes().order.setOrder,
        payload
    }
} 

export const createOrderFail = (payload) => {
    return {
        type: actiontypes().order.createOrderFail,
        payload
    }
}

export const resetOrder = () => {
    return {
        type: actiontypes().order.resetOrder
    }
}

export const cartEmpty = () => {
    return {
        type: actiontypes().cart.cartEmpty
    }
}

