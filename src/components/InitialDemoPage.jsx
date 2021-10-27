import React from "react";
import { NavLink } from "react-router-dom";

const InitialDemoPage = () => (
   <div
      style={{
         margin: "0 auto",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
      }}
   >
      <h1>This is the inital demo/dummy landing page</h1>
      <p>click the following links to choose your experience</p>

      <div>
         <NavLink to="admindashboard">As An Admin</NavLink>
      </div>
      <div>
         <NavLink to="secretarydashboard/a">As A Secretary</NavLink>
      </div>
      <div>
         <NavLink to="operationsdashboard/a">
            As An Operations Team Member
         </NavLink>
      </div>
      <div>
         <NavLink to="bdudashboard/a">As A BDU Team Member</NavLink>
      </div>
      <div>
         <NavLink to="fincondashboard/a">As A FINCON Member</NavLink>
      </div>
   </div>
);

export default InitialDemoPage;
