import React from "react";
import EditInvoiceCard from "./subcomponents/EditInvoiceCard";
import BlueButton from "../general/BlueButton";

const AddInvoice = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="operations_dashboard_header">
            <h3>Invoice Application</h3>
         </div>
      </div>

      <div className="dashboard_requests">
         <EditInvoiceCard />
         <div style={{ margin: "1em", maxWidth: "300px" }}>
            <BlueButton buttonText="CONFIRM" />
         </div>
      </div>
   </div>
);

export default AddInvoice;
