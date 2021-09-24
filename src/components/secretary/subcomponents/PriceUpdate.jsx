/* eslint-disable react/no-array-index-key */
import React from 'react'
import { GreenArrow, RedArrow } from './GreenArrow';
import './PriceUpdate.css';

const PriceUpdate = ({ data }) => (
   <div className="priceupdate">
        <div className="priceupdate_header">
            <h3>Price Update</h3>
      </div>
      {data.map((item, index) => (
         <div key={index} className="pricecard">
            <span>{item.companyName}</span>
            <span>{item.companyPrice}</span>
            <span>{item.companyChange}</span>
            <span>{item.companyGain ? <GreenArrow /> : <RedArrow />}</span>
         </div>
      ))}
   </div>
);

export default PriceUpdate
