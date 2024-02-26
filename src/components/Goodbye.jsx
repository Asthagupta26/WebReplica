import React from 'react';
import './Goodbye.css';

export default function Goodbye() {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="box2">
                        <div className="content1">
                            <div className='web-byee'>
                                <div className="d-flex">
                                    <span className="heading">Say goodbye</span>
                                    <img src="./bye.png" alt="" className='byee' />
                                    <span className="heading">to excessive</span>
                                </div>
                                <span className="heading">
                                    spending on designers, experts, <br />
                                </span>
                                <span className='heading'>
                                    and multiple tools
                                </span>
                            </div>
                            <div className="mobile-byee">
                                <img src="./bye.png" alt="" className='byee' />
                                <div className="heading">
                                    Say goodbye to excessive spending on designers, experts, and multiple tools
                                </div>
                            </div>
                            <div className="line">
                                Say hello to Launcheazy - your superstar marketer in your pocket!
                            </div>
                            <div className="input-container solo">
                                <input type="text" className="input" placeholder='Enter your work email' />
                                <div className="wishlist-button">
                                    Join the waitlist
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}