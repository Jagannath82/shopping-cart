import { Component } from "react";

class ShippingEstimate extends Component {
    render() {
        return (<>
            <div class="card">
                <div class="card-header">
                    <h3 class="accordion-heading font-weight-semibold"><a class="collapsed" href="#shipping"
                        role="button" data-toggle="collapse" aria-expanded="true"
                        aria-controls="shipping">Shipping estimates<span
                            class="accordion-indicator"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-up">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg></span></a></h3>
                </div>
                <div class="collapse" id="shipping" data-parent="#cart-accordion">
                    <div class="card-body">
                        <form class="needs-validation" novalidate>
                            <div class="form-group">
                                <select class="form-control custom-select" required>
                                    <option value>Choose your country</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Finland">Finland</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="United States">United States</option>
                                </select>
                                <div class="invalid-feedback">Please choose your country!</div>
                            </div>
                            <div class="form-group">
                                <select class="form-control custom-select" required>
                                    <option value>Choose your city</option>
                                    <option value="Bern">Bern</option>
                                    <option value="Brussels">Brussels</option>
                                    <option value="Canberra">Canberra</option>
                                    <option value="Helsinki">Helsinki</option>
                                    <option value="Mexico City">Mexico City</option>
                                    <option value="Ottawa">Ottawa</option>
                                    <option value="Washington D.C.">Washington D.C.</option>
                                    <option value="Wellington">Wellington</option>
                                </select>
                                <div class="invalid-feedback">Please choose your city!</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="ZIP / Postal code"
                                    required />
                                <div class="invalid-feedback">Please provide a valid zip!</div>
                            </div>
                            <button class="btn btn-outline-primary btn-block" type="submit">Calculate
                                shipping</button>
                        </form>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default ShippingEstimate;