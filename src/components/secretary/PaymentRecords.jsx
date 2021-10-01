/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import SearchBar from "./subcomponents/SearchBar";

const PaymentRecords = () => {
    const data = useMemo(
       () => [
          {
             invoiceNumber: "DR23554",
             date: "12 Aug 2021",
             subject: "Notice of AGM",
             companyName: "Bank Trust Plc",
             amount: "NGN 20,000.00",
          },
          {
             invoiceNumber: "SA54435",
             date: "08 Jul 2021",
             subject: "Notice of EGM",
             companyName: "Bank Trust Plc",
             amount: "NGN 20,000.00",
          },
          {
             invoiceNumber: "OS15445",
             date: "11 Sep 2021",
             subject: "E-Mandate Broadcast",
             companyName: "Bank Trust Plc",
             amount: "NGN 20,000.00",
          },
          {
             invoiceNumber: "OS15445",
             date: "11 Sep 2021",
             subject: "E-Mandate Broadcast",
             companyName: "Bank Trust Plc",
             amount: "NGN 20,000.00",
          },
          {
             invoiceNumber: "OS15445",
             date: "11 Sep 2021",
             subject: "E-Mandate Broadcast",
             companyName: "Bank Trust Plc",
             amount: "NGN 20,000.00",
             
          },
       ],
       []
    );

    const columns = useMemo(
       () => [
          {
             Header: "INVOICE NO",
             accessor: "invoiceNumber", // accessor is the "key" in the data
          },
          {
             Header: "DATE",
             accessor: "date",
          },
          {
             Header: "SUBJECT",
             accessor: "subject",
          },
          {
             Header: "COMPANY NAME",
             accessor: "companyName",
          },
          {
             Header: "AMOUNT PAID",
             accessor: "amount",
          },
       ],
       []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
       useTable({ columns, data });
   return (
      <div>
         <div className="dashboard_requests_header ">
            <h3 style={{ fontSize: "2rem" }}>Payment Records</h3>
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

         <div className="view_more_payments">
            <NavLink to="viewmore">View All Payment</NavLink>
         </div>
      </div>
   );
};

export default PaymentRecords;
