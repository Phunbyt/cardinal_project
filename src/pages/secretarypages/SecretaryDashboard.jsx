import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameBar from '../../components/general/NameBar';
import AgmForm from '../../components/secretary/AgmForm';
import EgmForm from '../../components/secretary/EgmForm';
import OtherRequests from '../../components/secretary/OtherRequests';
import Dashboard from '../../components/secretary/Dashboard';
import Navbar from '../../components/secretary/Navbar';
import Requests from '../../components/secretary/Requests';

import './SecretaryDashboard.css';
import EmandateForm from '../../components/secretary/EmandateForm';
import EaccreditationForm from '../../components/secretary/EaccreditationForm';
import TreatedRequests from '../../components/secretary/TreatedRequests';
import Invoices from '../../components/secretary/Invoices';
import UnpaidInvoice from '../../components/secretary/UnpaidInvoice';
import PaidInvoice from '../../components/secretary/PaidInvoice';
import MakePayment from '../../components/secretary/MakePayment';
import Reports from '../../components/secretary/Reports';
import DownloadRequest from '../../components/secretary/DownloadRequest';
import PaymentRecords from '../../components/secretary/PaymentRecords';
import ViewReports from '../../components/secretary/ViewReports';

const SecretaryDashboard = () => (
   <div className="secretary_dashboard">
      <Router>
         <Navbar />
         <div className="dashboard_section">
            <NameBar title="John Doe" />
            <div className="dashboard_view">
               <Switch>
                  <Route
                     exact
                     path="/secretarydashboard/a"
                     component={Dashboard}
                  />
                  <Route
                     path="/secretarydashboard/requests"
                     component={Requests}
                  />
                  <Route
                     path="/secretarydashboard/agmreport"
                     component={AgmForm}
                  />
                  <Route
                     path="/secretarydashboard/egmreport"
                     component={EgmForm}
                  />
                  <Route
                     path="/secretarydashboard/otherrequests"
                     component={OtherRequests}
                  />
                  <Route
                     path="/secretarydashboard/emandate"
                     component={EmandateForm}
                  />
                  <Route
                     path="/secretarydashboard/eaccreditation"
                     component={EaccreditationForm}
                  />
                  <Route
                     path="/secretarydashboard/treatedrequests"
                     component={TreatedRequests}
                  />
                  <Route
                     path="/secretarydashboard/invoices"
                     component={Invoices}
                  />
                  <Route
                     path="/secretarydashboard/unpaidinvoice"
                     component={UnpaidInvoice}
                  />
                  <Route
                     path="/secretarydashboard/paidinvoice"
                     component={PaidInvoice}
                  />
                  <Route
                     path="/secretarydashboard/makepayment"
                     component={MakePayment}
                  />
                  <Route
                     path="/secretarydashboard/reports"
                     component={ViewReports}
                  />
                  <Route
                     path="/secretarydashboard/downloadreports"
                     component={DownloadRequest}
                  />
                  <Route
                     path="/secretarydashboard/payment"
                     component={PaymentRecords}
                  />
               </Switch>
            </div>
         </div>
      </Router>
   </div>
);

export default SecretaryDashboard;
