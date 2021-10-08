import React, { useContext } from "react";
import {NavLink} from "react-router-dom"
import InvoiceCard from "./subcomponents/InvoiceCard";
import TextArea from "../general/TextArea";
import BlueButton from "../general/BlueButton";
import FinconContext from "../../contexts/fincon/FinconContext";
import RejectNotificationModal from "./subcomponents/RejectNotificationModal";

const AcceptRejectInvoice = () => {
   const {
      addInvoiceServices,
      invoiceServices,
      removeInvoiceServices,
      handleOpen,
   } = useContext(FinconContext);
   return (
      <div className="dashboard_view">
         <div className="dashboard_head">
            <div className="operations_dashboard_header">
               <h3>Invoice Application</h3>
            </div>
         </div>
         <div className="dashboard_requests">
            <div className="fincon_invoice_nav_links">
               <NavLink to="recordpayment">
                  <h5>Record Payment &gt;&gt;</h5>
               </NavLink>
               <NavLink to="writeoff">
                  <h5>Write off &gt;&gt;</h5>
               </NavLink>
               <NavLink to="invoicecredit">
                  <h5>Credit &gt;&gt;</h5>
               </NavLink>
               <NavLink to="invoicediscount">
                  <h5>Discount &gt;&gt;</h5>
               </NavLink>
            </div>
         </div>
         <div className="dashboard_requests">
            <div className="edit_invoice_forms">
               <div className="edit_invoice_form_field">
                  <InvoiceCard />

                  <div className="fincon_invoice_decision_btns">
                     <div
                        style={{ margin: "1em", maxWidth: "300px", flex: "1" }}
                     >
                        <BlueButton
                           click={handleOpen}
                           buttonText="REJECT"
                           bgColor="linear-gradient(279.3deg, #E61C23 -4.92%, #8B0A0E 107.31%)"
                        />
                     </div>
                     <div
                        style={{ margin: "1em", maxWidth: "300px", flex: "1" }}
                     >
                        <BlueButton buttonText="CONFIRM" />
                     </div>
                  </div>
               </div>
               <div className="edit_invoice_reason">
                  <div className="operations_dashboard_header">
                     <h3>Reason(s) for Rejection</h3>
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
               <RejectNotificationModal/>
         </div>
      </div>
   );
};

export default AcceptRejectInvoice;
