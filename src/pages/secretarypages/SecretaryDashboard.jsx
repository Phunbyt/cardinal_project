import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameBar from '../../components/general/NameBar';
import AgmForm from '../../components/secretary/AgmForm';
import Dashboard from '../../components/secretary/Dashboard';
import Navbar from '../../components/secretary/Navbar';
import Requests from '../../components/secretary/Requests';

import './SecretaryDashboard.css';

const SecretaryDashboard = () => (
   <div className="secretary_dashboard">
      <Router>
         <Navbar />
         <div className="dashboard_section">
            <NameBar title="John Doe" />
            <div className="dashboard_view">
               <Switch>
                  <Route path="/secretarydashboard" component={Dashboard} />
                  <Route path="/requests" component={Requests} />
                  <Route path="/agmreport" component={AgmForm} />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default SecretaryDashboard;
