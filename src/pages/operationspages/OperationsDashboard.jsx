import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../components/operations/Dashboard";
import Navbar from "../../components/operations/Navbar";
import NameBar from "../../components/general/NameBar";
import "./OperationsDashboard.css";
import PastAgm from "../../components/operations/PastAgm";
import RequestFeedback from "../../components/operations/RequestFeedback";
import TreatRequest from "../../components/operations/TreatRequest";

const OperationsDashboard = () => (
   <div className="secretary_dashboard">
      <Router>
         <Navbar />
         <div className="dashboard_section">
            <NameBar title="John Doe" />
            <div className="dashboard_view">
               <Switch>
                  <Route
                     exact
                     path="/operationsdashboard/a"
                     component={Dashboard}
                  />
                  <Route
                     exact
                     path="/operationsdashboard/requests"
                     component={PastAgm}
                  />
                  <Route
                     exact
                     path="/operationsdashboard/requestfeedback"
                     component={RequestFeedback}
                  />
                  <Route
                     exact
                     path="/operationsdashboard/treatrequest"
                     component={TreatRequest}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default OperationsDashboard;
