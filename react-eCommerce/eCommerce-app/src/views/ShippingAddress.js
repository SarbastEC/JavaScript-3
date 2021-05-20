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
                <div className="mb-4">
                    <input type="text" placeholder="Full Name" value={fullName} className="form-control py-2" onChange={(e) => setFullName(e.target.value)} />
                </div>


                {/* <!-- Text input --> */}
                <div className="mb-4">
                    <input type="text" placeholder="Address" value={address} className="form-control py-2" onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div className="row mb-5">
                    <div className="col">
                    <div>
                        <input type="text" placeholder="Postal code" value={postalCode} className="form-control py-2" onChange={(e) => setPostalcode(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col">
                    <div>
                        <input type="text" placeholder="City" value={city} className="form-control py-2" onChange={(e) => setCity(e.target.value)}/>
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
