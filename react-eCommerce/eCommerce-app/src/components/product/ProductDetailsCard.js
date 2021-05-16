import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';

const ProductDetailsCard = ({product}) => {

    const dispatch = useDispatch()
    const add = () => {
        dispatch(addToCart(product))
    }
    return (
        <div className="container px-0 z-depth-1 mt-4">
            {/* <!--Section: Content--> */}
            <section className="text-center">


                <div className="row">

                <div className="col-lg-6">

                        {/* <!-- image  --> */}
                        <div className="carousel-item active">
                            <img src={product.image} alt="First slide" className="img-fluid"/>
                        </div>

                </div>

                <div className="col-lg-6 text-center text-md-left">

                    <h2 className="h2-responsive text-center text-md-left product-name shadow py-2 dark-grey-text mb-1 mt-3 mt-md-4 ml-xl-0 ">
                    <strong>{product.name}</strong>
                    </h2>
                    <h3 className="h3-responsive text-center text-md-left mb-4 mt-3 ml-xl-0 shadow py-2">
                    <span className="red-text">
                        <strong>$<span className="text-danger">{product.price}</span></strong>
                    </span>
                    </h3>

                    {/* <!-- Accordion card --> */}
                    <div className="card">

                        {/* <!-- Card header --> */}
                        <div className="card-header" role="tab" id="headingOne1">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                            <h5 className="mb-0 text-dark">Description</h5>
                        </a>
                        </div>

                        {/* <!-- Card body --> */}

                        <div className="card-body">
                            {product.description}
                        </div>

                    </div>
                    {/* <!-- Accordion card --> */}


                    {/* <!-- Add to Cart --> */}
                    <div>

                        <div className="row my-5">
                        <div className="col-md-12 text-center text-md-left text-md-right">
                            <button className="btn btn-dark btn-rounded" onClick={add}>
                            <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                        </div>
                        </div>
                    </div>
                    {/* <!-- /.Add to Cart --> */}

                </div>

                </div>

            </section>
            {/* <!--Section: Content--> */}


        </div>
    )
}

export default ProductDetailsCard;
