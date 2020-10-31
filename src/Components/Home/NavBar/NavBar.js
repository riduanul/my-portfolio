import React from 'react';
import img from '../../../Images/me.png'

const NavBar = () => {
    return (
        // <div classNameName='navbar container'>
        //     <div classNameName="container">
        //      <div classNameName="nav-container col-md-6 col-xs-12">
        //      <ul classNameName="navbar-left">
        //             <div classNameName="navbar-logo">
        //                 <h2>Riduanul <span style={{color:'red'}}> Haque</span></h2>
        //             </div>
        //         </ul>
        //         <ul classNameName="navbar-right">
        //             <li><a href="">Home</a></li>
        //             <li><a href="">Projects</a></li>
        //             <li><a href="">Blogs</a></li>
        //             <li><a href="">About</a></li>
        //             <li><a href="">Contact</a></li>
        //         </ul>
        //      </div>
        //     </div>
        // </div>
        <nav className=' navbar navbar-expand-md fixed-top'>
           <div className="container-fluid">
           <button className="navbar-toggler" data-toggle="collapse" data-target= "#collapse_target">
               <span className='navbar-toggler-icon'></span>
           </button>
           <div className="collapse navbar-collapse " id= "collapse_target">
            <h4 style={{color:'white'}}>Riduanul<span style={{color:"red"}}>Haque</span> </h4>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='active nav-link'href="#"> Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'href="#"> Projects</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'href="#"> Blog</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'href="#"> About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'href="#"> Contact</a>
                </li>
            </ul>
            </div>
           </div>
        </nav>
    );
};

export default NavBar;