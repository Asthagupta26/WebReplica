import React from 'react';
import './marketingTools.css';

export default function MarketingTools() {
    return (
        <>
            <div className="container-fluid">

                <div className="box">
                    <div className="left">
                        <div className="small-head">Marketing Tools</div>
                        <div>
                            <div className="d-flex">
                                <span className="heading">
                                    Skyrocket</span>
                                <img src="./Rocket.png" alt="" className='rocket' />
                            </div>
                            <span className='heading'>your growth with advanced marketing tools</span>
                        </div>
                        <div className="line1">
                            A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.
                        </div>
                        <div className="wait-btn">
                            Join the waitlist
                        </div>
                    </div>
                    <div className="cards1">
                        <div className="card-12 card-blue">
                            <div className="card-heading">Reputation Management</div>
                            <div className="card-line">
                                Improve online reputation and business listings.
                            </div>
                        </div>
                        <div className="card-12 card-yellow">
                            <div className="card-heading">Smart Inbox</div>
                            <div className="card-line">
                                Manage customer conversations from every channel in a single, easy-to-use inbox.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}