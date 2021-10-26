import React from "react";
import AttendanceItem from "./AttendanceItem";

const MonthCard = ({ month, data }) => {
   let serialNo = 0;
   return (
      <div className="monthly_report_card">
         <div
            style={{
               background: "#1B2058",
               color: "#ffffff",
               fontWeight: "bold",
               borderBottom: "1px solid #DFE0EB",
               padding: "0.5em 1.5em",
            }}
         >
            <h3 style={{ margin: 0 }}>{month}</h3>
         </div>

         <AttendanceItem
            columnOneText="S/N"
            columnTwoText="Name"
            columnFourText="Units"
            columnFiveText="%"
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
                  columnTwoText={item.name}
                  columnFourText={item.units}
                  columnFiveText={item.percentage}
               />
            );
         })}
      </div>
   );
};

export default MonthCard;
