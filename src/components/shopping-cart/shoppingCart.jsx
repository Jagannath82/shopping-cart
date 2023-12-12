import React, { Component } from 'react';
import './shoppingCart.css'; // Import regular stylesheet
import Product from '../product';

class ShoppingCart extends Component {
    render() {
        // reference as a js object
        return (
            <>
                <div class="container pb-5 mt-n2 mt-md-n3">
                    <div class="row">
                        <div class="col-xl-9 col-md-8">
                            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary-custom">
                                <span>Products</span><a class="font-size-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-chevron-left marginOne">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>Continue shopping</a></h2>

                            <Product />

                            <div class="col-xl-3 col-md-4 pt-3 pt-md-0">
                                <h2 class="h6 px-4 py-3 bg-secondary text-center">Subtotal</h2>
                                <div class="h3 font-weight-semibold text-center py-3">$325.00</div>
                                <hr />
                                <h3 class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">Note</span>Additional
                                    comments</h3>
                                <textarea class="form-control mb-3" id="order-comments" rows="5"></textarea>
                                <a class="btn btn-primary btn-block" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-credit-card mr-2">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                    </svg>Proceed to Checkout
                                </a>
                                <div class="pt-4">
                                    <div class="accordion" id="cart-accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="accordion-heading font-weight-semibold"><a href="#promocode" role="button"
                                                    data-toggle="collapse" aria-expanded="true" aria-controls="promocode">Apply
                                                    promo code<span class="accordion-indicator"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-chevron-up">
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg></span></a></h3>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>);
    }
}

export default ShoppingCart;