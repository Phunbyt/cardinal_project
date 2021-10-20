import React from "react";
import "./TableItem.css";

const TableItem = ({
   leftColumnText,
   middleColumnText,
   rightColumnText,
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
         <p>{leftColumnText}</p>
         <p style={{ textAlign: "right" }}>{middleColumnText}</p>
         <p style={{ textAlign: "right" }}>{rightColumnText}</p>
      </div>
   );
};

export default TableItem;
