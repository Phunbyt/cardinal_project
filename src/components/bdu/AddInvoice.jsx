import React from "react";
import { NavLink } from "react-router-dom";
import NewInvoiceCard from "./subcomponents/NewInvoiceCard";
import BlueButton from "../general/BlueButton";

const AddInvoice = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="operations_dashboard_header">
            <h3>Invoice Application</h3>
         </div>
      </div>

      
      
      <div className="dashboard_requests">
         <NewInvoiceCard />
         <div style={{ margin: "1em", maxWidth: "300px" }}>
            <BlueButton buttonText="SEND TO FINCON" />
         </div>
      </div>
   </div>
);

export default AddInvoice;
