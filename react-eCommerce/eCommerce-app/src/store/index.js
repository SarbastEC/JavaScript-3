import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
    userLogInReducer: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cartReducer: {
      cartProducts: localStorage.getItem('cartProducts')
        ? JSON.parse(localStorage.getItem('cartProducts'))
        : [],
      shipping: localStorage.getItem('shipping')
        ? JSON.parse(localStorage.getItem('shipping'))
        : [],
    },
  };

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);