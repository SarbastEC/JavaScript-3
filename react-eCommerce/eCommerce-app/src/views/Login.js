import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {logIn} from '../store/actions/userLogInActions';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {userInfo, loading, err} = useSelector(state => state.userLogInReducer);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(logIn(email, password))
        try { history.push(history.location.state.from.pathname) }
        catch { history.push('/') }
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
            <p className="my-5 text-center h4">Log In</p>  
            <form className="border p-4 col-9 col-md-6 mx-auto" onSubmit={submitHandler} >
                {/* // <!-- Email input --> */}
                <div className="mb-4 input-border">
                    <input type="email"  placeholder="Email address" className="form-control py-2" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-4 input-border">
                    <input type="password" placeholder="Password" className="form-control py-2" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-dark btn-block mb-4">Log in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <Link exact to='/register' className='text-warning'> Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
