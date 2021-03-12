import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/navbar.scss';

const Navbar = () => (
    <nav className="navbar navbar-expand-sm navbar-light border-bottom sticky-top">
        <div className="container">
            <Link to="/" className="navbar-brand">
                Aircnc
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Host your Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Host your Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Help
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <button
                                type="button"
                                className="btn btn-primary btn-primary-hover btn-rounded"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
