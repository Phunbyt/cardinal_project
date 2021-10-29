import React, { useContext } from 'react';
import FormHeader from '../general/FormHeader';
import LinkCard from './subcomponents/LinkCard';
import createUserIcon from '../../assets/create.png';
import userIcon from '../../assets/userIcon.png';
import editIcon from '../../assets/editIcon.png';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';

const AdminDashboard = () => {
   const { handleUserToCreate } = useContext(UserCreationContext);
   return (
      <div className="admin_form_header">
         <FormHeader
            boldText="COMPANY SECRETARY PORTAL ADMIN"
            subText="Admin Dashboard"
         />
         <div className="admin_link_cards">
            <LinkCard
               cardIconSrc={createUserIcon}
               cardLink="/create"
               cardText="Create User"
               onClick={() => handleUserToCreate('user')}
            />

            <div className="card_line" />

            <LinkCard
               cardIconSrc={createUserIcon}
               cardLink="/create"
               cardText="Create Company Secretary"
               onClick={() => handleUserToCreate('secretary')}
            />

            <div className="card_line" />

            <LinkCard
               cardIconSrc={userIcon}
               cardLink="/manageusers"
               cardText="Manage Users"
            />

         </div>
      </div>
   );
};

export default AdminDashboard;
