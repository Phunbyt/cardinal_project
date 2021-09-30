import React from "react";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import SearchBar from "./subcomponents/SearchBar";
import TableData from "./subcomponents/TableData";

const Dashboard = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="fincon_dashboard_header">
            <NumberCard text="Pending Bills" number={7} />
            <NumberCard text="Treated Requests" number={5} />
         </div>
      </div>

      <div className="dashboard_requests">
         <SearchBar />
      </div>
      <div className="dashboard_requests">
         <TableData />
      </div>
      <div className="view_all_invoice">
         <NavLink style={{ textDecoration: "none" }} to="unpaidinvoice">
            <p style={{ margin: 0 }}>View all invoice</p>
         </NavLink>
      </div>
   </div>
);

export default Dashboard;
