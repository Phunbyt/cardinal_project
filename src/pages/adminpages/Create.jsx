import React, { useContext } from 'react';
import CreateSecretary from '../../components/admin/CreateSecretary';
import CreateUser from '../../components/admin/CreateUser';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';
import './Register.css';

const Create = () => {
   const { userToCreate } = useContext(UserCreationContext);
   return (
      <div className="create">
         {userToCreate === 'secretary' && <CreateSecretary /> }
         {userToCreate === 'user' &&  <CreateUser />}
      </div>
   );
};

export default Create;
