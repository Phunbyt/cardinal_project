import React from "react";
import ServiceInfo from "./ServiceInfo";
import UniqueServiceInfo from "./UniqueServiceInfo";

const services = [
   { serviceType: "Share Capital History", serviceCharge: "3,000.00" },
   { serviceType: "Current Market Trend", serviceCharge: "5,000.00" },
   { serviceType: "Monthly Report", serviceCharge: "13,000.00" },
];
const ServiceInvoiceCard = ({discount}) => (
   <div>
      <div className="unpaidinvoice_card">
         <div className="unpaidinvoice_card_header">
            <p>Bill/Invoice</p>
         </div>
         <div className="unpaidinvoice_card_subject">
            <div className="unpaidinvoice_card_company">
               <p>
                  <span>COMPANY</span>:{" "}
                  <span className="unpaidinvoice_card_subject_info">
                     DANGOTE
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
                  <span className="unpaidinvoice_card_subject_info">
                     213498
                  </span>
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
                     21/9/2021
                  </span>
               </p>
            </div>
         </div>

         <div className="unpaidinvoice_card_banner">
            <h3>INVOICE DETAILS</h3>
         </div>

         <div className="unpaidinvoice_card_details">
            <div className="unpaidinvoice_card_details_header">
               <h3>Service Type</h3>
               <h3>Service Charge</h3>
            </div>
            <div className="unpaidinvoice_card_details_content">
               {services.map((service, index) => (
                  <ServiceInfo
                     key={index}
                     serviceType={service.serviceType}
                     serviceCharge={service.serviceCharge}
                  />
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
               <UniqueServiceInfo
                  serviceType={discount? 'Discount' : 'Credit'}
                  boldText
               />

                    <hr/>
               <ServiceInfo
                  serviceType="Total"
                  serviceCharge="18,000.00"
                  boldText
               />
            </div>
         </div>
      </div>
   </div>
);

export default ServiceInvoiceCard;
