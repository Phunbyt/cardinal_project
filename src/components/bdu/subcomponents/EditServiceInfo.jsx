import React, { useContext } from "react";
import BduContext from "../../../contexts/bdu/BduContext";
import FormGroup from "../../general/FormGroup";
import SelectionField from "./SelectionField";
import "./ServiceInfo.css";

const EditServiceInfo = ({ serviceType, inputValue }) => {
   const { removeInvoiceServices } = useContext(BduContext);
   return (
      <div className="new_service_info">
         <span
            style={{
               flex: 2,
            }}
         >
            {serviceType}
         </span>
         <span
               style={{
                flex:1,
               marginRight: "5em",
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
               flex: 2,
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

         
      </div>
   );
};

export default EditServiceInfo;
