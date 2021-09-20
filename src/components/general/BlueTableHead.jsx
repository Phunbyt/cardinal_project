/* eslint-disable react/no-array-index-key */
import React from 'react';

const BlueTableHead = ({ titles }) => (
   <div
      className="blue_table_head"
      style={{
         background: 'linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)',
         color: '#ffffff',
         fontWeight: 800,
         display: 'flex',
         justifyContent: 'space-between',
         padding: '15px',
         fontSize: '0.5rem',
      }}
   >
      {titles.map((title, index) => (
         <h2 key={index}>{title}</h2>
      ))}
   </div>
);

export default BlueTableHead;
