import HeaderMenu from "./components/header/HeaderMenu";
import {
    NavLink,
    Outlet
} from "react-router-dom";
import logo from './images/logo.png'

export default function LayoutComponent() {
    return (
        <div>
            <header>
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
                                        <NavLink className="nav-link" to="splashImage">Splash Image</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link" to="/addProduct">Add Product</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                < Outlet />
            </main>
            <footer></footer>
        </div>
    );
}