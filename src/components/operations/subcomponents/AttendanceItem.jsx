import React from "react";
import "./AttendanceItem.css";

const AttendanceItem = ({
   columnOneText,
   columnTwoText,
   columnThreeText,
   columnFourText,
   columnFiveText,
   boldText = false,
   serialNumberColumn = false,
   bgColor = "#ffffff",
   textColor = "#000000",
}) => {
   const boldFont = boldText ? "bold" : 400;
   const addMargin = serialNumberColumn ? "30px" : "none";
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
         {columnOneText && (
            <p style={{ margin: 0, maxWidth: addMargin }}>{columnOneText}</p>
         )}
         {columnTwoText && (
            <p style={{ margin: 0, marginRight: "1em"}}>{columnTwoText}</p>
         )}
         {columnThreeText && <p>{columnThreeText}</p>}
         {columnFourText && <p>{columnFourText}</p>}
         {columnFiveText && <p>{columnFiveText}</p>}
      </div>
   );
};

export default AttendanceItem;
