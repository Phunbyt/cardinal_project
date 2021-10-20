import React from "react";
import NumberCard from "../general/NumberCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";
import PaymentInvoiceCard from "./subcomponents/PaymentInvoiceCard";

const AddPayment = () => (
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
         <div className="edit_invoice_forms">
            <div className="edit_invoice_form_field">
               <PaymentInvoiceCard />

               <div className="fincon_invoice_decision_btns">
                  <div style={{ margin: "1em", maxWidth: "300px", flex: "1" }}>
                     <BlueButton buttonText="RECORD PAYMENT" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default AddPayment;
