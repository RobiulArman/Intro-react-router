// import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h2>Navbar</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">Users</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    );
};

export default Header;
