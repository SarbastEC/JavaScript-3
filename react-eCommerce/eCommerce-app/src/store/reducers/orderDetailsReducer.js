import actiontypes from '../actiontypes';

const initState = {
    order: {},
    loading: true,
};

const orderDetailsReducer = (state=initState, action) => {
    
    switch(action.type){
        case actiontypes().orderDetails.orderDetailsLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().orderDetails.setOrderDetails:
            return {
                ...state,
                order: action.payload,
                success: true
            }
        case actiontypes().orderDetails.orderDetailsFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
};

export default orderDetailsReducer;