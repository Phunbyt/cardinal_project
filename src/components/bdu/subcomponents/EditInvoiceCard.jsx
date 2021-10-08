import React, { useContext } from "react";
import ServiceInfo from "./ServiceInfo";
import NewServiceInfo from "./NewServiceInfo";
import BduContext from "../../../contexts/bdu/BduContext";
import BlueButton from "../../general/BlueButton";
import SelectionField from "./SelectionField";
import BduDatePicker from "./BduDatePicker";
import EditServiceInfo from "./EditServiceInfo";

const serviceTypes = [
   "Share Capital History",
   "Current Market Trend",
   "Monthly Report",
];
const EditInvoiceCard = () => (
   <div className="unpaidinvoice_card">
      <div className="unpaidinvoice_card_header">
         <p>Bill/Invoice</p>
      </div>
      <div className="unpaidinvoice_card_subject">
         <div className="unpaidinvoice_card_company">
            <p>
               <span>COMPANY</span>:{" "}
               <span className="unpaidinvoice_card_subject_info">
                  <input type="text" />
               </span>
            </p>
            <p>
               <span>SUBJECT</span>:{" "}
               <span className="unpaidinvoice_card_subject_info">AGM</span>
            </p>
         </div>
         <div className="unpaidinvoice_card_invoice">
            <p>
               <span>Invoice</span>:{" "}
               <span className="unpaidinvoice_card_subject_info">213498</span>
            </p>
            <p>
               <span>Date</span>:{" "}
               <span className="unpaidinvoice_card_subject_info">
                  12/8/2020
               </span>
            </p>
            <p>
               <span>Due Date</span>:{" "}
               <span className="unpaidinvoice_card_subject_info">
                  12/8/2020
               </span>
            </p>
         </div>
      </div>

      <div className="unpaidinvoice_card_banner">
         <h3>INVOICE DETAILS</h3>
      </div>

      <div className="unpaidinvoice_card_details">
         <div className="subject_and_date">
            <div className="select_subject">
               <p>Select Subject</p>
               <SelectionField
                  placeholder="None selected"
                  background="#ffffff"
                  items={["AGM", "Monthly Report", "Share Capital History"]}
               />
            </div>
            <div className="select_date">
               <p style={{ margin: 0 }}>Due Date</p>
               <BduDatePicker className="select_due_date" />
            </div>
         </div>

         <div
            style={{ paddingRight: "8em" }}
            className="unpaidinvoice_card_details_header"
         >
            <h3>Service Type</h3>
            <h3>Tax</h3>
            <h3>Service Charge</h3>
         </div>
         <div className="unpaidinvoice_card_details_content">
            {serviceTypes.map((service, index) => (
               <EditServiceInfo key={index} serviceType={service} />
            ))}

            <hr />
            <ServiceInfo
               serviceType="Subtotal"
               serviceCharge="18,000.00"
               boldText
            />
            <ServiceInfo
               serviceType="Tax (VAT - 7.5%)"
               serviceCharge="1,350.00"
               boldText
            />
            <ServiceInfo
               serviceType="Total"
               serviceCharge="18,000.00"
               boldText
            />
         </div>
      </div>
   </div>
);

export default EditInvoiceCard;
