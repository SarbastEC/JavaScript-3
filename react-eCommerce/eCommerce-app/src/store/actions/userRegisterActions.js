import actiontypes from '../actiontypes';
import axios from 'axios';

export const register = (firstName, lastName, email, password) => {
    return async dispatch => {
        try{
            dispatch(userRegisterLoading(true))
            const res = await axios.post('http://localhost:9999/api/users/register', {firstName, lastName, email, password})
            dispatch(userRegister(res.data))
            dispatch({type: actiontypes().userLogIn.userLogIn, payload: res.data})
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            dispatch(userRegisterLoading(false))
        }
        catch (err){
            dispatch(userRegisterLoading(false))
            dispatch(userRegisterFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const userRegisterLoading = (payload) => {
    return {
        type: actiontypes().userRegister.userRegisterLoading,
        payload
    }
}

export const userRegister = (payload) => {
    return {
        type: actiontypes().userRegister.userRegister,
        payload
    }
} 

export const userRegisterFail = (payload) => {
    return {
        type: actiontypes().userRegister.userRegisterFail,
        payload
    }
}


