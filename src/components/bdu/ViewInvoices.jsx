import React from "react";
import { NavLink } from "react-router-dom";
import ViewInvoicesData from "./subcomponents/ViewInvoices";
import NumberCard from "../general/NumberCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";

const ViewInvoices = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="fincon_dashboard_header">
            <NumberCard text="Pending Bills" number={7} />
            <NumberCard text="Treated Requests" number={5} />
         </div>
      </div>

      <div className="bdu_dashboard_requests">
         <div className="bdu_searchbar">
            <SearchBar />
         </div>
      </div>
      <div className="dashboard_requests">
         <ViewInvoicesData />
      </div>
      <div className="view_all_invoice">
         <NavLink style={{ textDecoration: "none" }} to="unpaidinvoice">
            <p style={{ margin: 0 }}>View all invoices</p>
         </NavLink>
      </div>
   </div>
);

export default ViewInvoices;
