import { useSelector } from 'react-redux';

import logo from './images/logo.png'
import { Link } from 'react-router-dom';

export default function HeaderMenu() {

    const products = useSelector(state => state.products);
    console.log(products);

    return (<><div class="header_section">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html"><img src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to="/index">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="about.html">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="search_icon"><i class="fa fa-search" aria-hidden="true"></i></div>
                    </form>
                </div>
            </nav>
        </div>
    </div></>)
}


