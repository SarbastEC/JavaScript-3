import actiontypes from '../actiontypes';
import axios from 'axios';

export const ordersList = () => {
    return async (dispatch, getState) => {
        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();
            dispatch(ordersListLoading(true))
            const res = await axios.get('http://localhost:9999/api/orders/myOrders', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            dispatch(setOrders(res.data))
            dispatch(ordersListLoading(false))
        }
        catch (err){
            dispatch(ordersListLoading(false))
            dispatch(ordersListFail(
               err.res && err.response.data.message 
               ? err.response.data.message 
               : err.message 
            ))
        }
    }
};

export const ordersListLoading = (payload) => {
    return {
        type: actiontypes().ordersList.ordersListLoading,
        payload
    }
};

export const setOrders = (payload) => {
    return {
        type: actiontypes().ordersList.setOrders,
        payload
    }
};

export const ordersListFail = (payload) => {
    return {
        type: actiontypes().ordersList.ordersListFail,
        payload
    }
};