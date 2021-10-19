/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";

const OperationsReportTable = () => {
   const data = useMemo(
      () => [
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
         },
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
         },
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
         },
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
         },
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
         },
         {
            serialNo: 1,
            name: "OLUFUNSO NAIYEJU",
            address: "Ajah Lagos Nigeria  Lagos",
            transactionNumber: "21070627029770",
            transactionDate: "06/07/2021",
            volume: 300,
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
            Header: "NAME",
            accessor: "name",
         },
         {
            Header: "ADDRESS",
            accessor: "address",
         },
         {
            Header: "TRANS. NO",
            accessor: "transactionNumber",
         },
         {
            Header: "TRANS. DATE",
            accessor: "transactionDate",
         },
         {
            Header: "VOLUME",
            accessor: "volume",
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

export default OperationsReportTable;
