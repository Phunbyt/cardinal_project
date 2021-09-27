import React, { useContext } from 'react';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';
import BlueButton from '../general/BlueButton';
import FormGroup from '../general/FormGroup';
import UniqueFormHeader from '../general/UniqueFormHeader';
import SelectionField from './subcomponents/SelectionField';

const CreateUser = () => {
   const { handleCreateUser } = useContext(UserCreationContext);
   return (
      <div className="createadmin">
         <UniqueFormHeader formTitle="Create User" />
         <form onSubmit={handleCreateUser} className="unique_register_form">
            {/* {error && <span>{error}</span>} */}
            <div className="form_section">
               <FormGroup
                  //    onChange={(e) => setFirstName(e.target.value)}
                  //    value={firstName}
                  headerText="Full name"
                  placeholder="Full name"
                  labelFor="fullName"
               />

               <FormGroup
                  //    onChange={(e) => setEmail(e.target.value)}
                  //    value={email}
                  headerText="Email"
                  placeholder="Email"
                  labelFor="userEmail"
               />
            </div>
            <div className="form_section">
               <FormGroup
                  //    onChange={(e) => setPassword(e.target.value)}
                  //    value={password}
                  headerText="Create password for user"
                  placeholder="Enter Password"
                  type="password"
                  labelFor="secretarypassword"
               />
               <SelectionField
                  items={['FINCON', 'BDU', 'OPERATIONS']}
                  headerText="Select Department"
               />
               <div className="dummydiv" />
               <BlueButton buttonText="CREATE USER" />
            </div>
         </form>
      </div>
   );
};

export default CreateUser;
