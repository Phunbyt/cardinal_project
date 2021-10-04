import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AssignRequest from "../../components/bdu/AssignRequest";
import Dashboard from "../../components/bdu/Dashboard";
import Navbar from "../../components/bdu/Navbar";
import ViewInvoices from "../../components/bdu/ViewInvoices";
import NameBar from "../../components/general/NameBar";
import "./BduDashboard.css";

const BduDashboard = () => (
   <div className="secretary_dashboard">
      <Router>
         <Navbar />
         <div className="dashboard_section">
            <NameBar title="John Doe" />
            <div className="dashboard_view">
               <Switch>
                  <Route exact path="/bdudashboard/a" component={Dashboard} />
                  <Route
                     exact
                     path="/bdudashboard/assignrequest"
                     component={AssignRequest}
                  />
                  <Route
                     exact
                     path="/bdudashboard/viewinvoices"
                     component={ViewInvoices}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default BduDashboard;
