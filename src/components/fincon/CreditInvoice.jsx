import React from "react";
import NumberCard from "../general/NumberCard";
import ServiceInvoiceCard from "./subcomponents/ServiceInvoiceCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";
import AddPaymentButtton from "./subcomponents/AddPaymentButtton";

const CreditInvoice = () => (
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
         <AddPaymentButtton/>
      </div>
      <div className="dashboard_requests">
         <div className="edit_invoice_forms">
            <div className="edit_invoice_form_field">
               <ServiceInvoiceCard />

               <div className="fincon_invoice_decision_btns">
                  <div style={{ margin: "1em", maxWidth: "300px", flex: "1" }}>
                     <BlueButton buttonText="CONFIRM" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default CreditInvoice;
