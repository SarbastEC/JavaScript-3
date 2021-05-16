import React from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import { useHistory} from 'react-router-dom';


const ShoppingCart = () => {
    const {userInfo} = useSelector(state => state.userLogInReducer);
    const cartProducts = useSelector(state => state.cartReducer.cartProducts);
    const cartTotalAmount = useSelector(state => state.cartReducer.cartTotalAmount);

    const history = useHistory();
    
    const checkOutHandler = () => {
        if(userInfo){
            history.push('/shipping')
        }
        else {
            history.push('/login')
        }
    }

    return (
        <div>
            {

            cartProducts.length 

            ? <div className="container  py-3 z-depth-1 rounded">
                {/* <!--Section: Content--> */}
                <section className="dark-grey-text">

                {/* <!-- Shopping Cart table --> */}
                <div className="table-responsive">

                    <table className="table product-table mb-0">

                    {/* <!-- Table head --> */}
                    <thead className="mdb-color lighten-5">
                        <tr>
                        <th></th>
                        <th className="font-weight-bold">
                            <strong>Product</strong>
                        </th>
                        <th></th>
                        <th className="font-weight-bold">
                            <strong>Price</strong>
                        </th>
                        <th className="font-weight-bold text-center">
                            <strong>QTY</strong>
                        </th>
                        <th className="font-weight-bold">
                            <strong>Amount</strong>
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    {/* <!-- /.Table head --> */}



                    {/* <!-- Table body --> */}
                    <tbody>
                        {/* // <!-- loop--> */}

                        {
                        cartProducts && cartProducts.map(product => (
                            <CartItem key={product._id} product={product}/>
                        ))
                        }

                    </tbody>
                    {/* <!-- /.Table body --> */}



                    {/* <!-- /.Table foot --> */}
                    <tfoot>
                        {/* <!-- Total row --> */}
                        <tr>
                        <td colspan="3"></td>
                        <td>
                            <h4 className="mt-2">
                            <strong>Total</strong>
                            </h4>
                        </td>
                        <td className="text-right">
                            <h4 className="mt-2">
                            <strong>${cartTotalAmount}</strong>
                            </h4>
                        </td>
                        <td colspan="3" className="text-right">
                            <button type="button" className="btn btn-dark btn-rounded" onClick={checkOutHandler}>
                                Check out<i className="fas fa-angle-right right"></i>
                            </button>
                        </td>
                        </tr>
                        {/* <!-- Total row --> */}
                    </tfoot>
                    {/* <!-- /.Table foot --> */}

                    </table>

                </div>
                {/* <!-- /.Shopping Cart table --> */}

                </section>
                {/* <!--Section: Content--> */}
            </div>

            : <div className='text-center border rounded bg-dark text-light p-4'>
                <h4>Your cart is empty</h4>
            </div>
            }
        </div>
    )
}

export default ShoppingCart;
