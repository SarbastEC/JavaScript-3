import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {payOrder, resetPayOrder} from '../store/actions/payOrderActions';
import Loading from '../components/Loading'; 
import Error from '../components/Error'; 
import {getOrderDetails} from '../store/actions/orderDetailsActions';

const Payment = () => {
    const dispatch = useDispatch();
    const {order} = useSelector(state => state.orderDetailsReducer);
    const [payment, setPayment] = useState('CreditCard');
    const {success, err, loading} = useSelector(state => state.payOrderReducer)

    const payHandler = () => {
        dispatch(payOrder(order, payment))
    } 

    useEffect(() => {
        if(success){
            dispatch(getOrderDetails(order._id))
            dispatch(resetPayOrder())
        }
    }, [dispatch, success, order])
    
    return loading ? <Loading/>
    : err ? <Error err={err}/>
    :
    (
    <>
        {!order.isPaid && !success &&(
        <div className='card mb-3 border p-3'>
            <h4 className='mb-3 pb-4 border-bottom'>Payment Method</h4>

            <div className='form-check mb-3 h4 d-flex align-items-center'>
                <input
                    className="form-check-input me-3"
                    type="radio"
                    name="payment"
                    id="creditCard" 
                    value="CreditCard"
                    required
                    onChange={(e) => setPayment(e.target.value)}
                />
                 <label className="form-check-label"  htmlFor="creditCard"><i className="fas fa-credit-card"></i> Credit-Card  </label>
            </div>

            <div className='form-check mb-3 h4 d-flex align-items-center'>
                <input
                    className="form-check-input me-3"
                    type="radio"
                    name="payment"
                    id="payPal"
                    value="PayPal"
                    required
                    onChange={(e) => setPayment(e.target.value)}
                />
                <label className="form-check-label"  htmlFor="payPal"><i className="fab fa-cc-paypal"></i> PayPal </label>
            </div>

            <div className='form-check mb-3 h4 d-flex align-items-center'>
                <input
                    className="form-check-input me-3 "
                    type="radio"
                    name="payment"
                    id="klarna"
                    value="Klarna"
                    required
                    onChange={(e) => setPayment(e.target.value)}
                />
                 <label className="form-check-label"  htmlFor="klarna"><i className="fas fa-credit-card"></i> Klarna </label>
            </div>

            <button className= 'btn btn-dark mt-5 w-100' onClick={payHandler}>
               Pay 
            </button>
            
        </div>
        )}
        
    </>
    )
}

export default Payment
