import React from 'react';
import "./frame.css";
import "./navbar.css";


export default function Frame() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container2'>
                    <div className='layout'>
                        <div className='signup-box'>
                            <div className='dot'>

                            </div>
                            <div className='signup-box-text1'>
                                Our exclusive beta is live.
                            </div>
                            <div className='signup-box-text2'>
                                Sign Up for free &gt;
                            </div>
                        </div>
                        <div className='cursor-box'>
                            <marquee behavior="alternate" direction="up" scrollamount="5">
                                <div className="blue main-heading">
                                    Generate leads
                                </div>
                                <div className="blue main-heading">
                                    Convert Prospects
                                </div>
                                <div className="blue main-heading">
                                    Retain Customers
                                </div>
                            </marquee>
                            <div className="black main-heading">
                                in 3 clicks for your business.
                            </div>
                            <img src="./cursor.svg" alt="" className='cursor' />
                        </div>
                        <div className='content'>
                            Simplify your marketing efforts with AI. Use a collection of ready-made, successful marketing strategies that practically run themselves.
                        </div>
                        <div className="input-container">
                            <input type="text" className="input" placeholder='Enter your work email' />
                            <div className="wishlist-button">
                                Join the waitlist
                            </div>
                        </div>
                        <div className="ai-line">
                            Get access to a comprehensive directory of <span className='yellow'>AI Tools</span> and <span className='green'>ChatGPT Prompts</span> to elevate your business.
                        </div>

                    </div>
                    {/* <div>
                        <div className='color-bg-box'>
                            <div className="color-bg">
                                <div className="d-flex-s">
                                    <div className="color-text">
                                        Explore AI-recommended marketing recipes to effectively market your business
                                    </div>
                                    <div className="color-btns">

                                    </div>
                                </div>
                                <img src="./Home.png" alt="" className='color-img' />
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="hoverable">
                    <img src="./Variant=Expanded.webp" alt="" className='main-img' />
                    <img src="./hover-change.png" alt="" className='hover-img' />
                </div>
            </div>
        </>
    )
}