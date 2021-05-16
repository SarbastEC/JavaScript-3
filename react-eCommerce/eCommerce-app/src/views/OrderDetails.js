import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Loading';
import { getOrderDetails } from '../store/actions/orderDetailsActions';
import Payment from '../components/Payment';
import {resetOrder} from '../store/actions/orderActions';


const OrderDetails = () => {
    const {loading, err, order} = useSelector(state => state.orderDetailsReducer);
    const dispatch = useDispatch();
    const id = useParams().id


    useEffect(() => {
        dispatch(getOrderDetails(id))
        dispatch(resetOrder())
    }, [ dispatch, id])

    return loading ? <Loading/>
    : err ? <Error/>
    :(
        <div className='container my-4 border rounded p-4 oreder-bg'>
            {
                order.isDone ? (<h3 className='text-center mb-4'>Order <i class="far fa-check-circle text-success"></i></h3>)
                : (<h3 className='text-center mb-4'>Order</h3>)
            }
            <p className='ms-2 mb-1'>Order-id: {order._id}</p>
            <p className='ms-2 mb-4'>Date: {order.created.slice(0, 10)}</p>

            {order.shipping && (
                    <div className='card mb-3 border p-3'>
                        <h4 className='mb-3'>Shipping Address : </h4>
                        <h6>{order.shipping.fullName}</h6>
                        <div className='d-flex'>
                            <p className='me-2'> {order.shipping.address},</p>
                            <p className='me-2'>{order.shipping.postalCode}</p>
                            <p>{order.shipping.city}</p>
                        </div>
                    </div>
                )
            }

            <div className='card mb-3 border p-3'>
                <h4 className='mb-3'>Order items : {order.totalQty}</h4>
                <div>
                {
                    order.orderItems && order.orderItems.map(item => (
                        <div key={item._id} item={item}>
                            <div className='d-flex justify-content-between align-items-center border rounded p-4 mb-1'>
                                <Link to={`/products/${item._id}`} className='p-0'><img src={item.image} alt="" className='cart-image'/></Link>
                                <Link to={`/products/${item._id}`} className='p-0'><strong className='text-dark'>{item.name}</strong></Link>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className="mt-2 h6 me-2 me-md-4">${item.price}</h6> 
                                    <span className='text-dark mb-0 me-2 me-md-4'>X {item.quantity}</span> 
                                    <h6 className="mt-2">= ${item.quantity*item.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div>
                    <h4 className="mt-4"> Order total :
                        <strong className='ms-4'> ${order.totalPrice}</strong>
                    </h4>
                </div>
            </div>
            {
                order.isPaid ? (
             
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <h5  className='mb-0 me-3'>Payment Successfull <i class="far fa-check-circle text-success"></i></h5>
                        <p className='mb-0'> {order.modified.slice(0, 10)}</p>
                    </div>
                       
                ) 
                : (
                    <Payment/>
                )
                
            }
            
        </div> 
    )
}

export default OrderDetails
