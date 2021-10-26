import React from "react";
import { Bar } from "react-chartjs-2";
import "./PollGraph.css";

const PollGraph = ({
   headerText,
   percentageFor,
   percentageAgainst,
   percentageAbstain,
   state,
}) => (
   <div className="poll_graph_item">
      <p style={{ color: "#002564", fontWeight: "bold" }}>
         {headerText}
      </p>
      <div className="pollgraph">
         <div className="poll_analysis">
            <div className="poll_analysis_card">
               <div className="poll_analysis_card_vote">
                  <h3>Vote</h3>
                  <p>For</p>
                  <p>Against</p>
                  <p>Abstain</p>
               </div>
               <div className="poll_analysis_card_holdings">
                  <h3>% Holdings</h3>
                  <p>{percentageFor}%</p>
                  <p>{percentageAgainst}%</p>
                  <p>{percentageAbstain}%</p>
               </div>
            </div>
         </div>

         <div className="poll_graph_data">
            <div>
               <Bar
                  data={state}
                  options={{
                     title: {
                        display: true,
                        text: "Average Rainfall per month",
                        fontSize: 20,
                     },
                     legend: {
                        display: true,
                        position: "right",
                     },
                  }}
               />
            </div>
         </div>
      </div>
   </div>
);

export default PollGraph;
