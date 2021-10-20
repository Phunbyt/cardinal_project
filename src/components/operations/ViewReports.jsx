import React from "react";
import CompanyCard from "../general/CompanyCard";
import cardinalLogo from "../../assets/CSRLLogo1.png";
import SelectionField from "./subcomponents/SelectionField";
import OperationsDatePicker from "./subcomponents/OperationsDatePicker";
import companyArray from "./subcomponents/companies";
import OperationShareCapitalHistory from "./subcomponents/OperationShareCapitalHistory";

const selectionItems = [
   "Monthly report",
   "Virtual Reporting Solution Report",
   "Share Capital History",
   "Dividend history/position",
   "Current Market trends",
   "Ownership Structure",
   "Mandated Accounts",
   "General Meeting Reports",
   "Previous AGM details ",
   "Other Relevant Reports",
];

const placeholder = "None Selected";

const ViewReports = () => (
   <div>
      <div className="unique_dashboard_head">
         <div className="unique_dashboard_requests_header">
            <p>Share Capital History</p>
         </div>

         <div className="dashboard_header">
            <CompanyCard logoUrl={cardinalLogo} />
         </div>
      </div>

      <div className="operations_view_reports">
         <div className="past_agm_company_info report_form_field">
            <form action="">
               <div className="selection_input_field">
                  <p style={{ margin: 0 }}>Choose Company</p>
                  <SelectionField
                     items={companyArray}
                     placeholder={placeholder}
                  />
               </div>
               <div className="special_input_field">
                  <div className="selection_input_field">
                     <p style={{ margin: 0 }}>Select a report</p>
                     <SelectionField
                        items={selectionItems}
                        placeholder={placeholder}
                     />
                  </div>
                  <div className="selection_input_field unique_selection_input_field">
                     <p style={{ margin: 0 }}>Choose month to upload</p>
                     <OperationsDatePicker />
                  </div>
               </div>
            </form>
         </div>
      </div>
      <div className="operations_view_reports">
         <OperationShareCapitalHistory />
      </div>
   </div>
);

export default ViewReports;
