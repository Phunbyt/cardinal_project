import React from "react";
import BlueButton from "../general/BlueButton";
import FormGroup from "../general/FormGroup";
import TextArea from "../general/TextArea";
import UploadDocument from "../general/UploadDocument";
import CompanyRequestInfo from "./subcomponents/CompanyRequestInfo";

const PastAgm = () => (
   <div className="past_agm">
      <div className="operations_dashboard_header">
         <h3>Past AGM Report Request</h3>
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
            <div className="past_agm_company_links">
               <p>Input links related to request</p>
               <FormGroup placeholder="Input link here" />
               <FormGroup placeholder="Input link here" />
            </div>
            <div className="submit_agm_report_request_btn">
               <BlueButton buttonText="SEND REQUEST OUTCOME" />
            </div>
         </form>
      </div>
   </div>
);

export default PastAgm;
