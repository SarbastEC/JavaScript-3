import actiontypes from '../actiontypes';

const initState = {};

const createOrderReducer = (state=initState, action) => {
    switch(action.type){
        case actiontypes().order.createOrderLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().order.setOrder:
            return {
                ...state,
                order: action.payload,
                success: true
            }
        case actiontypes().order.createOrderFail:
            return {
                err: action.payload
            }
        case actiontypes().order.resetOrder:
            return {}
        default:
            return state
    }
};

export default createOrderReducer;