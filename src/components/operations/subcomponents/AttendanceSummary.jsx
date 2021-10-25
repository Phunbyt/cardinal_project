import React from "react";
import AttendanceItem from "./AttendanceItem";

const RenderLoop = ({
   columnOneText,
   columnTwoText,
   columnThreeText,
   columnFourText,
}) => (
   <>
      <AttendanceItem
         columnOneText={columnOneText}
         columnTwoText={columnTwoText}
         columnThreeText={columnThreeText}
         columnFourText={columnFourText}
         bgColor="#eaeaea"
      />
      <AttendanceItem
         columnOneText=""
         columnTwoText=""
         columnThreeText=""
         columnFourText=""
      />
   </>
);

const tableData = [
   {
      columnOne: "Chairman",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Directors",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Directors (Online Attendance)",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Company Secretary",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Shareholders",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Proxies",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "External Auditors",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Regulators",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Observers",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
   {
      columnOne: "Registrars",
      columnTwo: "111",
      columnThree: "",
      columnFour: "111",
   },
];
const AttendancSummary = () => (
   <div style={{ marginTop: "5em" }}>
      <div
         style={{
            background: "#1B2058",
            color: "#ffffff",
            fontWeight: "bold",
            borderBottom: "1px solid #DFE0EB",
            padding: "0.5em 1.5em",
         }}
      >
         <h3 style={{ margin: 0 }}>
            47TH AGM GENERAL MEETING: ATTENDANCE SUMMARY
         </h3>
      </div>
      <AttendanceItem
         columnOneText=""
         columnTwoText="Before"
         columnThreeText="During"
         columnFourText="Total"
      />
      {tableData.map((data, index) => (
         <RenderLoop
            key={index}
            columnOneText={data.columnOne}
            columnTwoText={data.columnTwo}
            columnThreeText={data.columnThree}
            columnFourText={data.columnFour}
         />
      ))}
      <AttendanceItem
         columnOneText="Sub-total"
         columnTwoText={123}
         columnThreeText=""
         columnFourText={123}
         bgColor="#eaeaea"
         boldText
      />
      <AttendanceItem
         columnOneText="Total: 555"
         columnTwoText=""
         columnThreeText=""
         columnFourText=""
      />
   </div>
);

export default AttendancSummary;
