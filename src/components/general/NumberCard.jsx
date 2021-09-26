import React from 'react';
import './NumberCard.css';
import { NavLink } from 'react-router-dom';

const NumberCard = ({ text, number, bgColor }) => {
   const path = text.toLowerCase() === 'pending bills'? 'invoices' : 'treatedrequests';
   return (
      <div style={{ background: bgColor }} className="numbercard">
         <NavLink to={path} style={{textDecoration:'none', color:'#fff'}}>
            <p className="numbercard_text">{text}</p>
            <p className="numbercard_number">{number}</p>
         </NavLink>
      </div>
   );};

export default NumberCard;
