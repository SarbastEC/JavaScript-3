import actiontypes from '../actiontypes';

const initState = {
    products: [],
    loading: true,
};

const productsListReducer = (state= initState, action) => {
    switch (action.type){
        case actiontypes().productsList.productsListLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().productsList.setProducts:
            return {
                ...state,
                products: action.payload
            }
        case actiontypes().productsList.productsListFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
}

export default productsListReducer;