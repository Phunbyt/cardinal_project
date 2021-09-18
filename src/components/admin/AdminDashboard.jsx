import React from 'react';
import FormHeader from '../general/FormHeader';
import LinkCard from './subcomponents/LinkCard';
import createUserIcon from '../../assets/create.png';
import userIcon from '../../assets/userIcon.png';
import editIcon from '../../assets/editIcon.png';

const AdminDashboard = () => (
   <div className="admin_form_header">
      <FormHeader
         boldText="COMPANY SECRETARY PORTAL ADMIN"
         subText="Admin Dashboard"
      />
      <div className="admin_link_cards">
         <LinkCard
            cardIconSrc={createUserIcon}
            cardLink="/createadmin"
            cardText="Create User"
         />

         <div className="card_line" />

         <LinkCard
            cardIconSrc={createUserIcon}
            cardLink="/createadmin"
            cardText="Create Company Secretary"
         />

         <div className="card_line" />

         <LinkCard
            cardIconSrc={userIcon}
            cardLink="/createadmin"
            cardText="Manage Users"
         />

         <div className="card_line" />

         <LinkCard
            cardIconSrc={editIcon}
            cardLink="/createadmin"
            cardText="Edit Request Requirement"
         />
      </div>
   </div>
);

export default AdminDashboard;
