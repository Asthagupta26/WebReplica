import React from 'react';
import "./navbar.css";


export default function Navbar() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container1'>
                    <div className='header' >
                        <div className='d-flex-s'>


                            <div className="logo">
                                <img src="./LogoHeader.png" alt="Launcheazy" />
                            </div>

                            <div className="mobile-nav">
                                <img src="./3-lines.svg" alt="" />
                            </div>

                            <div className='d-flex web-nav'>
                                <ul className="nav-menu">

                                    <div className='d-flex'>
                                        <div className='free-tag'>

                                            <img src="./Freetag.png" alt="Free" />

                                        </div>
                                        <li className="nav-item dropdown">
                                            <a href="#" className='dropdown-toggle'>AI Tools</a>
                                            <ul className="dropdown-menu">
                                                <li>Tool 1</li>
                                                <li>Tool 2</li>

                                            </ul>
                                        </li>
                                    </div>

                                    <li className="nav-item">
                                        <a href="#" className='dropdown-toggle'>Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className='dropdown-toggle'>Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>

                                {/* Join Wishlist Button */}
                                <div className="wishlist-button1">
                                    <button>Join the Wishlist</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
}