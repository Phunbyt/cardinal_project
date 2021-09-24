import React from 'react'
import { CardHeader, Avatar } from '@mui/material';

import callIcon from '../../../assets/callx.png';
import emailIcon from '../../../assets/emailx.png';
import chatIcon from '../../../assets/messagex.png';

const size = 70;
const cardHeaderStyles = {
    width: '100%',
   display: 'flex',
    flexDirection: 'column',
   justifyContent: 'center',
};
const ChatCall = () => (
       <div style={{display:'flex'}}>
          <CardHeader
             style={cardHeaderStyles}
             avatar={
                <Avatar
                   variant="square"
                   sx={{ width: size, height: size }}
                   src={callIcon}
                />
             }
             title="Call"
          />
          <CardHeader
             style={cardHeaderStyles}
             avatar={
                <Avatar
                   variant="square"
                   sx={{ width: size, height: size }}
                   src={emailIcon}
                />
             }
             title="Send Mail"
          />
          <CardHeader
             style={cardHeaderStyles}
             avatar={
                <Avatar
                   variant="square"
                   sx={{ width: size, height: size }}
                   src={chatIcon}
                />
             }
             title="Chat"
          />
       </div>
    )

export default ChatCall
