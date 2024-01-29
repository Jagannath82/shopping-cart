import { useSelector } from 'react-redux';

import logo from './images/logo.png'
import { NavLink } from 'react-router-dom';

export default function HeaderMenu() {

    const products = useSelector(state => state.products);
    return (<>
        <head>
            <link rel="icon" href="images/fevicon.png" type="image/gif" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,800;1,400&family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
        </head>
        <div class="header_section">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="index.html"><img src={logo} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/index">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="splashImage">Splash Image</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/addProduct">Add Product</NavLink>
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


