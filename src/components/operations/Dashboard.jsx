import React from "react";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import RecentRequests from "./subcomponents/RecentRequests";
import RecentBills from "./subcomponents/RecentBills";

const Dashboard = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="operations_dashboard_header">
            <h3>Dashboard</h3>
         </div>
         <div className="operations_dashboard_header">
            <NumberCard text="New Requests" number={7} />
            <NumberCard text="New Invoice Applications" number={5} />
            <NumberCard text="Approved Bills / Invoivces" number={2} />
         </div>
      </div>

      <div className="dashboard_requests">
         <div className="operations_dashboard_header">
            <h3>Recent Requests</h3>
            <div className="operation_view_all_invoice">
               <NavLink
                  to="null"
                  style={{ textDecoration: "none", color: "#528DC2" }}
               >
                  <h5>VIEW &gt; &gt; </h5>
               </NavLink>
            </div>
         </div>
         <RecentRequests />
      </div>
      <div className="dashboard_requests">
         <div className="operations_dashboard_header">
            <h3>Recent Bills / Invoices Applications</h3>
            <div className="operation_view_all_invoice">
               <NavLink
                  to="null"
                  style={{ textDecoration: "none", color: "#528DC2" }}
               >
                  <h5>VIEW &gt; &gt; </h5>
               </NavLink>
            </div>
         </div>
         <RecentBills />
      </div>
   </div>
);

export default Dashboard;
