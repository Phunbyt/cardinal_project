import React from 'react';
import { NavLink } from 'react-router-dom';

const RequestCard = ({ linkPath, linkText, linkIcon, bgColor }) => (
   <NavLink
      to={linkPath}
      className="nav_item"
      style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: '1em 2em',
         textDecoration: 'none',
         color: '#ffffff',
          background: bgColor,
         borderRadius: '.5em'
      }}
   >
      <div className="nav_items">
         <div className="nav_item_icon">
            <img src={linkIcon} alt="" srcSet="" />
         </div>

         <p>{linkText}</p>
      </div>
   </NavLink>
);

export default RequestCard;
