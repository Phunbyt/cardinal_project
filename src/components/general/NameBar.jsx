import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './NameBar.css';

const iconColor = '#9FA2B4';
const iconSize = '2em';

const NameBar = ({ title }) => (
   <div className="namebar">
      <SearchIcon style={{ color: iconColor, fontSize: iconSize }} />
      <NotificationsIcon
         style={{ marginLeft: '.6em', color: iconColor, fontSize: iconSize }}
      />
      <div className="profile">
         <p className="namebar_name">{title}</p>
         <Avatar
            sx={{ width: 50, height: 50 }}
            style={{ border: '1px solid red', marginLeft: '20px' }}
            src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
         />
      </div>
   </div>
);

export default NameBar;
