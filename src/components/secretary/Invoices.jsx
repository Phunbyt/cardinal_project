/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { NavLink } from 'react-router-dom';
import NumberCard from '../general/NumberCard';
import CompanyCard from '../general/CompanyCard';
import BlueButton from '../general/BlueButton';
import SearchBar from './subcomponents/SearchBar';

const Invoices = () => {
   const checkPaid = (status) =>
      status ? (
         <h3>Paid</h3>
      ) : (
         <NavLink style={{ textDecoration: 'none' }} to="unpaidinvoice">
            <BlueButton buttonText="PAY NOW > >" bgColor="#528DC2" />
         </NavLink>
      );
   const viewBill = (status) =>
      status ? (
         <NavLink style={{ color: '#528DC2' }} to="paidinvoice">
            View/Download
         </NavLink>
      ) : (
         ''
      );
   const data = useMemo(
      () => [
         {
            idNumber: 'DR23554',
            date: '12 Aug 2021',
            application: 'Notice of AGM',
            status: 'Treated',
            amount: 'NGN 20,000.00',
            payment: checkPaid(true),
            action: viewBill(true),
         },
         {
            idNumber: 'SA54435',
            date: '08 Jul 2021',
            application: 'Notice of EGM',
            status: 'Pending',
            amount: 'NGN 20,000.00',
            payment: checkPaid(false),
            action: viewBill(false),
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            application: 'E-Mandate Broadcast',
            status: 'Pending',
            amount: 'NGN 20,000.00',
            payment: checkPaid(false),
            action: viewBill(false),
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            application: 'E-Mandate Broadcast',
            status: 'Treated',
            amount: 'NGN 20,000.00',
            payment: checkPaid(true),
            action: viewBill(true),
         },
         {
            idNumber: 'OS15445',
            date: '11 Sep 2021',
            application: 'E-Mandate Broadcast',
            status: 'Pending',
            amount: 'NGN 20,000.00',
            payment: checkPaid(false),
            action: viewBill(false),
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
            Header: 'APPLICATION',
            accessor: 'application',
         },
         {
            Header: 'STATUS',
            accessor: 'status',
         },
         {
            Header: 'AMOUNT',
            accessor: 'amount',
         },
         {
            Header: 'PAYMENT',
            accessor: 'payment',
         },
         {
            Header: '',
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
            <h3 style={{ fontSize: '2rem' }}>Bills / Invoices</h3>
         </div>
         <div className="search_options">
            <SearchBar />
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
                              {/* {true ? 'Paid': <Link} */}
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

export default Invoices;
