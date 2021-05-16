import actiontypes from '../actiontypes';


const completeOrderReducer = (state={}, action) => { 
    switch(action.type){
        case actiontypes().completeOrder.completeOrderLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().completeOrder.setCompleteOrder:
            return {success: true}
        case actiontypes().completeOrder.completeOrderFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
};

export default completeOrderReducer;