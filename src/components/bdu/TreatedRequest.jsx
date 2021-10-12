import React from "react";
import CompanyRequestInfo from "./subcomponents/CompanyRequestInfo";
import RequestDetails from "./subcomponents/RequestDetails";
import BlueButton from "../general/BlueButton";
import AttachedFiles from "./subcomponents/AttachedFiles";
import DocumentModal from "./subcomponents/DocumentModal";

const TreatedRequest = () => (
   <div>
      <div className="operations_dashboard_header">
         <h3>Notice of AGM Request</h3>
      </div>

      <div className="past_agm_company_info">
         <CompanyRequestInfo />
      </div>
      <div className="treat_request_info">
         <RequestDetails />
      </div>
      <div className="treat_request_info">
         <AttachedFiles />
      </div>
      <div className="submit_agm_report_request_btn">
         <BlueButton buttonText="SEND TO SECRETARY" />
      </div>
      <DocumentModal />
   </div>
);

export default TreatedRequest;
