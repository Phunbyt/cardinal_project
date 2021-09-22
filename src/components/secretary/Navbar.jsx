import React from 'react';
import NavItem from '../general/NavItem';
import testIcon from '../../assets/create.png';

const Navbar = () => (
   <div>
      <NavItem linkPath="/testing" linkIcon={testIcon} linkText="testing" />
   </div>
);

export default Navbar;
