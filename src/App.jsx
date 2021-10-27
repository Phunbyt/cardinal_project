import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/adminpages/Register";
import Login from "./pages/adminpages/Login";
import Dashboard from "./pages/adminpages/Dashboard";
import { GlobalContextProvider } from "./contexts/Authentication/GlobalContext";
import { UserCreationContextProvider } from "./contexts/Authentication/UserCreationContext";
import Create from "./pages/adminpages/Create";
import Manage from "./pages/adminpages/Manage";
import SuccessfulUser from "./pages/adminpages/SuccessfulUser";
import { SecretaryContextProvider } from "./contexts/secretary/SecretaryContext";
import ChangeSecretaryPassword from "./pages/secretarypages/ChangeSecretaryPassword";
import UserLogin from "./pages/user/UserLogin";
import PasswordChanged from "./pages/secretarypages/PasswordChanged";
import SecretaryDashboard from "./pages/secretarypages/SecretaryDashboard";
import { FinconContextProvider } from "./contexts/fincon/FinconContext";
import FinconDashboard from "./pages/finconpages/FinconDashboard";
import BduDashboard from "./pages/bdupages/BduDashboard";
import { BduContextProvider } from "./contexts/bdu/BduContext";
import OperationsDashboard from "./pages/operationspages/OperationsDashboard";
import { OperationsContextProvider } from "./contexts/operations/OperationsContext";
import InitialDemoPage from "./components/InitialDemoPage";

const App = () => (
   <Router>
      <div>
         <GlobalContextProvider>
            <UserCreationContextProvider>
               <Switch>
                  <Route exact path="/createadmin" component={Register} />
                  <Route exact path="/loginadmin" component={Login} />
                  <Route exact path="/admindashboard" component={Dashboard} />
                  <Route exact path="/create" component={Create} />
                  <Route exact path="/manageusers" component={Manage} />
                  <Route
                     exact
                     path="/successfuluser"
                     component={SuccessfulUser}
                  />
               </Switch>
            </UserCreationContextProvider>
            <Switch>
               <Route exact path="/loginuser" component={UserLogin} />
            </Switch>
         </GlobalContextProvider>
         <SecretaryContextProvider>
            <Switch>
               <Route
                  exact
                  path="/changepassword"
                  component={ChangeSecretaryPassword}
               />
               <Route
                  exact
                  path="/passwordchanged"
                  component={PasswordChanged}
               />
               <Route
                  path="/secretarydashboard"
                  component={SecretaryDashboard}
               />
            </Switch>
         </SecretaryContextProvider>
         <FinconContextProvider>
            <Route path="/fincondashboard" component={FinconDashboard} />
         </FinconContextProvider>
         <BduContextProvider>
            <Route path="/bdudashboard" component={BduDashboard} />
         </BduContextProvider>
         <OperationsContextProvider>
            <Route
               path="/operationsdashboard"
               component={OperationsDashboard}
            />
         </OperationsContextProvider>

         <Switch>
            <Route path="/" component={InitialDemoPage} />
         </Switch>
      </div>
   </Router>
);

export default App;
