import React from 'react';

const NavBar = () => {
    return (
        <div className='navbar container'>
            <div className="container">
             <div className="nav-container">
             <ul className="navbar-left">
                    <div className="navbar-logo">
                        <h2>Riduanul <span style={{color:'red'}}> Haque</span></h2>
                    </div>
                </ul>
                <ul className="navbar-right">
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
             </div>
            </div>
        </div>
    );
};

export default NavBar;