import actiontypes from '../actiontypes';
import axios from 'axios';


export const payOrder = (order, payment) => {
    return async (dispatch, getState) => {

        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();

            dispatch(payOrderLoading(true))
            const res = await axios.patch(`http://localhost:9999/api/orders/${order._id}`, {payment}, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            }) 
            console.log(res.data)    
            dispatch(setPayOrder(res.data))
            dispatch(payOrderLoading(false))
        }
        catch (err){
            dispatch(payOrderLoading(false))
            dispatch(payOrderFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const payOrderLoading = (payload) => {
    return {
        type: actiontypes().payOrder.payOrderLoading,
        payload
    }
}

export const setPayOrder = (payload) => {
    return {
        type: actiontypes().payOrder.setPayOrder,
        payload
    }
} 

export const payOrderFail = (payload) => {
    return {
        type: actiontypes().payOrder.payOrderFail,
        payload
    }
}

export const resetPayOrder = () => {
    return {
        type: actiontypes().payOrder.resetPayOrder
    }
}



