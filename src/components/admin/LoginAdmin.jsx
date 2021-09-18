import React, { useContext } from 'react';
import companyLogo from '../../assets/CSRLLogo1.jpg';
import GlobalContext from '../../contexts/Authentication/GlobalContext';
import BlueButton from '../general/BlueButton';
import FormGroup from '../general/FormGroup';

const LoginAdmin = () => {
   const {
      setUserName,
      userName,
      setPassword,
      password,
      setEmail,
      email,
      handleLogin,
      error,
   } = useContext(GlobalContext);
   return (
      <div className="createadmin">
         <div className="company_logo">
            <img src={companyLogo} alt="" srcSet="" />
         </div>
         <div className="header_text">
            <h2 className="header_text_bold">COMPANY SECRETARY PORTAL</h2>
            <h2 className="header_text_thin">Admin Login</h2>
         </div>
         <form onSubmit={handleLogin} className="register_form">
            {error && <span>{error}</span>}

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
            <a href="/createadmin">Forgot password</a>

            <BlueButton buttonText="LOGIN" />
         </form>
      </div>
   );
};

export default LoginAdmin;
