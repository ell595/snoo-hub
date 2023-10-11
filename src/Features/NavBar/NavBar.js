import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div class="nav">
            <p>Snoo Hub</p>
            <input type="text" className="serach" placeholder="search" />
        </div>
    )
}

export default NavBar;