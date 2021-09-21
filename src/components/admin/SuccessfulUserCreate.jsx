import React, { useContext } from 'react';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';
import BlueButton from '../general/BlueButton';
import successIcon from '../../assets/Group.png';
import FormHeader from '../general/FormHeader';

const SuccessfulUserCreate = () => {
   const { goToDashboard, createAnotherUser } = useContext(UserCreationContext);
   return (
      <div className="createadmin">
         <FormHeader boldText="COMPANY SECRETARY PORTAL" />
         <div className="success_icon">
            <img src={successIcon} alt="" />
         </div>
         <div className="success_text">
            <p>Congratulations!</p>
            <p>A new user has been created</p>
         </div>
         <div className="success_btns">
            <BlueButton
               click={createAnotherUser}
               buttonText="CREATE ANOTHER USER"
            />
            <div className="dummydiv" />
            <BlueButton
               buttonText="GO TO DASHBOARD"
               bgColor="#ffffff"
               textColor="#002564"
               click={goToDashboard}
            />
         </div>
      </div>
   );
};

export default SuccessfulUserCreate;
