import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveShipping} from '../store/actions/cartActions';
import {useHistory} from 'react-router-dom';

const ShippingAddress = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {userInfo} = useSelector(state => state.userLogInReducer);
    const {shipping} = useSelector(state => state.cartReducer);

    if (!userInfo){
        history.push('/login')
    }

    const [fullName, setFullName] = useState(shipping.fullName);
    const [address, setAddress] = useState(shipping.address);
    const [postalCode, setPostalcode] = useState(shipping.postalCode);
    const [city, setCity] = useState(shipping.c);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShipping({fullName, address, postalCode, city}))
        history.push('/placeorder')
    }

    return ( 
        <div className='container mt-5'>
            <h3 className='text-center'>Shipping Address</h3>
            <form className='mt-5 border p-5' onSubmit={submitHandler}>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4 border-bottom">
                    <input type="text" id="form6Example1" value={fullName} className="form-control" onChange={(e) => setFullName(e.target.value)} />
                    <label className="form-label" for="form6Example1">Full Name</label>
                </div>


                {/* <!-- Text input --> */}
                <div className="form-outline mb-4 border-bottom">
                    <input type="text" id="form6Example2" value={address} className="form-control" onChange={(e) => setAddress(e.target.value)}/>
                    <label className="form-label" for="form6Example2">Address</label>
                </div>

                <div className="row mb-5">
                    <div className="col">
                    <div className="form-outline border-bottom">
                        <input type="text" id="form6Example3" value={postalCode} className="form-control" onChange={(e) => setPostalcode(e.target.value)}/>
                        <label className="form-label" for="form6Example3">Postal code</label>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline border-bottom">
                        <input type="text" id="form6Example4" value={city} className="form-control" onChange={(e) => setCity(e.target.value)}/>
                        <label className="form-label" for="form6Example4">City</label>
                    </div>
                    </div>
                </div>


                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-dark btn-block mb-2">Continue</button>
            </form>
        </div>
    )
}

export default ShippingAddress
