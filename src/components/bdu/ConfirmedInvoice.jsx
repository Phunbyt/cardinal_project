import React from "react";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import InvoiceCard from "./subcomponents/InvoiceCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";

const ConfirmedInvoice = () => (
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
      <div className="view_all_invoice">
         <NavLink to="editunconfirmedinvoice">
            <p style={{ margin: 0 }}>Edit this invoice</p>
         </NavLink>
      </div>
      <div className="dashboard_requests">
         <InvoiceCard />
         <div style={{ margin: '1em', maxWidth: '300px'}}>
            <BlueButton buttonText="SEND TO SECRETARY" />
         </div>
      </div>
   </div>
);

export default ConfirmedInvoice;
