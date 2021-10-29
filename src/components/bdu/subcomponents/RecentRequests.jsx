/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import BlueButton from "../../general/BlueButton";

const RecentRequests = () => {
   const actionBtn = (
      <NavLink to="assignrequest" style={{ textDecoration: "none" }}>
         <BlueButton bgColor="#528DC2" buttonText="VIEW" />
      </NavLink>
   );

   const data = useMemo(
      () => [
         {
            idNumber: "DR23554",
            date: "12 Aug 2021",
            requestType: "Notice of AGM",
            companyName: "Bank Trust",
            action: actionBtn,
         },
         {
            idNumber: "SA54435",
            date: "08 Jul 2021",
            requestType: "Notice of EGM",
            companyName: "Bank Trust",
            action: actionBtn,
         },
         {
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            action: actionBtn,
         },
         {
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            action: actionBtn,
         },
         {
            idNumber: "OS15445",
            date: "11 Sep 2021",
            requestType: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            action: actionBtn,
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
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
            accessor: "companyName",
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
      <div style={{ fontSize: ".8rem" }} className="treatedrequests">
         <div className="table">
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
                     fontSize: ".8rem",
                     width: "100%",
                  }}
               >
                  {headerGroups.map((headerGroup) => (
                     <tr style={{}} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th
                              {...column.getHeaderProps()}
                              style={{
                                 padding: ".5em",
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
                                 style={{ padding: ".5em" }}
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
      </div>
   );
};

export default RecentRequests;
