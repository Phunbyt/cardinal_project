import React, { useContext } from "react";
import BduContext from "../../../contexts/bdu/BduContext";
import FormGroup from "../../general/FormGroup";
import SelectionField from "./SelectionField";
import "./ServiceInfo.css";

const NewServiceInfo = ({ inputValue }) => {
   const { removeInvoiceServices } = useContext(BduContext);
   return (
      <div className="new_service_info">
         <span>
            <FormGroup value={inputValue} placeholder="Enter Service Type" />
         </span>
         <span
            style={{
               marginBottom: "-.5em",
            }}
         >
            <SelectionField
               background="#ffffff"
               placeholder="Select Tax"
               items={["VAT 7.5%"]}
            />
         </span>
         <span
            style={{
               display: "flex",
               alignItems: "center",
            }}
         >
            <div style={{ color: "#002564", fontWeight: "bold" }}># </div>
            <FormGroup
               type="number"
               value={inputValue}
               placeholder="Enter Service Charge"
            />
         </span>

         <span
            onClick={(e) => removeInvoiceServices(e)}
            style={{ color: "#f44336", cursor: "pointer", fontWeight: "bold" }}
         >
            X
         </span>
      </div>
   );
};

export default NewServiceInfo;
