const actiontypes = () => {
    return {
        productsList: {
            productsListLoading: 'PRODUCTS_LIST_LOADING',
            setProducts: 'SET_PRODUCTS',
            productsListFail: 'PRODUCTS_LIST_FIAL'
        },
        product: {
            productLoading: 'PRODUCT_LOADING',
            setProduct: 'SET_PRODUCT',
            productFail: 'PRODUCT_FAIL'
        },
        cart: {
            addToCart: 'ADD_TO_CART',
            removeFromCart: 'REMOVE_FROM_CART',
            deleteItem: 'DELETE_ITEM',
            shippingSave: 'SHIPPING_SAVE',
            cartEmpty: 'CART_EMPTY'
        },
        userLogIn: {
            userLogInLoading: 'USER_LOG_IN_LOADING',
            userLogIn: 'USER_LOG_IN',
            userLogInFail: 'USER_LOG_IN_FIAL',
            userLogOut: 'USER_LOG_OUT'
        },
        userRegister: {
            userRegisterLoading: 'USER_REGISTER_LOADING',
            userRegister: 'USER_REGISTER',
            userRegisterFail: 'USER_REGISTER_FIAL',
        },
        order: {
            createOrderLoading: 'CREATE_ORDER_LOADING',
            setOrder: 'SET_ORDER',
            createOrderFail: 'CREATE_ORDER_FAIL',
            resetOrder: 'RESET_ORDER'
        },
        orderDetails: {
            orderDetailsLoading: 'ORDER_DETAILS_LOADING',
            setOrderDetails: 'SET_ORDER_DETAILS',
            orderDetailsFail: 'ORDER_DETAILS_FAIL',
        },
        payOrder: {
            payOrderLoading: 'PAY_ORDER_LOADING',
            setPayOrder: 'SET_PAY_ORDER',
            payOrderFail: 'PAY_ORDER_FAIL',
            resetPayOrder: 'RESET_PAY_ORDER'
        },
        ordersList: {
            ordersListLoading: 'ORDERS_LIST_LOADING',
            setOrders: 'SET_ORDERS',
            ordersListFail: 'ORDERS_LIST_FIAL'
        },
        allOrdersList: {
            allOrdersListLoading: 'ALL_ORDERS_LIST_LOADING',
            setAllOrders: 'SET_ALL_ORDERS',
            allOrdersListFail: 'ALL_ORDERS_LIST_FIAL'
        },
        completeOrder: {
            completeOrderLoading: 'COMPLETE_ORDER_LOADING',
            setCompleteOrder: 'SET_COMPLETE_ORDER',
            completeOrderFail: 'COMPLETE_ORDER_FAIL',
        },
    }
};

export default actiontypes;