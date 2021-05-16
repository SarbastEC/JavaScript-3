import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {createOrder, resetOrder} from '../store/actions/orderActions';
import {useHistory} from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Loading';


const PlaceOrder = () => {
    const cartReducer = useSelector(state => state.cartReducer);
    const {loading, success, err, order} = useSelector(state => state.createOrderReducer)
    const {shipping, cartProducts, cartTotalAmount, cartTotalQuantity} = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    if(!shipping.address){
        history.push('/shipping')
    };

    const placeOrderHandler = () => { 
        dispatch(createOrder({
            ...cartReducer, 
            orderItems: cartProducts,
            totalQty: cartTotalQuantity,
            totalPrice: cartTotalAmount,
        }))
    }

    useEffect(() => {
      if(success){
        history.push(`/orders/${order._id}`)
        dispatch(resetOrder())
      }
    }, [success, history, order])

    return (
        <div className='container my-4 border rounded p-4 oreder-bg'>
            <h3 className='text-center mb-4'>Place Order</h3>
            <div className='card mb-3 border p-3'>
                <h4 className='mb-3'>shipping address : </h4>
                <h6>{shipping.fullName}</h6>
                <div className='d-flex'>
                    <p className='me-2'> {shipping.address},</p>
                    <p className='me-2'>{shipping.postalCode}</p>
                    <p>{shipping.city}</p>
                </div>
            </div>
 
            <div className='card mb-3 border p-3'>
                <h4 className='mb-3'>Order items : {cartTotalQuantity}</h4>
                <div>
                {
                    cartProducts && cartProducts.map(product => (
                        <div key={product._id} product={product}>
                            <div className='d-flex justify-content-between align-items-center border rounded p-4 mb-1'>
                                <Link to={`/products/${product._id}`} className='p-0'><img src={product.image} alt="" className='cart-image'/></Link>
                                <Link to={`/products/${product._id}`} className='p-0'><strong className='text-dark'>{product.name}</strong></Link>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className="mt-2 h6 me-2 me-md-4">${product.price}</h6> 
                                    <span className='text-dark mb-0 me-2 me-md-4'>X {product.quantity}</span> 
                                    <h6 className="mt-2">= ${product.quantity*product.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div>
                    <h4 className="mt-4"> Order total :
                        <strong className='ms-4'> ${cartTotalAmount}</strong>
                    </h4>
                </div>
            </div>
            <button className='btn btn-dark w-100 my-3' onClick={placeOrderHandler}>
                Place Order
            </button>
            {loading && <Loading/>}
            {err && <Error err={err}/>}
        </div>
    )
}

export default PlaceOrder
