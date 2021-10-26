import React from "react";
import { Bar } from "react-chartjs-2";

const SidebarGraphCard = ({state, headerText, options}) => (
   <div className="">
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

export default SidebarGraphCard;
