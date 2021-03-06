import React, { useContext } from "react";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import NumberCard from "../general/NumberCard";
import CompanyCard from "../general/CompanyCard";
import IconTextField from "../general/IconTextField";
import OtherReports from "./subcomponents/OtherReports";
import BlueButton from "../general/BlueButton";
import SecretaryContext from "../../contexts/secretary/SecretaryContext";
import ReportError from "./subcomponents/ReportError";
import SelectionField from "./subcomponents/SelectionField";
import DocumentModal from "./subcomponents/DocumentModal";

const Reports = () => {
   const {  handleSubmit, handleError } =
      useContext(SecretaryContext);

   
   return (
      <div className="dashboard_view">
         <div className="dashboard_head">
            <div className="dashboard_header">
               <NumberCard text="Pending Bills" number={7} />
               <NumberCard text="Treated Requests" number={5} />
               <CompanyCard
                  logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
                  companyName="Total Nigeria"
               />
            </div>
         </div>

         <div className="request_form_content">
            <div className="request_form_content_form">
               <div className="dashboard_requests_header request_form_content_header">
                  <h3>Create AGM Notice</h3>
               </div>
               <form onSubmit={handleSubmit}>
                  <div className="select_report">
                     <p>Select a report</p>
                     <SelectionField
                        items={[
                           "Monthly report",
                           "Virtual Reporting Solution Report",
                           "Share Capital History",
                           "Dividend history/position",
                           "Current Market trends",
                           "Ownership Structure",
                           "Mandated Accounts",
                           "General Meeting Reports",
                           "Previous AGM details",
                           "Other Relevant Reports",
                        ]}
                        placeholder="Select a report"
                     />
                  </div>

                  <div className="agm_time_date">
                     <IconTextField
                        headerText="Date of AGM"
                        fieldIcon={<EventAvailableSharpIcon />}
                        placeholder="Select Date"
                        labelFor="date"
                     />
                  </div>

                  <div className="request_form_btn">
                     <BlueButton
                        click={()=>handleError(false)}
                        buttonText="VIEW / DOWNLOAD"
                     />
                  </div>
               </form>
            </div>
            <div className="request_form_content_links">
               <div className="request_links">
                  <OtherReports />
               </div>
            </div>
            <ReportError />
            <DocumentModal/>
         </div>
      </div>
   );
};

export default Reports;
