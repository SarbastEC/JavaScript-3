import actiontypes from '../actiontypes';

const initState = {
    orders: [],
    loading: true,
};

const allOrdersListReducer = (state= initState, action) => {
    switch (action.type){
        case actiontypes().allOrdersList.allOrdersListLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().allOrdersList.setAllOrders:
            return {
                ...state,
                orders: action.payload
            }
        case actiontypes().allOrdersList.allOrdersListFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
}

export default allOrdersListReducer;