import React, { useContext } from "react";
import NumberCard from "../general/NumberCard";
import TextArea from "../general/TextArea";
import InvoiceCard from "./subcomponents/InvoiceCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";
import FinconContext from "../../contexts/fincon/FinconContext";
import AddPaymentButtton from "./subcomponents/AddPaymentButtton";

const WriteOffInvoice = () => {
   const {
      addInvoiceServices,
      invoiceServices,
      removeInvoiceServices,
   } = useContext(FinconContext);
   return (
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
                  <InvoiceCard />

                  <div className="fincon_invoice_decision_btns">
                     <div
                        style={{ margin: "1em", maxWidth: "300px", flex: "1" }}
                     >
                        <BlueButton buttonText="CONFIRM" />
                     </div>
                  </div>
               </div>
               <div className="edit_invoice_reason">
                  <div className="operations_dashboard_header">
                     <h3>Reason(s) for Reasons for Write-Off</h3>
                  </div>

                  <div className="edit_invoice_reason_textarea">
                     <TextArea placeholder="No charge....." />
                     {invoiceServices.map((service, index) => (
                        <div key={index}>{service}</div>
                     ))}
                     <div className="edit_invoice_reason_btn invoice_service_add_btn">
                        <BlueButton
                           buttonText="+ ADD"
                           click={(e) =>
                              addInvoiceServices(
                                 e,
                                 <div className="additional_edit_invoice_reason">
                                    <TextArea
                                       style={{
                                          width: "100%",
                                       }}
                                       placeholder="Increase in price for......"
                                    />
                                    <span
                                       onClick={() => removeInvoiceServices(e)}
                                       style={{
                                          color: "#f44336",
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          marginLeft: "1em",
                                          display: "flex",
                                          alignItems: "center",
                                       }}
                                    >
                                       <p style={{ margin: 0 }}>X</p>
                                    </span>
                                 </div>
                              )
                           }
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WriteOffInvoice;
