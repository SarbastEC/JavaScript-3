import actiontypes from '../actiontypes';

const initState = [];

const userRegisterReducer = (state=initState, action) => {
    switch(action.type){
        case actiontypes().userRegister.userRegisterLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().userRegister.userRegister:
            return {
                ...state,
                userInfo: action.payload
            }
        case actiontypes().userRegister.userRegisterFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
};

export default userRegisterReducer;