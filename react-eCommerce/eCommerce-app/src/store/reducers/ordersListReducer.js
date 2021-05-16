import actiontypes from '../actiontypes';

const initState = {
    orders: [],
    loading: true,
};

const ordersListReducer = (state= initState, action) => {
    switch (action.type){
        case actiontypes().ordersList.ordersListLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().ordersList.setOrders:
            return {
                ...state,
                orders: action.payload
            }
        case actiontypes().ordersList.ordersListFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
}

export default ordersListReducer;