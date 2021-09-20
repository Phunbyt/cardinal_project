import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/adminpages/Register';
import Login from './pages/adminpages/Login';
import Dashboard from './pages/adminpages/Dashboard';
import { GlobalContextProvider } from './contexts/Authentication/GlobalContext';
import { UserCreationContextProvider } from './contexts/Authentication/UserCreationContext';
import Create from './pages/adminpages/Create';

const App = () => (
   <Router>
      <GlobalContextProvider>
         <UserCreationContextProvider>
            <div className="App">
               <Switch>
                  <Route exact path="/createadmin" component={Register} />
                  <Route exact path="/loginadmin" component={Login} />
                  <Route exact path="/admindashboard" component={Dashboard} />
                  <Route exact path="/create" component={Create} />
               </Switch>
            </div>
         </UserCreationContextProvider>
      </GlobalContextProvider>
   </Router>
);

export default App;
