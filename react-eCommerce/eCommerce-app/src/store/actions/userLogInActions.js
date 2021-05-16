import actiontypes from '../actiontypes';
import axios from 'axios';

export const logIn = (email, password) => {
    return async dispatch => {
        try{
            dispatch(userLogInLoading(true))
            const res = await axios.post('http://localhost:9999/api/users/login', {email, password})
            dispatch(userLogIn(res.data))
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            dispatch(userLogInLoading(false))
        }
        catch (err){
            dispatch(userLogInLoading(false))
            dispatch(userLogInFail(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            ))
        }
    }
}

export const userLogInLoading = (payload) => {
    return {
        type: actiontypes().userLogIn.userLogInLoading,
        payload
    }
}

export const userLogIn = (payload) => {
    return {
        type: actiontypes().userLogIn.userLogIn,
        payload
    }
} 

export const userLogInFail = (payload) => {
    return {
        type: actiontypes().userLogIn.userLogInFail,
        payload
    }
}


export const logOut = () => {
    return async dispatch => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('shipping')
        dispatch(userLogOut())
    }
}

export const userLogOut = () => {
    return {
        type: actiontypes().userLogIn.userLogOut
    }
    
} 