import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/secretary/Navbar';
import Testing from '../../components/secretary/Testing';

const SecretaryDashboard = () => (
   <Router>
        <Navbar />
        <h1>texteeeee</h1>
      <Switch>
         <Route path="/testing" component={Testing} />
      </Switch>
   </Router>
);

export default SecretaryDashboard;
