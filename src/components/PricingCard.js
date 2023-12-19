import React from 'react'
import { Link } from 'react-router-dom'
// Link
import './pricingCard.css'
export default function PricingCard() {
  return (
    <>
    <div className="pricing">
        <div className="card-container">
            <div className="card">                
            <span className="bar">
                <h3>-Basic</h3>
                </span>    <span className="btc"><h1>$100</h1></span>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        Purchase Now
                    </Link>
            </div>
            <div className="card">
                
            <span className="bar">
                <h3>-Premium</h3>
                </span><span className="btc"><h1>$200</h1></span><p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        Purchase Now
                    </Link>
            </div>
            <div className="card">
            <span className="bar">
                <h3>-Basic</h3>
                </span>
                <span className="btc"><h1>$300</h1></span>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        Purchase Now
                    </Link>
            </div>
        </div>
        
    </div>
    </>
    )
}
