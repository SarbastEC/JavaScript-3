import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart, deleteItem} from '../../store/actions/cartActions';

const CartItem = ({product}) => {

    const dispatch = useDispatch();

    const add = (e) => {
        e.stopPropagation()
        dispatch(addToCart(product))
    }

    const remove = (e) => {
        e.stopPropagation()
        dispatch(removeFromCart(product._id))
    }

    const deleteCartItem = (e) => {
        e.stopPropagation()
        dispatch(deleteItem(product._id))
    }

    return (
        <tr>
        {/* cart item  */}
        {/* // <!-- Table row  product--> */}
            <th scope="row">
                <Link to={`/products/${product._id}`} className='p-0'><img src={product.image} alt="" className='cart-image'/></Link>
                {/* product.image */}
            </th>
            <td>
                <h5 className="mt-2 h6">
                <Link to={`/products/${product._id}`} className='p-0'><strong className='text-dark'>{product.name}</strong></Link>
                </h5>
            </td>
            <td></td>
            <td>
                <h6 className="mt-2 h6">${product.price}</h6>
            </td>
            <td className='text-center'>
                <div className='d-flex align-items-center'>
                    <button className='btn btn-sm px-2 btn-dark' onClick={remove}>-</button>
                    <span className='text-dark h5'>{product.quantity}</span>
                    <button className='btn btn-sm px-2 btn-dark' onClick={add}>+</button>
                </div>
            </td>
            <td className="font-weight-bold text-center">
                <h6 className="mt-2">${product.quantity*product.price}</h6>
            </td>
            <td>
                <button type="button" className="btn btn-sm btn-danger mt-2" data-toggle="tooltip" data-placement="top" 
                onClick={deleteCartItem}>X
                </button>
            </td>
        {/* <!-- /.Table row --> */}
        </tr>
    )
}

export default CartItem;
