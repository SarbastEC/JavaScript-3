import actiontypes from '../actiontypes';

const initState = {
    product: {},
    loading: true,
};

const productReducer = (state=initState, action) => {
    switch(action.type){
        case actiontypes().product.productLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().product.setProduct:
            return {
                ...state,
                product: action.payload
            }
        case actiontypes().product.productFail:
            return {
                err: action.payload
            }
        default:
            return state
    }
};

export default productReducer;