/* eslint-disable react/no-array-index-key */
import React from 'react';
import {NavLink} from 'react-router-dom'
import BlueButton from '../general/BlueButton';
import CompanyCard from '../general/CompanyCard';
import ServiceInfo from './subcomponents/ServiceInfo';

const services = [
   { serviceType: 'Share Capital History', serviceCharge: '3,000.00' },
   { serviceType: 'Current Market Trend', serviceCharge: '5,000.00' },
   { serviceType: 'Monthly Report', serviceCharge: '13,000.00' },
];
const UnpaidInvoice = () => (
   <div className="unpaidinvoice">
      <div className="unique_dashboard_head">
         <div className="unique_dashboard_requests_header">
            <p>Payment</p>
         </div>

         <div className="dashboard_header">
            <CompanyCard
               logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
               companyName="Total Nigeria"
            />
         </div>
      </div>

      <div className="unpaidinvoice_card">
         <div className="unpaidinvoice_card_header">
            <p>Bill/Invoice</p>
         </div>
         <div className="unpaidinvoice_card_subject">
            <div className="unpaidinvoice_card_company">
               <p>
                  <span>COMPANY</span>:{' '}
                  <span className="unpaidinvoice_card_subject_info">
                     DANGOTE
                  </span>
               </p>
               <p>
                  <span>SUBJECT</span>:{' '}
                  <span className="unpaidinvoice_card_subject_info">AGM</span>
               </p>
            </div>
            <div className="unpaidinvoice_card_invoice">
               <p>
                  <span>Invoice</span>:{' '}
                  <span className="unpaidinvoice_card_subject_info">
                     213498
                  </span>
               </p>
               <p>
                  <span>Date</span>:{' '}
                  <span className="unpaidinvoice_card_subject_info">
                     12/8/2020
                  </span>
               </p>
               <p>
                  <span>Due Date</span>:{' '}
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
               <ServiceInfo
                  serviceType="Total"
                  serviceCharge="18,000.00"
                  boldText
               />
            </div>
         </div>
      </div>
      <div className="download_or_pay">
         <div className="download_or_pay_btn">
            <BlueButton buttonText="Download" />
         </div>

         <div className="download_or_pay_btn">
            <NavLink to="makepayment" style={{textDecoration: 'none'}}>
               <BlueButton buttonText="PAY NOW" />
            </NavLink>
         </div>
      </div>
   </div>
);

export default UnpaidInvoice;
