import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/nav.css';


function Nav() { 
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/userprofile">UserProfile</Link>
        </nav>
    );
}

export default Nav;
