import React from 'react';
import { GreenArrow } from './GreenArrow';
import './MarketChart.css';
import companyGraph from '../../../assets/graph.png';

const MarketChart = ({ companyName, subText, change, subChange, price }) => (
   <>
      <div className="dashboard_requests_header">
         <h3>Total Market Chart</h3>
      </div>
      <div className="marketchart">
         <div className="marketchart_headers">
            <div className="company_details">
               <h4>COMPANY</h4>
            </div>
            <div className="company_details">
               <h4>CHANGE</h4>
            </div>
            <div className="company_details">
               <h4>7DAYS</h4>
            </div>
            <div className="company_details">
               <h4>PRICE</h4>
            </div>
         </div>
         <hr />
         <div className="marketchart_values">
            <div className="company_details">
               <div className="company_details_logo">
                  <img
                     src="http://www.clipartbest.com/cliparts/pi5/XqG/pi5XqG47T.jpg"
                     alt="company_details_logo"
                  />
               </div>
               <div className="company_details_text">
                  <h1>{companyName}</h1>
                  <p>{subText}</p>
               </div>
            </div>

            <div className="company_details">
               <div className="company_details_text">
                  <h1>{change}</h1>
                  <p>{subChange}</p>
               </div>
               <div className="company_details_logo">
                  <GreenArrow />
               </div>
            </div>

            <div className="company_details">
               <div className="company_details_graph">
                  <img src={companyGraph} alt="company_details_graph" />
               </div>
            </div>

            <div className="company_details">
               <div className="company_details_price">
                  <h1>{price}</h1>
               </div>
            </div>
         </div>
      </div>
   </>
);

export default MarketChart;
