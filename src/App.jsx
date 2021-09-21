import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/adminpages/Register';
import Login from './pages/adminpages/Login';
import Dashboard from './pages/adminpages/Dashboard';
import { GlobalContextProvider } from './contexts/Authentication/GlobalContext';
import { UserCreationContextProvider } from './contexts/Authentication/UserCreationContext';
import Create from './pages/adminpages/Create';
import Manage from './pages/adminpages/Manage';
import SuccessfulUser from './pages/adminpages/SuccessfulUser';
import { SecretaryContextProvider } from './contexts/secretary/SecretaryContext';
import ChangeSecretaryPassword from './pages/secretarypages/ChangeSecretaryPassword';
import UserLogin from './pages/user/UserLogin';

const App = () => (
   <Router>
      <div className="App">
         <GlobalContextProvider>
            <UserCreationContextProvider>
               <Switch>
                  <Route exact path="/createadmin" component={Register} />
                  <Route exact path="/loginadmin" component={Login} />
                  <Route exact path="/admindashboard" component={Dashboard} />
                  <Route exact path="/create" component={Create} />
                  <Route exact path="/manageusers" component={Manage} />
                  <Route
                     exact
                     path="/successfuluser"
                     component={SuccessfulUser}
                  />
               </Switch>
            </UserCreationContextProvider>
            <Switch>
               <Route exact path="/loginuser" component={UserLogin} />
            </Switch>
         </GlobalContextProvider>
         <SecretaryContextProvider>
            <Switch>
               <Route
                  exact
                  path="/changepassword"
                  component={ChangeSecretaryPassword}
               />
            </Switch>
         </SecretaryContextProvider>
      </div>
   </Router>
);

export default App;
