/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useContext } from 'react';
import { useTable } from 'react-table';
import { Button, Typography, Modal, Box } from '@mui/material';
import UserCreationContext from '../../../contexts/Authentication/UserCreationContext';
import BlueButton from '../../general/BlueButton';

const TableData = () => {
   const { open, handleOpen, handleClose } = useContext(UserCreationContext);
   const deactivateBtn = (
      <Button style={{ color: '#528DC2' }} onClick={handleOpen}>
         Deactivate User
      </Button>
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
      <div className="table">
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

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '500px',
                  width: '100%',
                  backgroundColor: '#ffffff',
                  boxShadow: 24,
                  borderRadius: '8px',
                  textAlign: 'center',
                  padding: '1em 0',
               }}
            >
               <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{
                     fontWeight: 800,
                     fontSize: '1.5rem',
                     margin: '1em auto',
                  }}
               >
                  Confirm Deactivation
               </Typography>

               <hr className="modal_divider" />

               <Typography
                  id="modal-modal-description"
                  style={{
                     margin: '1em auto',
                  }}
               >
                  Do you want to deactivate this user?
               </Typography>

               <div className="decision_btn">
                  <BlueButton
                     buttonText="YES"
                     bgColor="linear-gradient(279.3deg, #E61C23 -4.92%, #8B0A0E 107.31%)"
                  />
                  <BlueButton buttonText="NO" />
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default TableData;
