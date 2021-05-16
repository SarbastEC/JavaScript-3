import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ordersList} from '../store/actions/ordersListActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

const MyOrder = () => {
    const dispatch = useDispatch();
    const {orders, loading, err} = useSelector(state => state.ordersListReducer)
    const history = useHistory();
    const {userInfo} = useSelector(state => state.userLogInReducer);

    if (!userInfo){
        history.push('/login')
    }

    useEffect(() => {
       dispatch(ordersList()) 
    }, [dispatch])

    return loading ? <Loading/> :
    err ? <Error err={err}/>
    :
    (
        <div className='container mt-5 '>
            <h3 className='text-center mb-4'>Orders</h3>
            <table class="table align-middle">
                <thead className='bg-dark text-light'>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                    orders && orders.map(order => (
                    <tr key={order._id} order={order}>
                        <th scope="row">{order._id}</th>
                        <td>{order.created.slice(0,10)}</td>
                        <td>${order.totalPrice}</td>
                        {
                            order.isPaid ? (<td>{order.payment}</td>) 
                            :(<td className='text-danger'>Not Paid</td>)
                        }
                        
                        {
                            order.isDone ? (<td className='text-success'><i class="far fa-check-circle text-success"></i> completed order</td>)
                            :order.isPaid ? (<td>Confirmed Order</td>)
                            :(<td>Pending Payment</td>)
                        }
                        <td className='pe-3'>
                            <Link exact onClick={() => {history.push(`/orders/${order._id}`)}}>
                                <button type="button" class="btn btn-light btn-sm px-3">
                                    Details
                                </button>
                            </Link>
                        </td>
                    </tr>
                    ))
                    }
                
                </tbody>
            </table> 
        </div>
    )
}

export default MyOrder
