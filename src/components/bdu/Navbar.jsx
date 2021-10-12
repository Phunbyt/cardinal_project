/* eslint-disable react/no-array-index-key */
import React from 'react';
import NavItem from '../general/NavItem';
import billsIcon from '../../assets/bills.png';
import dashboardIcon from '../../assets/dashboard.png';
import logoutIcon from '../../assets/logout.png';
import paymentIcon from '../../assets/payment.png';
import reportsIcon from '../../assets/reports.png';
import requestsIcon from '../../assets/requests.png'
import cardinalLogo from '../../assets/CSRLLogo1.png';

const navItems = [
   {
      linkPath: "/bdudashboard/a",
      linkIcon: dashboardIcon,
      linkText: "Dashboard",
   },
   {
      linkPath: "/bdudashboard/requests",
      linkIcon: requestsIcon,
      linkText: "Requests",
   },
   {
      linkPath: "/bdudashboard/invoices",
      linkIcon: billsIcon,
      linkText: "Bills/Invoices",
   },
   {
      linkPath: "/bdudashboard/reports",
      linkIcon: reportsIcon,
      linkText: "Reports",
   },
];

const Navbar = () => (
   <div className="nav_bar">
      <div className="cardinal_logo">
         <img src={cardinalLogo} alt="cardinalLogo" />
      </div>
      <div className="nav_bar_section_one">
         {navItems.map((item, index) => (
            <NavItem
               key={index}
               linkPath={item.linkPath}
               linkIcon={item.linkIcon}
               linkText={item.linkText}
            />
         ))}
      </div>
      <div className="nav_bar_section_two">
         <NavItem linkPath="/logout" linkIcon={logoutIcon} linkText="Logout" />
      </div>
   </div>
);

export default Navbar;
