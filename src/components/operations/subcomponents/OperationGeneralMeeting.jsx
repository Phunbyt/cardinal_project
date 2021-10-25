import React from "react";
import AttendanceDetails from "./AttendanceDetails";
import AttendancSummary from "./AttendanceSummary";
import PollResults from "./PollResults";
import RegisteredProxy from "./RegisteredProxy";

const OperationGeneralMeeting = () => (
   <div>
      <AttendanceDetails />
      <AttendancSummary />
      <RegisteredProxy />
      <PollResults />
   </div>
);

export default OperationGeneralMeeting;
