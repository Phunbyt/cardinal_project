import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AcceptRejectInvoice from "../../components/fincon/AcceptRejectInvoice";
import Dashboard from "../../components/fincon/Dashboard";
import DiscountInvoice from "../../components/fincon/DiscountInvoice";
import Navbar from "../../components/fincon/Navbar";
import PaymentRecords from "../../components/fincon/PaymentRecords";
import ViewInvoice from "../../components/fincon/ViewInvoice";
import WriteOffInvoice from "../../components/fincon/WriteOffInvoice";
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
                  <Route
                     exact
                     path="/fincondashboard/acceptrejectinvoice"
                     component={AcceptRejectInvoice}
                  />
                  <Route
                     exact
                     path="/fincondashboard/writeoffinvoice"
                     component={WriteOffInvoice}
                  />
                  <Route
                     exact
                     path="/fincondashboard/viewinvoice"
                     component={ViewInvoice}
                  />
                  <Route
                     exact
                     path="/fincondashboard/discountinvoice"
                     component={DiscountInvoice}
                  />
                  <Route
                     exact
                     path="/fincondashboard/paymentrecords"
                     component={PaymentRecords}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default FinconDashboard;
