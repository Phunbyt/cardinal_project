import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/adminpages/Register';
import Login from './pages/adminpages/Login';
import Dashboard from './pages/adminpages/Dashboard';
import { GlobalContextProvider } from './contexts/Authentication/GlobalContext';

const App = () => (
   <Router>
      <GlobalContextProvider>
         <div className="App">
            <Switch>
               <Route exact path="/createadmin" component={Register} />
               <Route exact path="/loginadmin" component={Login} />
               <Route exact path="/admindashboard" component={Dashboard} />
            </Switch>
         </div>
      </GlobalContextProvider>
   </Router>
);

export default App;
