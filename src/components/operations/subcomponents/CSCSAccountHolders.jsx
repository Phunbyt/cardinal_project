import React from "react";
import { Bar } from "react-chartjs-2";
import AttendanceItem from "./AttendanceItem";

const arbitraryStackKey = "stack1";

const state = {
   labels: ["September", "October"],

   datasets: [
      {
         label: "With CSCS",
         backgroundColor: ["#002564"],
         stack: arbitraryStackKey,
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [68, 68],
      },
      {
         label: "Without CSCS",
         backgroundColor: ["#A4003B"],
         stack: arbitraryStackKey,
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [32, 32],
      },
   ],
};

const options = {
   scales: {
      xAxes: [
         {
            stacked: true,
         },
      ],
      yAxes: [
         {
            stacked: true,
         },
      ],
   },
};
const headerText = "CSCS ACCOUNT HOLDERS";
const CSCSAccountHolders = () => (
   <div className="unique_poll_graph_item cscs_account_holders_graph">
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

export default CSCSAccountHolders;
