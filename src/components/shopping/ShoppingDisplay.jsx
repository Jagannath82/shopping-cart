import { Component } from "react";
import img1 from './images/img1.png'
import img2 from './images/img-2.png'
import img3 from './images/img-3.png'
import img4 from './images/img-4.png'
import img5 from './images/img-5.png'
import img6 from './images/img-6.png'
import ShoppingProduct from "./ShoppingProduct";
import products from './product.json'


export default function ShoppingDisplay() {
    return (<>
        {console.log("product::" +products)}
        <div class="container-fluid">
            <div class="layout_border">
                <div class="vagetables_section layout_padding margin_bottom90">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h1 class="vagetables_taital">Our Vagetables</h1>
                                <p class="vagetables_text">Passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                            </div>
                        </div>
                        <div class="courses_section_2">
                            <div class="row">
                                {products.map(product => 
                                   (<ShoppingProduct imgName={require('./images/'+product.imageName)} 
                                    productName={product.productName} 
                                    price={product.price} 
                                    productId={product.productId}/>)
                                )}
                            </div>
                        </div>
                        {/* <div class="vagetables_section_2">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="hover01 column">
                                        <figure><img src={img4} alt="image4" /></figure>
                                    </div>
                                    <h3 class="harshal_text">Cyrus</h3>
                                    <h3 class="rate_text">$19</h3>
                                    <div class="read_bt_1"><a href="#">Read More</a></div>
                                </div>
                                <div class="col-md-4">
                                    <div class="hover01 column">
                                        <figure><img src={img5} alt="image5" /></figure>
                                    </div>
                                    <h3 class="harshal_text">Elianna</h3>
                                    <h3 class="rate_text">$19</h3>
                                    <div class="read_bt_1"><a href="#">Read More</a></div>
                                </div>
                                <div class="col-md-4">
                                    <div class="hover01 column">
                                        <figure><img src={img6} alt="image6" /></figure>
                                    </div>
                                    <h3 class="harshal_text">Friedman</h3>
                                    <h3 class="rate_text">$19</h3>
                                    <div class="read_bt_1"><a href="#">Read More</a></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright_section">
            <div class="container">
                <p class="copyright_text">2023 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
            </div>
        </div></>);

}