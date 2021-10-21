import React from "react";
import AttendanceItem from "./AttendanceItem";
import meetingData from "./meetingData";

const {
   chairman,
   observers,
   registrars,
   directors,
   secretaries,
   shareholders,
   regulators,
   auditors,
   proxies,
} = meetingData;
let serialNo = 0;

const AttendanceDetails = () => (
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
         <h3 style={{ margin: 0 }}>47TH GENERAL MEETING ATTENDANCE DETAILS</h3>
      </div>
      <AttendanceItem
         columnOneText="S/N"
         columnTwoText="Fullname"
         columnThreeText="Acc. No."
         columnFourText="Company Name"
         boldText
      />

      <div className="attendance_chairman">
         <AttendanceItem
            columnOneText="Chairman"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {chairman.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_directors">
         <AttendanceItem
            columnOneText="Directors"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {directors.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_secretary">
         <AttendanceItem
            columnOneText="Company Secretary"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {secretaries.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_shareholders">
         <AttendanceItem
            columnOneText="Shareholders"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {shareholders.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_proxy">
         <AttendanceItem
            columnOneText="Proxy"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {proxies.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_regulators">
         <AttendanceItem
            columnOneText="Regulators"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {regulators.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_auditors">
         <AttendanceItem
            columnOneText="External Auditors"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {auditors.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_observers">
         <AttendanceItem
            columnOneText="Observers"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {observers.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
      <div className="attendance_registrars">
         <AttendanceItem
            columnOneText="Registrars"
            columnTwoText=""
            columnThreeText=""
            columnFourText=""
            boldText
            bgColor="#eaeaea"
         />
         {registrars.map((item, index) => {
            serialNo += 1;
            return (
               <AttendanceItem
                  key={index}
                  columnOneText={serialNo}
                  columnTwoText={item.fullName}
                  columnThreeText={item.accountNumber}
                  columnFourText={item.companyName}
               />
            );
         })}
      </div>
   </div>
);

export default AttendanceDetails;
