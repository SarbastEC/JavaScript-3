import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getOneProduct, setProduct} from '../store/actions/productActions';
import Loading from '../components/Loading';
import ProductDetailsCard from '../components/product/ProductDetailsCard';
import Error from '../components/Error';

const ProductDetails = () => {

    const product = useSelector(state => state.productDetails.product);
    const loading = useSelector(state => state.productDetails.loading);
    const err = useSelector(state => state.productDetails.err)
    const id = useParams().id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id))
        return () => {
            dispatch(setProduct(null))
        }
    },[dispatch, id])

    
    return (
        <div>
            {loading && <Loading/>}
            {err && <Error err={err}/>}
            {product && <ProductDetailsCard product={product}/>}
        </div>
    )
};

export default ProductDetails;
