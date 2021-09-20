import React from 'react';

const UserTableItem = ({ serialNumber, fullName, email, unit }) => (
   <div
      style={{
         fontWeight: 800,
         display: 'flex',
         justifyContent: 'space-between',
         padding: '15px',
         fontSize: '0.5rem',
      }}
   >
      <h2>{serialNumber}</h2>
      <h2>{fullName}</h2>
      <h2>{email}</h2>
      <h2>{unit}</h2>
      <input type="button" value="Deactivate User" />
   </div>
);

export default UserTableItem;
