/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import NumberCard from '../general/NumberCard';
import CompanyCard from '../general/CompanyCard';
import BlueButton from '../general/BlueButton';

const TreatedRequests = () => {
   const deactivateBtn = (
      <BlueButton buttonText="VIEW / DOWNLOAD" bgColor="#528DC2" />
   );
   const data = useMemo(
      () => [
         {
            idNumber: 'DR23554',
            date: '12 Aug 2021',
            requestType: 'Notice of AGM',
            company: 'NESTLE',
            action: deactivateBtn,
         },
         {
            idNumber: 'SA54435',
            date: '08 Jul 2021',
            requestType: 'Notice of EGM',
            company: 'DANGOTE',
            action: deactivateBtn,
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            requestType: 'E-Mandate Broadcast',
            company: 'AGIP',
            action: deactivateBtn,
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            requestType: 'E-Mandate Broadcast',
            company: 'TOYOTA',
            action: deactivateBtn,
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            requestType: 'E-Mandate Broadcast',
            company: 'TOTAL',
            action: deactivateBtn,
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: 'ID NO',
            accessor: 'idNumber', // accessor is the "key" in the data
         },
         {
            Header: 'DATE',
            accessor: 'date',
         },
         {
            Header: 'REQUEST TYPE',
            accessor: 'requestType',
         },
         {
            Header: 'COMPANY',
            accessor: 'company',
         },
         {
            Header: 'ACTION',
            accessor: 'action',
         },
      ],
      []
   );

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

   return (
      <div className="treatedrequests">
         <div className="dashboard_head">
            <div className="dashboard_requests_header">
               <h3>Dashboard</h3>
            </div>
            <div className="dashboard_header">
               <NumberCard text="Pending Bills" number={7} />
               <NumberCard text="Treated Requests" number={5} />
               <CompanyCard
                  logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
                  companyName="Total Nigeria"
               />
            </div>
         </div>
         <div className="dashboard_requests_header ">
            <h3 style={{ fontSize: '2rem' }}>Treated Requests</h3>
         </div>
         <div style={{ marginTop: '2em' }} className="table">
            <table
               cellSpacing={0}
               {...getTableProps()}
               style={{
                  width: '100%',
               }}
            >
               <thead
                  style={{
                     background: ' #528DC2 ',
                     color: '#ffffff',
                     fontWeight: 800,
                     padding: '15px',
                     fontSize: '1rem',
                     width: '100%',
                  }}
               >
                  {headerGroups.map((headerGroup) => (
                     <tr style={{}} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th
                              {...column.getHeaderProps()}
                              style={{
                                 padding: '1em .5em',
                                 textAlign: 'left',
                              }}
                           >
                              {column.render('Header')}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                     prepareRow(row);
                     return (
                        <tr {...row.getRowProps()}>
                           {row.cells.map((cell) => (
                              <td
                                 {...cell.getCellProps()}
                                 style={{ padding: '1em .5em' }}
                              >
                                 {cell.render('Cell')}
                              </td>
                           ))}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default TreatedRequests;
