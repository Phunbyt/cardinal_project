/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const TableData = () => {
   const deactivateBtn = (
      <input className="deactivate_btn" type="button" value="Deactivate User" />
   );
   const data = useMemo(
      () => [
         {
            serialNo: 1,
            name: 'Fred Germany',
            email: 'abcdfriday@gmail.com',
            unit: 'BDU',
            btn: deactivateBtn,
         },
         {
            serialNo: 2,
            name: 'Oduduwa Doe',
            email: 'johnharunadoe@gmail.com.ng',
            unit: 'BDU',
            btn: deactivateBtn,
         },
         {
            serialNo: 3,
            name: 'Oduduwa Doe',
            email: 'johnharunadoe@gmail.com.ng',
            unit: 'BDU',
            btn: deactivateBtn,
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: 'S/N',
            accessor: 'serialNo', // accessor is the "key" in the data
         },
         {
            Header: 'FULL NAME',
            accessor: 'name',
         },
         {
            Header: 'EMAIL',
            accessor: 'email',
         },
         {
            Header: 'UNIT',
            accessor: 'unit',
         },
         {
            Header: '',
            accessor: 'btn',
         },
      ],
      []
   );

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

   return (
      <table
         cellSpacing={0}
         {...getTableProps()}
         style={{
            width: '100%',
         }}
      >
         <thead
            style={{
               background:
                  'linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)',
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
   );
};

export default TableData;
