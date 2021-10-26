import React from "react";
import AttendanceItem from "./AttendanceItem";

const SidebarDataCard = ({ titleText, headerRow, bodyRow }) => (
   <div style={{ width: "100%" }}>
      <div
         style={{
            background: "#1B2058",
            color: "#ffffff",
            fontWeight: "bold",
            borderBottom: "1px solid #DFE0EB",
            padding: "0.5em 1.5em",
         }}
      >
         <h3 style={{ margin: 0 }}>{titleText}</h3>
      </div>
      {headerRow.map((item, index) => (
         <AttendanceItem
            key={index}
            columnOneText={item.rowOne}
            columnTwoText=""
            columnThreeText={item.rowTwo}
            columnFourText=""
            columnFiveText={item.rowThree}
            boldText
         />
      ))}
      {bodyRow.map((item, index) => (
         <AttendanceItem
            key={index}
            columnOneText={item.rowOne}
            columnTwoText=""
            columnThreeText={item.rowTwo}
            columnFourText=""
            columnFiveText={item.rowThree}
         />
      ))}
   </div>
);

export default SidebarDataCard;
