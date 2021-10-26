import React from "react";
import TableItem from "./TableItem";

const subOwnerDetails = [
   {
      leftColumnText: "SPENNYMOOR LTD",
      middleColumnText: "2,013,119,834",
      rightColumnText: "39.13",
   },
   {
      leftColumnText: "SROYAL EXCHANGE ASSURANCE LONDON",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
];
const majorShareHolderDetails = [
   {
      leftColumnText: "NIGERIAN GOVERNMENT",
      middleColumnText: "2,013,119,834",
      rightColumnText: "39.13",
   },
   {
      leftColumnText: "DE-CANON INVESTMENT LTD",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
   {
      leftColumnText: "PHOENIX HOLDINGS LIMITED",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
   {
      leftColumnText: "PHOENIX HOLDINGS LIMITED",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
   {
      leftColumnText: "PHOENIX HOLDINGS LIMITED",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
   {
      leftColumnText: "PHOENIX HOLDINGS LIMITED",
      middleColumnText: "3,776",
      rightColumnText: "00.13",
   },
];

const OperationsOwnershipStructure = () => (
   <div style={{ border: "1px solid #DFE0EB", margin: "1.5em auto" }}>
      <div className="sub_ownership_details">
         <TableItem
            leftColumnText="FOREIGN"
            middleColumnText="HOLDINGS"
            rightColumnText="%HOLDINGS"
            boldText
            bgColor="#002564"
            textColor="#ffffff"
         />
         {subOwnerDetails.map((details, index) => (
            <TableItem
               key={index}
               leftColumnText={details.leftColumnText}
               middleColumnText={details.middleColumnText}
               rightColumnText={details.rightColumnText}
            />
         ))}
         <TableItem
            leftColumnText="SUB-TOTAL"
            middleColumnText="2,013,126,610 "
            rightColumnText="39.13"
            bgColor="#eaeaea"
         />
      </div>
      <div className="total_major_shareholders" style={{ marginTop: "1.5em" }}>
         <TableItem
            leftColumnText="MAJOR SHAREHOLDERS"
            middleColumnText=" "
            rightColumnText=""
            boldText
            textColor="#002564"
         />
         {majorShareHolderDetails.map((details, index) => (
            <TableItem
               key={index}
               leftColumnText={details.leftColumnText}
               middleColumnText={details.middleColumnText}
               rightColumnText={details.rightColumnText}
            />
         ))}
         <TableItem
            leftColumnText="SUB-TOTAL"
            middleColumnText="2,013,126,610 "
            rightColumnText="39.13"
            bgColor="#eaeaea"
         />

         <TableItem
            leftColumnText="GRAND TOTAL"
            middleColumnText="5,145,370,074"
            rightColumnText="100.00"
            boldText
            textColor="#000000"
         />
      </div>
   </div>
);

export default OperationsOwnershipStructure;
