import React from 'react';
import { NavLink } from 'react-router-dom';

const RelatedLinks = ({ linkPath, linkText }) => (
   <NavLink
      to={linkPath}
      className="nav_item"
      style={{
         textDecoration: 'none',
         color: '#000000',
         fontSize: '1.2rem',
      }}
      activeStyle={{
         fontWeight: 'bold',
         color: '#002564',
         textDecoration: 'none',
      }}
   >
      <p>{linkText}</p>
   </NavLink>
);

export default RelatedLinks;
