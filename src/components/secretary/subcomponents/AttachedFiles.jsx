import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
         >
            <span style={{ marginRight: "1em" }}> AGM.pdf</span>
            <CancelOutlinedIcon style={{ color: "#9FA2B4" }} />
         </p>
         <p
            style={{
               border: "1px solid #528dc2",
               padding: "1em",
               background: "#f4f4f5",
               margin: 0,
               marginRight: "1em",
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
         >
            <span style={{ marginRight: "1em" }}> AGM.pdf</span>
            <CancelOutlinedIcon style={{ color: "#9FA2B4" }} />
         </p>
      </div>
   </div>
);

export default AttachedFiles;
