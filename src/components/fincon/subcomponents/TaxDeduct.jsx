import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";

const TaxDeduct = () => (
   <div className="payment_details_item">
      <FormLabel style={{ color: "#000" }} component="legend">
         Tax Deducted:
      </FormLabel>
      <RadioGroup
         defaultValue="no"
         row
         aria-label="gender"
         name="row-radio-buttons-group"
      >
         <FormControlLabel
            value="no"
            control={<Radio />}
            label="No Tax Deducted"
         />
         <FormControlLabel value="yes" control={<Radio />} label="Yes, TDS" />
      </RadioGroup>
   </div>
);

export default TaxDeduct;
