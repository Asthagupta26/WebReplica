import React from 'react';
import './marketingRecipes.css';


export default function MarketingRecipes() {
    return (
        <>
            <div className="container-fluid">
                <div className="container mar">
                    <div className="main-bg">
                        <div className="top">
                            <div className="small-heading">Marketing Recipes</div>
                            <div className="heading1">Attract. Convert. Retain.</div>
                            <div className="top-line">
                                A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.
                            </div>
                            <div className="lib-btn">
                                Visit the library
                                <img src="./north_east.svg" alt="" />
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-1">
                                <img src="./Attract.png" alt="" className='card-img' />
                                <div className="card-bottom">
                                    <div className="card-small">Campaigns</div>
                                    <div className="card-heading">Attract potential clients</div>
                                    <div className="card-line">
                                        Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, timely delivery across channels.
                                    </div>
                                    <div className="card-nav">View all Campaigns &gt;</div>
                                </div>
                            </div>
                            <div className="card-1">
                                <img src="./convert.png" alt="" className='card-img' />
                                <div className="card-bottom">
                                    <div className="card-small">Workflows</div>
                                    <div className="card-heading">Convert prospects into profits</div>
                                    <div className="card-line">
                                        Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion.
                                    </div>
                                    <div className="card-nav">View all Workflows &gt;</div>
                                </div>
                            </div>
                            <div className="card-1">
                                <img src="./retain.png" alt="" className='card-img' />
                                <div className="card-bottom">
                                    <div className="card-small">Programs</div>
                                    <div className="card-heading">Retain existing customers</div>
                                    <div className="card-line">
                                        Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs.
                                    </div>
                                    <div className="card-nav">View all Programs &gt;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-section">
                        <div className="down-head">
                            Accelerate growth. <br />
                            Maximize savings. <br />
                            Reduce efforts.
                        </div>
                        <div className="d-flex-s down-cards">
                            <div className="down-card">
                                <div className="down-card-head">160%</div>
                                <div className="down-card-line">
                                    Increase in revenue generated for your business
                                </div>
                            </div>
                            <div className="down-card">
                                <div className="down-card-head">$60k</div>
                                <div className="down-card-line">
                                    Saved on annual marketing expenditure
                                </div>
                            </div>
                            <div className="down-card">
                                <div className="down-card-head">12</div>
                                <div className="down-card-line">
                                    hours saved on marketing efforts weekly
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}