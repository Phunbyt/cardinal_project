import React from 'react'
import "./CompanyRequestInfo.css";


const RequestDetails = () => (
   <div className="company_request_details">
      <p className="company_request_info_item">
         <span className="company_request_info_keys">DATE OF EGM:</span>
         <span className="company_request_info_values">SA54435</span>
      </p>
      <p className="company_request_info_item">
         <span className="company_request_info_keys">OTHER INFORMATION:</span>
         <span className="company_request_info_values">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Nulla Lorem mollit cupidatat
            irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.{" "}
         </span>
      </p>
   </div>
);

export default RequestDetails
