import React from 'react'
import "./CompanyRequestInfo.css";

const CompanyRequestInfo = () => (
   <div className="unique_company_request_info">
      <p className="company_request_info_item">
         <span className="unique_company_request_info_keys">ID:</span>
         <span className="unique_company_request_info_values">SA54435</span>
      </p>
      <p className="company_request_info_item">
         <span className="unique_company_request_info_keys">COMPANY:</span>
         <span className="unique_company_request_info_values">DANGOTE</span>
      </p>
      <p className="company_request_info_item">
         <span className="unique_company_request_info_keys">DATE SUBMITTED: </span>
         <span className="unique_company_request_info_values">08 Jul 2021</span>
      </p>
      <p className="company_request_info_item">
         <span className="unique_company_request_info_keys">PAYMENT NUMBER: </span>
         <span className="unique_company_request_info_values">08</span>
      </p>
   </div>
);

export default CompanyRequestInfo
