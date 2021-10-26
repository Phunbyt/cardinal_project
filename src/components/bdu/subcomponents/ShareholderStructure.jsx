import React from "react";
import CSCSAccountHolders from "./CSCSAccountHolders";
import ShareholdersCount from "./ShareholdersCount";
import ShareholdingStructure from "./ShareholdingStructure";
import "./ShareholderStructure.css";

const ShareholderStructure = () => (
   <div>
      <div className="unique_dashboard_requests_header">
         <p>Shareholder Structure</p>
      </div>
      <div className="shareholders_structure_graphs">
         <ShareholdersCount />
         <CSCSAccountHolders />
         <ShareholdingStructure />
      </div>
   </div>
);

export default ShareholderStructure;
