import React from 'react'
import './App.css';
import data from './Data'
const Portfolio = () => {
    return (
        <div className="container">
            <div className="head">
                <h2>Portfolio</h2>
            </div>
            <div className="candidate_investInfo">
                <p className='value'>Current Value</p>
                <div className="current_value">
                    <div className="total_money">
                        <span className='price'>$ 7,94,455.32 </span>
                        <span className='pricePercentage'>$13,108.80(+1.72%)</span>
                        <p>as of Jan 29 2025, 11:12 PM</p>
                    </div>

                    <div className="invested_amount">
                        <div className="invested">
                            <p>Invested Amount</p>
                            <span>$ 6,64,546.21</span>
                        </div>
                        <div className="returns">
                            <p>Returns</p>
                            <h3>$ 1,29,909.12</h3> <span className='returnPer'>(+19.54%)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* portfolio details */}

            <div className="details_container">
                {data.map((item, index) => {
                    const { CompanyName, investment, currentValue, returns } = item
                    return (
                        <div key={index} className="details">
                            <p className="company_name">{CompanyName}</p>
                            <button>SIP</button>

                            <div className="details_info">
                                <div className="inveset_info">
                                    <p>Investment</p>
                                    <span>{investment}</span>
                                </div>
                                <div className="current_info">
                                    <p>Current Value</p>
                                    <span>{currentValue}</span>
                                </div>
                                <div className="returns_info">
                                    <p>Returns</p>
                                    <span>{returns}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Portfolio
