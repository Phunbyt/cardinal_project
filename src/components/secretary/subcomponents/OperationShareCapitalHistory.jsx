/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const OperationShareCapitalHistory = () => {
   const data = useMemo(
      () => [
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",
            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",

            paidUpCapital: "1,098,131",
         },
         {
            serialNo: 1,
            buyer: "CARDINAL STONE FIXED INCOME ALPHA FUND",
            paidUpCapital: "1,098,131",
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
            Header: "BUYER",
            accessor: "buyer",
         },
         {
            Header: "PAID UP SHARE CAPITAL",
            accessor: "paidUpCapital",
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

export default OperationShareCapitalHistory;
