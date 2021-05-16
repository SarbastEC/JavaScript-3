import actiontypes from '../actiontypes';
import axios from 'axios';

export const getProdctsList = () => {
    return async dispatch => {
        try{
            dispatch(productsListLoading(true))
            const res = await axios.get('http://localhost:9999/api/products')
            dispatch(setProducts(res.data))
            dispatch(productsListLoading(false))
        }
        catch (err){
            dispatch(requestFail(
               err.res && err.response.data.message 
               ? err.response.data.message 
               : err.message 
            ))
        }
    }
};

export const productsListLoading = (payload) => {
    return {
        type: actiontypes().productsList.productsListLoading,
        payload
    }
};

export const setProducts = (payload) => {
    return {
        type: actiontypes().productsList.setProducts,
        payload
    }
};

export const requestFail = (payload) => {
    return {
        type: actiontypes().productsList.productsListFail,
        payload
    }
};