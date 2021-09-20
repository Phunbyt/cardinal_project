import React from 'react';
import BlueTableHead from '../general/BlueTableHead';
import TableData from '../general/TableData';
import UniqueFormHeader from '../general/UniqueFormHeader';
import UserTableItem from './subcomponents/UserTableItem';

const ManageUsers = () => (
   <div className="manage_users">
      <UniqueFormHeader formTitle="Manage Users" displayIcon={false} />
      <div className="table_data">
         <TableData/>
      </div>
   </div>
);

export default ManageUsers;
