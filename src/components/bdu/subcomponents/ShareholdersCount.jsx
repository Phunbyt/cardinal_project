import React from "react";
import { Bar } from "react-chartjs-2";
import AttendanceItem from "./AttendanceItem";

const arbitraryStackKey = "stack1";
const secondArbitraryStackKey = "stack2";

const state = {
   labels: ["September", "October"],

   datasets: [
      {
         label: "Months",
         backgroundColor: ["#002564", "#A4003B"],
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [16436, 16457],
      },
   ],
};

const options = {
   title: {
      display: true,
      text: "Average Rainfall per month",
      fontSize: 20,
   },
   legend: {
      display: true,
      position: "right",
   },
};
const headerText = "NUMBER OF SHAREHOLDERS";
const ShareholdersCount = () => (
   <div className="unique_poll_graph_item shareholders_count_graph">
      <div
         style={{
            background: "#1B2058",
            color: "#ffffff",
            fontWeight: "bold",
            borderBottom: "1px solid #DFE0EB",
            fontSize: ".8rem",
            padding: "0.5em 1.5em",
         }}
      >
         <h3 style={{ margin: 0 }}>{headerText}</h3>
      </div>
      <div className="pollgraph_white">
         <div className="poll_graph_data">
            <div>
               <Bar data={state} options={options} />
            </div>
         </div>
      </div>
   </div>
);

export default ShareholdersCount;
