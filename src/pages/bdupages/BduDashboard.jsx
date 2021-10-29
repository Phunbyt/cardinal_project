import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddInvoice from "../../components/bdu/AddInvoice";
import AssignRequest from "../../components/bdu/AssignRequest";
import ConfirmedInvoice from "../../components/bdu/ConfirmedInvoice";
import CreateReport from "../../components/bdu/CreateReport";
import Dashboard from "../../components/bdu/Dashboard";
import EditInvoice from "../../components/bdu/EditInvoice";
import Navbar from "../../components/bdu/Navbar";
import Requests from "../../components/bdu/Requests";
import TreatedRequest from "../../components/bdu/TreatedRequest";
import UnconfirmedInvoice from "../../components/bdu/UnconfirmedInvoice";
import ViewInvoices from "../../components/bdu/ViewInvoices";
import ViewReports from "../../components/bdu/ViewReports";
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
                  <Route
                     exact
                     path="/bdudashboard/confirmedinvoice"
                     component={ConfirmedInvoice}
                  />
                  <Route
                     exact
                     path="/bdudashboard/unconfirmedinvoice"
                     component={UnconfirmedInvoice}
                  />
                  <Route
                     exact
                     path="/bdudashboard/addnewinvoice"
                     component={AddInvoice}
                  />
                  <Route
                     exact
                     path="/bdudashboard/editinvoice"
                     component={EditInvoice}
                  />
                  <Route
                     exact
                     path="/bdudashboard/requests"
                     component={Requests}
                  />
                  <Route
                     exact
                     path="/bdudashboard/reports"
                     component={CreateReport}
                  />
                  <Route
                     exact
                     path="/bdudashboard/viewreports"
                     component={ViewReports}
                  />
                  <Route
                     exact
                     path="/bdudashboard/viewtreatedrequest"
                     component={TreatedRequest}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default BduDashboard;
