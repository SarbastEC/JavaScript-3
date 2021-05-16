import actiontypes from '../actiontypes';
import axios from 'axios';


export const completeOrder = (order) => {
    return async (dispatch, getState) => {

        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();

            dispatch(completeOrderLoading(true))
            const res = await axios.patch(`http://localhost:9999/api/orders/${order._id}/complete`, {},{
                headers: {
                    authorization: `Bearer ${token}`,
                }
            }) 
            console.log(res.data)    
            dispatch(setCompleteOrder(res.data))
            dispatch(completeOrderLoading(false))
        }
        catch (err){
            dispatch(completeOrderLoading(false))
            dispatch(completeOrderFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const completeOrderLoading = (payload) => {
    return {
        type: actiontypes().completeOrder.completeOrderLoading,
        payload
    }
}

export const setCompleteOrder = (payload) => {
    return {
        type: actiontypes().completeOrder.setCompleteOrder,
        payload
    }
} 

export const completeOrderFail = (payload) => {
    return {
        type: actiontypes().completeOrder.completeOrderFail,
        payload
    }
}



