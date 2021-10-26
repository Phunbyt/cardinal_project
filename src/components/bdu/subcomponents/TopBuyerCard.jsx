import React from "react";
import AttendanceItem from "./AttendanceItem";

const TopBuyerCard = ({ headerText, data }) => {
   let serialNo = 0;

   return (
      <div className="top_buyers">
         <div className="unique_dashboard_requests_header">
            <p>{headerText}</p>
         </div>
         <div
            style={{
               background: "#1B2058",
               color: "#ffffff",
               fontWeight: "bold",
               borderBottom: "1px solid #DFE0EB",
               padding: "0.5em 1.5em",
            }}
         >
            <h3 style={{ margin: 0 }}>SHAREHOLDERS’ INFORMATION</h3>
         </div>
         <AttendanceItem
            columnOneText="S/N"
            columnTwoText="Buyer"
            columnThreeText=""
            columnFourText="Units Bought"
            columnFiveText="% of Issued
Shared Capital"
            boldText
            serialNumberColumn
         />
         {data.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  serialNumberColumn
                  columnOneText={serialNo}
                  columnTwoText={item.buyer}
                  columnThreeText=""
                  columnFourText={item.shareCapital}
                  columnFiveText={item.shareCapital}
               />
            );
         })}
      </div>
   );
};

export default TopBuyerCard;
