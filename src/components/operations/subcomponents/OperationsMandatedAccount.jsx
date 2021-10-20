/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const OperationsMandatedAccount = () => {
   const data = useMemo(
      () => [
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
         {
            serialNo: 1,
            shareholderName: "MR ADEOLA RICHARD ADEOLA",
            accountNumber: 430429,
            enquiry: "e-Mandate",
            medium: "Walk-in",
            dateReceived: "12/06/2021",
            status: "Completed",
            deadline: "Within 24 Hrs",
            remark: "e-Mandate Effected",
            phoneNumber: "08109382992",
            email: "adeola_riyal@gmail.com",
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: "S/N",
            accessor: "serialNo", // accessor is the "key" in the data
         },
         {
            Header: "Shareholder’s name",
            accessor: "shareholderName",
         },
         {
            Header: "Account No.",
            accessor: "accountNumber",
         },
         {
            Header: "Enquiry",
            accessor: "enquiry",
         },
         {
            Header: "Medium",
            accessor: "medium",
         },
         {
            Header: "Date Recieved",
            accessor: "dateReceived",
         },
         {
            Header: "Status",
            accessor: "status",
         },
         {
            Header: "Deadline",
            accessor: "deadline",
         },
         {
            Header: "Remark",
            accessor: "remark",
         },
         {
            Header: "Phone No.",
            accessor: "phoneNumber",
         },
         {
            Header: "Email",
            accessor: "email",
         },
      ],
      []
   );

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

   return (
      <div style={{ fontSize: ".8rem" }} className="treatedrequests">
         <div className="operations_download_reports">
            <NavLink
               to="null"
               style={{
                  textDecoration: "none",
                  color: "#528DC2",
               }}
            >
               <h5
                  style={{
                     display: "flex",
                     alignItems: "center",
                  }}
               >
                  Download
                  <ArrowDownwardIcon />
               </h5>
            </NavLink>
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
                     background: " #002564 ",
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
                                 textAlign: "center",
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
                                 style={{
                                    padding: ".5em",
                                    textAlign: "center",
                                    borderBottom: "1px solid #DFE0EB",
                                    fontSize: ".7rem",
                                 }}
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

export default OperationsMandatedAccount;
