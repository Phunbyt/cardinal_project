import React from "react";
import "./ServiceInfo.css";

const NewServiceInfo = ({ serviceType, serviceCharge, boldText = false }) => {
   const boldStyle = boldText
      ? { fontWeight: "bold" }
      : { fontWeight: "normal" };
   return (
      <div className="service_info">
         <p style={boldStyle}>{serviceType}</p>
         <p style={boldStyle}>
            <span style={{ color: "#002564", fontWeight: "bold" }}># </span>
            <span className="service_info_text">{serviceCharge}</span>
         </p>
      </div>
   );
};

export default NewServiceInfo;
