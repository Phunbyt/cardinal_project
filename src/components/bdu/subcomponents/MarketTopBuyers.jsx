/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MarketTopBuyers = () => {
   const data = useMemo(
      () => [
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
         },
         {
            serialNo: 1,
            buyer: "STANBIC NOMINEES NIGERIA LTD/C001 - TRAD",
            unitBought: "1,295,272",
            percentOfSharedCapital: "0.0233%",
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
            Header: "Buyer",
            accessor: "buyer",
         },
         {
            Header: "Units Bought",
            accessor: "unitBought",
         },
         {
            Header: "% of Issued Shared Capital",
            accessor: "percentOfSharedCapital",
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
            <div
               style={{
                  background: " #002564 ",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: ".8rem",
                  width: "100%",
                  padding: ".5em 5em",
               }}
            >
               <h3>TOP 10 BUYERS (Volume)</h3>
            </div>
            <table
               cellSpacing={0}
               {...getTableProps()}
               style={{
                  width: "100%",
               }}
            >
               <thead
                  style={{
                     color: "#000",
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

export default MarketTopBuyers;


