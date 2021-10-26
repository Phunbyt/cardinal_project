import React from "react";
import { Bar } from "react-chartjs-2";
import AttendanceItem from "./AttendanceItem";

const arbitraryStackKey = "stack1";

const state = {
   labels: ["September", "October"],
   datasets: [
      {
         label: "Foreign Investors",
         data: [12, 19, 3],
         backgroundColor: "#002564",
      },
      {
         label: "Instiitutional Investors",
         data: [2, 3, 20],
         backgroundColor: "#D68B1C",
      },
      {
         label: "Local Investors",
         data: [3, 10, 13],
         backgroundColor: "#A4003B",
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
const headerText = "SHAREHOLDING STRUCTURE";
const ShareholdingStructure = () => (
   <div className="unique_poll_graph_item shareholding_structure_graph">
      <div
         style={{
            background: "#1B2058",
            color: "#ffffff",
            fontWeight: "bold",
            borderBottom: "1px solid #DFE0EB",
            padding: "0.5em 1.5em",
            fontSize: ".8rem",
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

export default ShareholdingStructure;
