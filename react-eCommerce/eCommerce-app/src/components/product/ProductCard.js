import React from 'react';
import {Link} from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <Link exact to={`products/${product._id}`} className="col text-dark hover-shadow">
            <div className="card h-100">
            <img
                src={product.image}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body text-center">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.short}</p>
            </div>
            <div className="card-footer text-center bg-light">
                <small className="text-muted h4">$<span className='text-danger h4'>{product.price}</span></small>
            </div>
            </div>
        </Link>
    )
};

export default ProductCard;
