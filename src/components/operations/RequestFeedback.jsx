import React from 'react'
import BlueButton from "../general/BlueButton";
import TextArea from "../general/TextArea";
import UploadDocument from "../general/UploadDocument";
import CompanyRequestInfo from "./subcomponents/CompanyRequestInfo";

const RequestFeedback = () => (
   <div>
      <div className="operations_dashboard_header">
         <h3>Notice of EGM Request</h3>
      </div>

      <div className="past_agm_company_info">
         <CompanyRequestInfo />
      </div>
      <div className="past_agm_company_info">
         <form action="">
            <TextArea placeholder="Input past AGM details here..." />

            <div className="past_agm_company_upload">
               <p>Upload document</p>
               <UploadDocument />
            </div>

            <div className="submit_agm_report_request_btn">
               <BlueButton buttonText="SEND REQUEST OUTCOME" />
            </div>
         </form>
      </div>
   </div>
);

export default RequestFeedback
