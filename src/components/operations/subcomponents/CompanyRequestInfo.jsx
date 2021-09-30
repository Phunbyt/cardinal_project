import React from 'react'
import "./CompanyRequestInfo.css";

const CompanyRequestInfo = () => (
       <div className="company_request_info">
          <p className="company_request_info_item">
             <span>ID:</span>
             <span className="company_request_info_values">SA54435</span>
          </p>
          <p className="company_request_info_item">
             <span>COMPANY:</span>
             <span className="company_request_info_values">DANGOTE</span>
          </p>
          <p className="company_request_info_item">
             <span>DATE SUBMITTED: </span>
             <span className="company_request_info_values">08 Jul 2021</span>
          </p>
       </div>
    )

export default CompanyRequestInfo
