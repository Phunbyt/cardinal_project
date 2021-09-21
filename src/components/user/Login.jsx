import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/Authentication/GlobalContext';
import BlueButton from '../general/BlueButton';
import FormGroup from '../general/FormGroup';
import FormHeader from '../general/FormHeader';

const Login = () => {
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
         <FormHeader boldText="COMPANY SECRETARY PORTAL" subText="User Login" />
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
         <Link style={{textDecoration: 'none', color: '#000', marginTop: '1em'}} to="/loginadmin">Click to sign in as Admin</Link>
      </div>
   );
};

export default Login;
