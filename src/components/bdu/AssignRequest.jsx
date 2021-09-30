import React from "react";
import CompanyRequestInfo from "./subcomponents/CompanyRequestInfo";
import RequestDetails from "./subcomponents/RequestDetails";
import BlueButton from "../general/BlueButton";
import AttachedFiles from "./subcomponents/AttachedFiles";
import SelectionField from "./subcomponents/SelectionField";

const AssignRequest = () => (
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
      <div className="assign_request_div">
         <div className="assign_request_div">
            <SelectionField
               placeholder="Select assignor..."
               items={[
                  "Anthony Philips",
                  "Olawale Michael",
                  "Haruna Musa",
                  "Indogesit Effiong",
               ]}
            />
         </div>
         <div className="assign_request_div_btn">
            <BlueButton buttonText="ASSIGN" />
         </div>
      </div>
   </div>
);

export default AssignRequest;
