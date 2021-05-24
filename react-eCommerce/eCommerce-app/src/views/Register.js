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
    const  [isAdmin, setIsAdmin] = useState(false);

    const {userInfo, loading, err} = useSelector(state => state.userRegisterReducer);

    const changeHandler = (e) => {
        if(e.target.value === 'Admin'){
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(firstName, lastName, email, password, isAdmin))
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
                    <div>
                        <input type="text" placeholder="First name" className="form-control py-2" onChange={(e)=> setFirstName(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col">
                    <div>
                        <input type="text" placeholder="Last name" className="form-control py-2" onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-4">
                    <input type="email" placeholder="Email address" className="form-control py-2" onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-4">
                    <input type="password" placeholder="Password" className="form-control py-2" onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                {/* <!-- Role input --> */}
                <select class="form-select mb-4" onChange={changeHandler}>
                    <option disabled selected>Select Role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-dark btn-block mb-4">Register</button>

                <div className="d-flex">
                    <p>Already have an account?</p>
                    <Link to="/login" exact className="ms-3 text-warning">Log-In</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
