import React from "react";
import "./AttendanceItem.css";

const AttendanceItem = ({
   columnOneText,
   columnTwoText,
   columnThreeText,
   columnFourText,
   boldText = false,
   bgColor = "#ffffff",
   textColor = "#000000",
}) => {
   const boldFont = boldText ? "bold" : 400;
   return (
      <div
         className="ownership_table_item"
         style={{
            background: bgColor,
            color: textColor,
            fontWeight: boldFont,
            borderBottom: "1px solid #DFE0EB",
         }}
      >
         <p>{columnOneText}</p>
         <p>{columnTwoText}</p>
         <p>{columnThreeText}</p>
         <p>{columnFourText}</p>
      </div>
   );
};

export default AttendanceItem;
