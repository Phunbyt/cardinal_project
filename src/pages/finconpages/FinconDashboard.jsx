import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../components/fincon/Dashboard";
import Navbar from "../../components/fincon/Navbar";
import NameBar from "../../components/general/NameBar";
import "./FinconDashboard.css";

const FinconDashboard = () => (
   <div className="secretary_dashboard">
      <Router>
         <Navbar />
         <div className="dashboard_section">
            <NameBar title="John Doe" />
            <div className="dashboard_view">
               <Switch>
                  <Route
                     exact
                     path="/fincondashboard/a"
                     component={Dashboard}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default FinconDashboard;
