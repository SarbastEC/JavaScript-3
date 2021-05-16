import actiontypes from '../actiontypes';
import axios from 'axios';

export const getOneProduct = (id) => {
    return async dispatch => {
        try{
            dispatch(productLoading(true))
            const res = await axios.get(`http://localhost:9999/api/products/${id}`)
            dispatch(setProduct(res.data))
            dispatch(productLoading(false))
        }
        catch (err){
            dispatch(productLoading(false))
            dispatch(requestFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const productLoading = (payload) => {
    return {
        type: actiontypes().product.productLoading,
        payload
    }
}

export const setProduct = (payload) => {
    return {
        type: actiontypes().product.setProduct,
        payload
    }
} 

export const requestFail = (payload) => {
    return {
        type: actiontypes().product.productFail,
        payload
    }
}