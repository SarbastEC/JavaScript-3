import actiontypes from '../actiontypes';


const payOrderReducer = (state={}, action) => { 
    switch(action.type){
        case actiontypes().payOrder.payOrderLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().payOrder.setPayOrder:
            return {success: true}
        case actiontypes().payOrder.payOrderFail:
            return {
                err: action.payload
            }
            case actiontypes().payOrder.resetPayOrder:
                return {}
        default:
            return state
    }
};

export default payOrderReducer;