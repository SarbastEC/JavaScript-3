import actiontypes from '../actiontypes';

const initState = {
    cartProducts: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartReducer = (state=initState, action) => {
    
    state.cartTotalQuantity = getTotalQuantity(state.cartProducts)
    state.cartTotalAmount = getTotalAmount(state.cartProducts)

    switch (action.type){
        case actiontypes().cart.addToCart:
            try {

                let existItem = state.cartProducts.find(product => product._id === action.payload._id)
                let newItem = {...action.payload, quantity: 1, product:action.payload._id}

                existItem
                ? existItem.quantity += 1
                : state.cartProducts = [...state.cartProducts, newItem]
                
                state.cartTotalQuantity = getTotalQuantity(state.cartProducts)
                state.cartTotalAmount = getTotalAmount(state.cartProducts)

                localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))

            }
            catch (err){
                console.log(err)
            }
            return state
            
        case actiontypes().cart.removeFromCart:
            try{
                let existItem = state.cartProducts.find(product => product._id === action.payload)

                existItem.quantity === 1
                ? state.cartProducts = state.cartProducts.filter(product => product._id !== existItem._id)
                : existItem.quantity -= 1

                state.cartTotalQuantity = getTotalQuantity(state.cartProducts)
                state.cartTotalAmount = getTotalAmount(state.cartProducts)

                localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
            }
            catch (err){
                console.log(err)
            }
            return state

        case actiontypes().cart.deleteItem:
            try{
                state.cartProducts = state.cartProducts.filter(product => product._id !== action.payload)

                state.cartTotalQuantity = getTotalQuantity(state.cartProducts)
                state.cartTotalAmount = getTotalAmount(state.cartProducts)

                localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
            }
            catch (err) {
                console.log(err)
            }
            return state
        case actiontypes().cart.shippingSave:
            return {...state, shipping: action.payload}
        case actiontypes().cart.cartEmpty:
            return {...state, err:'', cartProducts: []}

        default:
            return state
    }
};

const getTotalQuantity = (cartProducts) => {
    let total = 0
    cartProducts.forEach(product => {
        total += product.quantity
    });
    return total
};

const getTotalAmount = (cartProducts) => {
    let total = 0
    cartProducts.forEach(product => {
        total += product.price * product.quantity
    })
    return total
}

export default cartReducer;
