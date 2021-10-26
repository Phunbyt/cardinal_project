import React from "react";
import PollGraph from "./PollGraph";

const state = {
   labels: ["FOR", "AGAINST", "ABSTAIN"],
   datasets: [
      {
         label: "Number of Votes",
         backgroundColor: ["#1BA9EA", "#8B0A0E", "#88f436"],
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [50000000, 50000000, 10000000],
      },
   ],
};

const percentageFor = 20;
const percentageAgainst = 20;
const percentageAbstain = 20;

const PollResults = () => (
   <div style={{ margin: "1.5em auto" }}>
      <div className="unique_dashboard_requests_header">
         <p>Poll Results </p>
      </div>
      <PollGraph
         headerText="Resolution 2: To declare a dividend"
         percentageFor={percentageFor}
         percentageAgainst={percentageAgainst}
         percentageAbstain={percentageAbstain}
         state={state}
      />
      <PollGraph
         headerText="Resolution 3a: To re-elect mr. haralambos (Michael) as a director"
         percentageFor={percentageFor}
         percentageAgainst={percentageAgainst}
         percentageAbstain={percentageAbstain}
         state={state}
      />
      <PollGraph
         headerText="Resolution 3b: To re-elect mrs. Chichi Ugonna as a director"
         percentageFor={percentageFor}
         percentageAgainst={percentageAgainst}
         percentageAbstain={percentageAbstain}
         state={state}
      />
      <PollGraph
         headerText="Resolution 4: To re-elect mr. haralambos (Michael) as a director"
         percentageFor={percentageFor}
         percentageAgainst={percentageAgainst}
         percentageAbstain={percentageAbstain}
         state={state}
      />
   </div>
);

export default PollResults;
