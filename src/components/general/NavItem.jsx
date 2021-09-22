import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ linkPath, linkIcon, linkText }) => (
   <div className="nav_item">
      <div className="nav_item_icon">
         <img src={linkIcon} alt="" srcSet="" />
      </div>
      <Link to={linkPath}>{linkText}</Link>
   </div>
);

export default NavItem;
