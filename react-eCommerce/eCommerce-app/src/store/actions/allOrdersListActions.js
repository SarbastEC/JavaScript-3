import actiontypes from '../actiontypes';
import axios from 'axios';

export const allOrdersList = () => {
    return async (dispatch, getState) => {
        try{
            const {userLogInReducer:{userInfo:{token}}} = getState();
            dispatch(allOrdersListLoading(true))
            const res = await axios.get('http://localhost:9999/api/orders', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            dispatch(setAllOrders(res.data))
            dispatch(allOrdersListLoading(false))
        }
        catch (err){
            dispatch(allOrdersListLoading(false))
            dispatch(allOrdersListFail(
               err.res && err.response.data.message 
               ? err.response.data.message 
               : err.message 
            ))
        }
    }
};

export const allOrdersListLoading = (payload) => {
    return {
        type: actiontypes().allOrdersList.allOrdersListLoading,
        payload
    }
};

export const setAllOrders = (payload) => {
    return {
        type: actiontypes().allOrdersList.setAllOrders,
        payload
    }
};

export const allOrdersListFail = (payload) => {
    return {
        type: actiontypes().allOrdersList.allOrdersListFail,
        payload
    }
};