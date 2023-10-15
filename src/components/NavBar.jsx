import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='Navbar'>
            <span> Laptain's Cog </span>
            <Link to="/">Home</Link>
            <Link to="/logs">All Logs</Link>
            <Link to="/new">New Log</Link>
            
        </div>
    );
}

export default NavBar;
