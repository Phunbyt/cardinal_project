import React, { useContext } from 'react';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';
import BlueButton from '../general/BlueButton';
import FormGroup from '../general/FormGroup';
import UniqueFormHeader from '../general/UniqueFormHeader';


const CreateSecretary = () => {
   const { handleCreateUser } = useContext(UserCreationContext);
   return (
      <div className="createadmin">
         <UniqueFormHeader formTitle="Create Company Secretary" />
         <form
            onSubmit={handleCreateUser}
            className="unique_register_form"
         >
            {/* {error && <span>{error}</span>} */}
            <div className="form_section">
               <FormGroup
                  //    onChange={(e) => setFirstName(e.target.value)}
                  //    value={firstName}
                  headerText="Name of Company"
                  placeholder="Name of Company"
                  labelFor="companyName"
               />

               <FormGroup
                  //    onChange={(e) => setEmail(e.target.value)}
                  //    value={email}
                  headerText="Company Secretary Email Address"
                  placeholder="Company Secretary Email Address"
                  labelFor="companySecretaryEmail"
               />

               <FormGroup
                  //    onChange={(e) => setPassword(e.target.value)}
                  //    value={password}
                  headerText="Phone Number"
                  placeholder="Phone Number"
                  type="tel"
                  labelFor="phoneNumber"
               />
            </div>
            <div className="form_section">
               <FormGroup
                  //    onChange={(e) => setPassword(e.target.value)}
                  //    value={password}
                  headerText="Alternative Phone Number"
                  placeholder="Alternative Phone Number"
                  type="tel"
                  labelFor="alternativePhoneNumber"
               />

               <FormGroup
                  //    onChange={(e) => setPassword(e.target.value)}
                  //    value={password}
                  headerText="Create password for user"
                  placeholder="Enter Password"
                  type="password"
                  labelFor="secretarypassword"
               />
               <FormGroup
                  //    onChange={(e) => setPassword(e.target.value)}
                  //    value={password}
                  headerText="Company Logo Upload"
                  placeholder="Click to choose file"
                  type="file"
                  labelFor="companyLogo"
               />

               <BlueButton buttonText="CREATE USER" />
            </div>
         </form>
      </div>
   );
};

export default CreateSecretary;
