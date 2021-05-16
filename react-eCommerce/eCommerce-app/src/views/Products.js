import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProdctsList} from '../store/actions/productsListActions';
import ProductCard from '../components/product/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Products = () => {

    const products = useSelector(state => state.productsList.products);
    const loading = useSelector(state => state.productsList.loading);
    const err = useSelector(state => state.productsList.err);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProdctsList())
    },[dispatch])

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4 pb-1 my-5'>
            {loading && <Loading/>}
            {err && <Error err={err}/>}
            {products && products.map(product => <ProductCard key={product._id} product={product}/>)}
        </div>
    )
};

export default Products;
