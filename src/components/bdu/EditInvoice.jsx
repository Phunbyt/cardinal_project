import React, { useContext } from "react";
import EditInvoiceCard from "./subcomponents/EditInvoiceCard";
import BduContext from "../../contexts/bdu/BduContext";
import BlueButton from "../general/BlueButton";
import TextArea from "../general/TextArea";

const EditInvoice = () => {
   const { addInvoiceServices, invoiceServices, removeInvoiceServices } =
      useContext(BduContext);
   return (
      <div className="dashboard_view">
         <div className="dashboard_head">
            <div className="operations_dashboard_header">
               <h3>Invoice Application</h3>
            </div>
         </div>

         <div className="dashboard_requests">
            <div className="edit_invoice_forms">
               <div className="edit_invoice_form_field">
                  <EditInvoiceCard />
                  <div style={{ margin: "1em", maxWidth: "300px" }}>
                     <BlueButton buttonText="CONFIRM" />
                  </div>
               </div>
               <div className="edit_invoice_reason">
                  <div className="operations_dashboard_header">
                     <h3>Reason(s) for change</h3>
                  </div>

                  <div className="edit_invoice_reason_textarea">
                     <TextArea placeholder="Increase in price for......" />
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

export default EditInvoice;
