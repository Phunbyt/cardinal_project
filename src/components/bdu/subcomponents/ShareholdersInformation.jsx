import React from "react";
import MonthCard from "./MonthCard";
import SidebarDataCard from "./SidebarDataCard";
import "./ShareholdersInformation.css";
import shareholders from "./topShareholders";
import SidebarGraphCard from "./SidebarGraphCard";

const countries = [
   { name: "LUXEMBORG", units: "1,295,272", percentage: "0.1358%" },
   { name: "BELGIUM", units: "1,098,131", percentage: "0.1151%" },
   { name: "CANADA", units: "356,668", percentage: "0.0374%" },
   { name: "UNITED KINGDOM", units: "262,000", percentage: "0.0275%" },
   {
      name: "UNITED STATES OF AMERICA",
      units: "261,745",
      percentage: "0.0274%",
   },
   { name: "AUSTRALIA", units: "222,723", percentage: "0.0233%" },
   { name: "KAZAKHSTAN", units: "213,598", percentage: "0.0224%" },
   { name: "SOUTH AFRICA", units: "210,000", percentage: "0.0220%" },
   { name: "SWEDEN", units: "172,700", percentage: "0.0181%" },
];
const totalVolumeTradedHeader = [
   {
      rowOne: "Volume of shares",
      rowTwo: "volume of shares (₦)",
      rowThree: "Closing price (₦)",
   },
];
const companyFreeFloatHeader = [
   {
      rowOne: "Free Float Shares",
      rowTwo: "Issued Share Capital",
      rowThree: "%",
   },
];
const companyFreeFloatBody = [
   {
      rowOne: "290, 164, 252",
      rowTwo: "953,910,000",
      rowThree: "30.42",
   },
];

const state = {
   labels: ["September", "October"],

   datasets: [
      {
         label: "Months",
         backgroundColor: ["#002564", "#A4003B"],
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [0.0046, 0.0046],
      },
   ],
};
const newState = {
   labels: ["LIVESTOCK", "OKOMU OIL", "PRESCO"],

   datasets: [
      {
         label: "Months",
         backgroundColor: ["#002564", "#D68B1C", "#A4003B"],
         fontColor: "#ffffff",
         borderColor: "rgba(0,0,0,1)",
         borderWidth: 2,
         data: [0.0121, 0.0059, 0.019],
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
const headerText = "VOLUME TRADED RELATIVE TO ISSUED SHARE CAPITAL";
const newHeaderText =
   "PEER COMPARISON: VOLUME TRADED RELATIVE TO ISSUED SHARE CAPITAL";
const ShareholdersInformation = () => (
   <>
      <div className="shareholders_information">
         <div className="left_data">
            <div className="unique_dashboard_requests_header">
               <p>Shareholder’s Information</p>
            </div>
            <div className="sub_dahsboard_header">
               <p>FOREIGN SHAREHOLDERS BY COUNTRY</p>
            </div>
            <div className="shareholders_by_country">
               <MonthCard month="September" data={countries} />
               <MonthCard month="October" data={countries} />
            </div>
            <div className="unique_dashboard_requests_header report_segment_item">
               <p>Top 50 Shareholders</p>
            </div>

            <div className="shareholders_by_country">
               <MonthCard month="September" data={shareholders} />
               <MonthCard month="October" data={shareholders} />
            </div>
         </div>
         <div className="right_data">
            <div className="report_segment_item">
               <SidebarDataCard
                  titleText="COMPANY FREE FLOAT"
                  headerRow={companyFreeFloatHeader}
                  bodyRow={companyFreeFloatBody}
               />
            </div>
            <div className="report_segment_item">
               <SidebarDataCard
                  titleText="TOTAL VOLUME TRADED"
                  headerRow={totalVolumeTradedHeader}
                  bodyRow={companyFreeFloatBody}
               />
            </div>
            <div className="report_segment_item">
               <SidebarGraphCard
                  headerText={headerText}
                  state={state}
                  options={options}
               />
            </div>
            <div className="report_segment_item">
               <SidebarGraphCard
                  headerText={newHeaderText}
                  state={newState}
                  options={options}
               />
            </div>
         </div>
      </div>
   </>
);

export default ShareholdersInformation;
