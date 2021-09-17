import React, { useContext } from 'react';
import companyLogo from '../../assets/CSRLLogo1.jpg';
import GlobalContext from '../../contexts/Authentication/GlobalContext';
import BlueButton from '../general/BlueButton';
import FormGroup from '../general/FormGroup';

const CreateAdmin = () => {
   const {
      setFirstName,
      firstName,
      setLastName,
      lastName,
      setUserName,
      userName,
      setPassword,
      password,
      setConfirmPassword,
      confirmPassword,
      setEmail,
      email,
      handleSubmit,
      error,
   } = useContext(GlobalContext);
   return (
      <div className="createadmin">
         <div className="company_logo">
            <img src={companyLogo} alt="" srcSet="" />
         </div>
         <div className="header_text">
            <h2 className="header_text_bold">COMPANY SECRETARY PORTAL</h2>
            <h2 className="header_text_thin">New Admin Register</h2>
         </div>
         <form onSubmit={handleSubmit} className="register_form">
            {error && <span>{error}</span>}
            <FormGroup
               onChange={(e) => setFirstName(e.target.value)}
               value={firstName}
               setFirstName
               headerText="First Name"
               placeholder="First Name"
               labelFor="firstName"
            />
            <FormGroup
               onChange={(e) => setLastName(e.target.value)}
               value={lastName}
               headerText="Last Name"
               placeholder="Last Name"
               labelFor="lastName"
            />
            <FormGroup
               onChange={(e) => setUserName(e.target.value)}
               value={userName}
               headerText="Username"
               placeholder="Username"
               labelFor="userName"
            />
            <FormGroup
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               headerText="Email"
               placeholder="Email"
               labelFor="email"
            />
            <FormGroup
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               headerText="Password"
               placeholder="Password"
               type="password"
               labelFor="password"
            />
            <FormGroup
               onChange={(e) => setConfirmPassword(e.target.value)}
               type="password"
               value={confirmPassword}
               headerText="Confirm Password"
               placeholder="Confirm Password"
               labelFor="confirmpassword"
            />
            <BlueButton buttonText="Register" />
         </form>
      </div>
   );
};

export default CreateAdmin;
