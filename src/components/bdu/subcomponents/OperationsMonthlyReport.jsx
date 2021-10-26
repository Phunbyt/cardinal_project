import React from "react";
import ShareholdersInformation from "./ShareholdersInformation";
import ShareholderStructure from "./ShareholderStructure";
import TopBuyersAndSellers from "./TopBuyersAndSellers";

const OperationsMonthlyReport = () => (
   <div>
      <div className="report_segment_item">
         <ShareholderStructure />
      </div>
      <div className="report_segment_item">
         <TopBuyersAndSellers />
      </div>
      <div className="report_segment_item">
         <ShareholdersInformation />
      </div>
   </div>
);

export default OperationsMonthlyReport;
