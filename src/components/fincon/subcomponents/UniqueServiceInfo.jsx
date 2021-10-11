import React from "react";
import "./ServiceInfo.css";

const UniqueServiceInfo = ({ serviceType, boldText = false }) => {
   const boldStyle = boldText
      ? { fontWeight: "bold" }
      : { fontWeight: "normal" };
   return (
      <div className="service_info">
         <p style={boldStyle}>{serviceType}</p>
         <p style={boldStyle}>
            <span style={{ color: "#002564", fontWeight: "bold" }}># </span>
            <span className="service_info_text">
               <input type="number" />
            </span>
         </p>
      </div>
   );
};

export default UniqueServiceInfo;
