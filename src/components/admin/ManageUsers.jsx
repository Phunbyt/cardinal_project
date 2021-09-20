import React from 'react';
import TableData from './subcomponents/TableData';
import UniqueFormHeader from '../general/UniqueFormHeader';


const ManageUsers = () => (
   <div className="manage_users">
      <UniqueFormHeader formTitle="Manage Users" displayIcon={false} />
      <div className="table_data">
         <TableData/>
      </div>
   </div>
);

export default ManageUsers;
