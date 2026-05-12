import { Link, NavLink } from "react-router";

function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="">
                <img src="./images/lastdrop-logo-1.png" alt="lastdrop logo" className="navbar-logo"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/chi-siamo" className="nav-link">Chi Siamo</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar