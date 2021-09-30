import React from "react";
import viewIcon from "../../../assets/see.png";

const AttachedFiles = () => (
   <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
         <p
            style={{
               border: "1px solid #528dc2",
               padding: "1em",
               background: "#f4f4f5",
               margin: 0,
               marginRight: "1em",
            }}
         >
            AGM.pdf
         </p>
         <p
            style={{
               border: "1px solid #528dc2",
               padding: "1em",
               background: "#f4f4f5",
               margin: 0,
               marginRight: "1em",
            }}
         >
            AGM.pdf
         </p>
      </div>
      <div style={{ opacity: "0.5" }} className="view_document">
         <img src={viewIcon} alt="viewIcon" />
         <p style={{ margin: 0 }}>view</p>
      </div>
   </div>
);

export default AttachedFiles;
