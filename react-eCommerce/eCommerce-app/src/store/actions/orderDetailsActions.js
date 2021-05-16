import actiontypes from '../actiontypes';
import axios from 'axios';


export const getOrderDetails = (id) => {
    return async (dispatch, getState) => {

        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();
            
            dispatch(orderDetailsLoading(true))
            const res = await axios.get(`http://localhost:9999/api/orders/${id}`,{
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })            
            dispatch(setOrderDetails(res.data))
            dispatch(orderDetailsLoading(false))

        }
        catch (err){
            dispatch(orderDetailsLoading(false))
            dispatch(orderDetailsFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const orderDetailsLoading = (payload) => {
    return {
        type: actiontypes().orderDetails.orderDetailsLoading,
        payload
    }
}

export const setOrderDetails = (payload) => {
    return {
        type: actiontypes().orderDetails.setOrderDetails,
        payload
    }
} 

export const orderDetailsFail = (payload) => {
    return {
        type: actiontypes().orderDetails.orderDetailsFail,
        payload
    }
}



