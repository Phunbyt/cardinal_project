import React from "react";
import AttendanceItem from "./AttendanceItem";
import registeredProxy from "./registeredProxyData";

let serialNo = 0;

const RegisteredProxy = () => (
   <div style={{ marginTop: "1.5em" }}>
      <div
         style={{
            background: "#1B2058",
            color: "#ffffff",
            fontWeight: "bold",
            borderBottom: "1px solid #DFE0EB",
            padding: "0.5em 1.5em",
         }}
      >
         <h3 style={{ margin: 0 }}>REGISTERED PROXY LIST</h3>
      </div>
      <AttendanceItem
         columnOneText="S/N"
         columnTwoText="Acc. No."
         columnThreeText="Names"
         columnFourText="Proxy Names"
         columnFiveText="Holdings"
      />

      <div className="attendance_chairman">
         {registeredProxy.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.accountNumber}
                  columnThreeText={item.fullName}
                  columnFourText={item.proxyName}
                  columnFiveText={item.holdings}
               />
            );
         })}
         <AttendanceItem
            columnOneText={`Total Records: ${registeredProxy.length}`}
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            columnFiveText="90,189,837"
            boldText
            bgColor="#eaeaea"
         />
      </div>
   </div>
);

export default RegisteredProxy;
