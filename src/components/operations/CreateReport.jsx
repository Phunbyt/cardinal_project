import React from "react";
import BlueButton from "../general/BlueButton";
import UploadDocument from "../general/UploadDocument";
import UniqueNumberCard from "./subcomponents/UniqueNumberCard";
import uploadIcon from "../../assets/Group2.png";
import viewIcon from "../../assets/Group(1).png";
import SelectionField from "./subcomponents/SelectionField";
import companyArray from "./subcomponents/companies";
import OperationsDatePicker from "./subcomponents/OperationsDatePicker";
import OperationsReportTable from "./subcomponents/OperationsReportTable";

const uniqueCardData = [
   {
      text: "Upload Report Data",
      icon: uploadIcon,
      bgColor: "#002564",
   },

   { text: "View Reports", icon: viewIcon, bgColor: "#528DC2" },
];

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

const CreateReport = () => (
   <div className="past_agm">
      <div className="dashboard_head">
         <div className="operations_dashboard_header">
            <h3>Reports</h3>
         </div>
         <div className="fincon_dashboard_header">
            {uniqueCardData.map((uniqueCard, index) => (
               <UniqueNumberCard
                  key={index}
                  text={uniqueCard.text}
                  icon={uniqueCard.icon}
                  bgColor={uniqueCard.bgColor}
               />
            ))}
         </div>
      </div>

      <div className="past_agm_company_info report_form_field">
         <form action="">
            <div className="selection_input_field">
               <p style={{ margin: 0 }}>Select a report</p>
               <SelectionField
                  items={selectionItems}
                  placeholder={placeholder}
               />
            </div>
            <div className="selection_input_field">
               <p style={{ margin: 0 }}>Choose Company</p>
               <SelectionField items={companyArray} placeholder={placeholder} />
            </div>
            <div className="selection_input_field">
               <p style={{ margin: 0 }}>Choose month to upload</p>
               <OperationsDatePicker />
            </div>
            <div className="selected_input_field">
               <p style={{ margin: 0 }}>
                  <span>Company Name: </span>
                  <span>Company Name: </span>
               </p>
               <p style={{ margin: 0 }}>
                  <span>Report: </span>
                  <span>Company Name: </span>
               </p>
            </div>
            <div className="past_agm_company_upload report_form_field_upload">
               <p>Upload document</p>
               <UploadDocument />
            </div>

            <OperationsReportTable />
            <div className="submit_agm_report_request_btn">
               <BlueButton buttonText="COMPLETE UPLOAD" />
            </div>
         </form>
      </div>
   </div>
);

export default CreateReport;
