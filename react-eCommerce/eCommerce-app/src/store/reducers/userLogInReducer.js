import actiontypes from '../actiontypes';

const initState = {};

const userLogInReducer = (state=initState, action) => {
    switch(action.type){
        case actiontypes().userLogIn.userLogInLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().userLogIn.userLogIn:
            return {
                ...state,
                userInfo: action.payload
            }
        case actiontypes().userLogIn.userLogInFail:
            return {
                err: action.payload
            }
        case actiontypes().userLogIn.userLogOut:
            return {}
        default:
            return state
    }
};

export default userLogInReducer;