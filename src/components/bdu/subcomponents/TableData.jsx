/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";

const TableData = () => {
   const checkPaid = (status) => {
      if (status === "paid")
         return (
            <div>
               <p style={{ margin: 0 }}>Completed</p>
               <NavLink style={{ textDecoration: "none" }} to="unpaidinvoice">
                  <p style={{ margin: 0 }}>View</p>
               </NavLink>
            </div>
         );
      return (
         <div>
            <NavLink style={{ textDecoration: "none" }} to="unpaidinvoice">
               <p style={{ margin: 0 }}>Edit Invoice</p>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="unpaidinvoice">
               <p style={{ margin: 0 }}>View</p>
            </NavLink>
         </div>
      );
   };
   const statusColor = (status) => {
      if (status === "paid")
         return <p style={{ margin: 0, color: "#2B2B2B" }}>Paid</p>;
      if (status === "partially paid")
         return <p style={{ margin: 0, color: "#5EA179" }}>Partially Paid</p>;
      if (status === "awaiting confirmation")
         return (
            <p style={{ margin: 0, color: "#B92121" }}>Awaiting Confirmation</p>
         );
return <p style={{ margin: 0 }}>Not Paid</p>;

   };

   const data = useMemo(
      () => [
         {
            invoiceNumber: "DR23554",
            date: "12 Aug 2021",
            subject: "Notice of AGM",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("paid"),
            dueDate: "12 Aug 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("paid"),
         },
         {
            invoiceNumber: "SA54435",
            date: "08 Jul 2021",
            subject: "Notice of EGM",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("partially paid"),
            dueDate: "08 Jul 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("partially paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("not paid"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("not paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("paid"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("awaiting confirmation"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("awaiting confirmation"),
         },
         {
            invoiceNumber: "DR23554",
            date: "12 Aug 2021",
            subject: "Notice of AGM",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("paid"),
            dueDate: "12 Aug 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("paid"),
         },
         {
            invoiceNumber: "SA54435",
            date: "08 Jul 2021",
            subject: "Notice of EGM",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("partially paid"),
            dueDate: "08 Jul 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("partially paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("not paid"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("not paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("paid"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("paid"),
         },
         {
            invoiceNumber: "OS15445",
            date: "11 Sep 2021",
            subject: "E-Mandate Broadcast",
            companyName: "Bank Trust",
            invoiceStatus: statusColor("awaiting confirmation"),
            dueDate: "11 Sep 2021",
            amount: "NGN 20,000.00",
            balanceDue: "NGN 20,000.00",
            payment: checkPaid("awaiting confirmation"),
         },
      ],
      []
   );

   const columns = useMemo(
      () => [
         {
            Header: "ID NO",
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
            Header: "INVOICE STATUS",
            accessor: "invoiceStatus",
         },
         {
            Header: "DUE DATE",
            accessor: "dueDate",
         },
         {
            Header: "AMOUNT",
            accessor: "amount",
         },
         {
            Header: "BALANCE DUE",
            accessor: "balanceDue",
         },
         {
            Header: "PAYMENT",
            accessor: "payment",
         },
      ],
      []
   );

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

   return (
      <div style={{ fontSize: ".8rem" }} className="treatedrequests">
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

export default TableData;
