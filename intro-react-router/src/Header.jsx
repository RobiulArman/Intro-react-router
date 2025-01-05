// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/user">Users</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
