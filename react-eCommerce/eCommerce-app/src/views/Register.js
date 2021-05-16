import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../store/actions/userRegisterActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const  [firstName, setFirstName] = useState('');
    const  [lastName, setLastName] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    const {userInfo, loading, err} = useSelector(state => state.userRegisterReducer);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(firstName, lastName, email, password))
    }

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    }, [userInfo, history])

    return (
        <div className="container mt-5 vh-100">
            {loading && <Loading/> }
            {err && <Error err={err}/>}
            <p className="my-5 text-center h4">Create account</p>
            <form className="border p-4 col-9 col-md-6 mx-auto" onSubmit={submitHandler}>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline input-border">
                        <input type="text" id="form3Example1" className="form-control" onChange={(e)=> setFirstName(e.target.value)}/>
                        <label className="form-label" for="form3Example1">First name</label>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline input-border">
                        <input type="text" id="form3Example2" className="form-control" onChange={(e)=> setLastName(e.target.value)} />
                        <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 input-border">
                    <input type="email" id="form3Example3" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                    <label className="form-label" for="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4 input-border">
                    <input type="password" id="form3Example4" className="form-control" onChange={(e)=> setPassword(e.target.value)}/>
                    <label className="form-label" for="form3Example4">Password</label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-dark btn-block mb-4">Register</button>

                <div className="d-flex">
                    <p>Already have an account?</p>
                    <Link to="/users/login" exact className="ms-3 text-warning">Log-In</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
