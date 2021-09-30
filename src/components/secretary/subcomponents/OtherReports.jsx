import React from "react";
import "./RelatedRequests.css";
import RelatedLinks from "./RelatedLinks";

const reports = [
   { linkPath: "monthlyreport", linkText: "Monthly report" },
   { linkPath: "vrsreport", linkText: "Virtual Reporting Solution Report" },
   { linkPath: "sharecapitalreport", linkText: "Share Capital History" },
   { linkPath: "dividendreport", linkText: "Dividend history/position" },
   { linkPath: "currenttrend", linkText: "Current Market trends" },
   { linkPath: "ownershipstructure", linkText: "Ownership Structure" },
   { linkPath: "mandatedaccounts", linkText: "Mandated Accounts" },
   { linkPath: "generalmeeting", linkText: "General Meeting Reports" },
   { linkPath: "previousagm", linkText: "Previous AGM details" },
   { linkPath: "otherreports", linkText: "Other Relevant Reports" },
];

const OtherReports = () => (
   <div className="related_requests">
      <div className="dashboard_requests_header related_requests_header ">
         <h3>Other Reports</h3>
      </div>

      <div className="related_requests_links">
         {reports.map((report, index) => (
            <RelatedLinks
               key={index}
               linkPath={report.linkPath}
               linkText={report.linkText}
            />
         ))}
      </div>
   </div>
);

export default OtherReports;
