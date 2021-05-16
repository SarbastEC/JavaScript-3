import {combineReducers} from 'redux';
import productsListReducer from './productsListReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userLogInReducer from './userLogInReducer';
import userRegisterReducer from './userRegisterReducer';
import createOrderReducer from './createOrderReducer';
import orderDetailsReducer from './orderDetailsReducer';
import payOrderReducer from './payOrderReducer';
import ordersListReducer from './ordersListReducer';
import allOrdersListReducer from './allOrdersListReducer';
import completeOrderReducer from './completeOrderReducer';


export default combineReducers ({
    productsList: productsListReducer,
    productDetails: productReducer,
    cartReducer,
    userLogInReducer,
    userRegisterReducer,
    createOrderReducer,
    orderDetailsReducer,
    payOrderReducer,
    ordersListReducer,
    allOrdersListReducer,
    completeOrderReducer
});

