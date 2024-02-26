import React from 'react';
import "./footer.css";


export default function Footer() {
    return (
        <>
            <div className='container-fluid some'>
                <div className="container">
                    <div className="footer-layout">
                        <div className='footer-layout-top'>
                            <div className='footer-layout-top-left'>
                                <img src="./Logo.png" alt="" className='footer-layout-top-left-img1' />
                                <div className='footer-layout-top-left-line'>
                                    Engage customers, convert prospects effortlessly
                                </div>
                                <img src="./icons.svg" alt="" className='footer-layout-top-left-img2' />
                            </div>
                            <div className='footer-layout-top-right'>
                                <div className='points'>
                                    <div className='d-flex'>
                                        <span className='footer-layout-top-right-heading'>AI Tools</span>
                                        <img src="./Freetag.png" alt="" />
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        ChatGPT Prompts
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        AI Tools Directory
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        AI QR Generator
                                    </div>
                                </div>
                                <div className='points'>
                                    <div className='footer-layout-top-right-heading'>
                                        Resources
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        Marketplace
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        Blogs
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        Help Center
                                    </div>
                                </div>
                                <div className='points'>
                                    <div className='footer-layout-top-right-heading'>
                                        Company
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        About Us
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        Pricing
                                    </div>
                                    <div className='footer-layout-top-right-value'>
                                        Contact Us
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="./footer-img.png" alt="" className='footer-web' />
                        <img src="./footer-mobile.png" alt="" className='footer-mobile' />
                        <div className="hori-line"></div>
                        <div className="d-flex-s fot-down">
                            <div className="copyright">
                                Copyright 2023 Launcheazy AI Private Limited. All rights reserved.
                            </div>
                            <div className="copyright">
                                Privacy | Terms of Service
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}