import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import {logOut} from '../../store/actions/userLogInActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector(state => state.cartReducer.cartTotalQuantity);
    const {userInfo} = useSelector(state => state.userLogInReducer);

    return (
        <nav className='navbar'>
            <div className='container d-flex justify-content-between align-items-center'>

                {/* <!-- Logo/Navbar-brand --> */}
                <h1><NavLink exact to='/'>Logo</NavLink></h1>

                <ul className='d-flex justify-content-between align-items-center'>

                    {/* <!-- Products-Navbat-link --> */}
                    <li><NavLink exact to='/'>Products</NavLink></li>
                    
                    {/* <!-- Account-Dropdown --> */}
                    <li className="nav-item dropdown">
                        <span
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i className="fas fa-user"></i> Account
                        </span>
                        <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                {
                                    userInfo 
                                    ? (<div className='d-flex justify-content-between align-items-center ms-2'>
                                        <h5 className='mt-1'>{userInfo.firstName}</h5> 
                                    </div>)
                                    : (<Link to='/login' className="dropdown-item ms-0 text-dark">Log In</Link>)
                                }
                            </li>
                            <li><Link className="dropdown-item ms-0 text-dark" to='/myOrder'>My Order</Link></li>
                            <li>
                                {
                                    userInfo 
                                    ? (<>
                                    <li><hr className="dropdown-divider" /></li>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link  to={'/#'} className="dropdown-item ms-0 text-dark pt-0" onClick={() => dispatch(logOut())}>Log Out</Link>
                                    </div>
                                    </>)
                                    : ('')
                                }
                            </li>
                        </ul>
                    </li>

                    {/* <!-Cart-Dropdown --> */}
                    <li className="nav-item dropdown cart-link">
                        <span
                        className="nav-link dropdown-toggle hidden-arrow pe-3"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <span className='p-0'><i className="fas fa-cart-plus"></i></span>
                        {cartTotalQuantity > 0 && <span className="badge qty-badge">{cartTotalQuantity}</span>}
                        </span>
                        <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="navbarDropdownMenuLink">
                            <ShoppingCart/>
                        </ul>
                    </li>

                    {userInfo && userInfo.isAdmin && (
                    <li className="nav-item dropdown">
                        <span
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Admin
                        </span>
                        <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item ms-0 text-dark" to='/admin/orders'>Orders</Link></li>
                        </ul>
                    </li>)}

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
