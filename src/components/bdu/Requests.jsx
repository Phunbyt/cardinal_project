/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import CompanyCard from "../general/CompanyCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";

const Requests = () => {
   const ViewInvoice = (
      <NavLink
         style={{ color: "#528DC2", textDecoration: "none" }}
         to="viewtreatedrequest"
      >
         View/Send &gt;&gt;
      </NavLink>
   );

   const CheckBox = <input type="checkbox" />;
   const data = useMemo(
      () => [
         {
            checkItem: CheckBox,
            idNumber: "DR23554",
            date: "12 Aug 2021",
            requestType: "Notice of AGM",
            company: "Nestle",
            assignedTo: "Nestle",
            department: "CSU",

            action: ViewInvoice,
         },
         {
            checkItem: CheckBox,
            idNumber: "SA54435",
            date: "08 Jul 2021",
            requestType: "Notice of EGM",
            company: "Dangote",
            assignedTo: "Dangote",
            department: "CSU",

            action: ViewInvoice,
         },
         {
            checkItem: CheckBox,
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            company: "Dangote",
            assignedTo: "Dangote",
            department: "BDU",

            action: ViewInvoice,
         },
         {
            checkItem: CheckBox,
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            company: "Nestle",
            assignedTo: "Nestle",
            department: "CSU",

            action: ViewInvoice,
         },
         {
            checkItem: CheckBox,
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            company: "Dangote",
            assignedTo: "Dangote",
            department: "FINCON",

            action: ViewInvoice,
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: CheckBox,
            accessor: "checkItem", // accessor is the "key" in the data
         },
         {
            Header: "ID NO",
            accessor: "idNumber", // accessor is the "key" in the data
         },
         {
            Header: "DATE",
            accessor: "date",
         },
         {
            Header: "REQUEST TYPE",
            accessor: "requestType",
         },
         {
            Header: "COMPANY",
            accessor: "company",
         },
         {
            Header: "ASSIGNED TO",
            accessor: "assignedTo",
         },
         {
            Header: "DEPARTMENT",
            accessor: "department",
         },
         {
            Header: "ACTION",
            accessor: "action",
         },
      ],
      []
   );

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

   return (
      <div className="treatedrequests">
         <div className="dashboard_head">
            <div className="dashboard_requests_header">
               <h3>Dashboard</h3>
            </div>
            <div className="dashboard_header">
               <NumberCard text="Pending Bills" number={7} />
               <NumberCard
                  text="Treated Requests"
                  myPath="requests"
                  number={5}
               />
               <CompanyCard
                  logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
                  companyName="Total Nigeria"
               />
            </div>
         </div>
         <div className="dashboard_requests_header ">
            <h3 style={{ fontSize: "2rem" }}>Treated Requests</h3>
         </div>
         <div className="search_options">
            <SearchBar />
         </div>

         <div style={{ marginTop: "2em" }} className="table">
            <table
               cellSpacing={0}
               {...getTableProps()}
               style={{
                  width: "100%",
               }}
            >
               <thead
                  style={{
                     background: " #528DC2 ",
                     color: "#ffffff",
                     fontWeight: 800,
                     padding: "15px",
                     fontSize: "1rem",
                     width: "100%",
                  }}
               >
                  {headerGroups.map((headerGroup) => (
                     <tr style={{}} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th
                              {...column.getHeaderProps()}
                              style={{
                                 padding: "1em .5em",
                                 textAlign: "left",
                              }}
                           >
                              {/* {true ? 'Paid': <Link} */}
                              {column.render("Header")}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                     prepareRow(row);
                     return (
                        <tr {...row.getRowProps()}>
                           {row.cells.map((cell) => (
                              <td
                                 {...cell.getCellProps()}
                                 style={{ padding: "1em .5em" }}
                              >
                                 {cell.render("Cell")}
                              </td>
                           ))}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
         <div style={{ margin: "1em", maxWidth: "300px", flex: "1" }}>
            <BlueButton buttonText="SEND TO SECRETARY" />
         </div>
      </div>
   );
};

export default Requests;
