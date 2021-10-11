import React from "react";
import { NavLink } from "react-router-dom";
import UploadDocument from "../../general/UploadDocument";
import CompanyRequestInfo from "./CompanyRequestInfo";
import FinconDatePicker from "./FinconDatePicker";
import PaymentItem from "./PaymentItem";
import SelectionField from "./SelectionField";
import ServiceInfo from "./ServiceInfo";
import TaxDeduct from "./TaxDeduct";
import UniqueServiceInfo from "./UniqueServiceInfo";

const services = [
   { serviceType: "Share Capital History", serviceCharge: "3,000.00" },
   { serviceType: "Current Market Trend", serviceCharge: "5,000.00" },
   { serviceType: "Monthly Report", serviceCharge: "13,000.00" },
];
const PaymentInvoiceCard = ({ discount }) => (
   <div>
      <div className="unpaidinvoice_card unpaidinvoice_card_white">
         <div className="unpaidinvoice_card_details_content">
            <NavLink to="viewinvoice">
               <p style={{ margin: 0 }}>View Invoice</p>
            </NavLink>
         </div>
         <div className="unpaidinvoice_card_subject">
            <div className="unpaidinvoice_card_invoice">
               <CompanyRequestInfo />
            </div>
         </div>

         <div className="unpaidinvoice_card_banner">
            <h3>PAYMENT DETAILS</h3>
         </div>

         <div className="unpaidinvoice_card_details">
            <div className="unpaidinvoice_card_details_content">
               <UniqueServiceInfo serviceType="Amount Recieved" />
               <UniqueServiceInfo serviceType="Bank Charges (if any)" />

               <TaxDeduct />

               <PaymentItem
                  headerText="Payment Date:"
                  fieldItem={<FinconDatePicker />}
               />
               <PaymentItem
                  headerText="Payment Mode:"
                  fieldItem={
                     <SelectionField
                        placeholder="Select Payment Mode"
                        items={["Paystack", "Cheque", "Cash"]}
                     />
                  }
               />
               <PaymentItem
                  headerText="Upload Payment Proof:"
                  fieldItem={<UploadDocument />}
               />

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
                  serviceCharge="1,350.00"
                  boldText
               />

               <ServiceInfo
                  serviceType="Balance Due"
                  serviceCharge="18,000.00"
                  boldText
               />
            </div>
         </div>
      </div>
   </div>
);

export default PaymentInvoiceCard;
