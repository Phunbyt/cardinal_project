import React, { useContext } from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import SecretaryContext from "../../../contexts/secretary/SecretaryContext";

const OperationsDatePicker = () => {
   const { handleDateChange, selectedDate } = useContext(SecretaryContext);
   return (
      <div className="unique_selection_field">
         <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
               inputFormat="MM/dd/yyyy"
               value={selectedDate}
               onChange={handleDateChange}
               renderInput={(params) => (
                  <TextField
                     margin="normal"
                     variant="outlined"
                     size="small"
                     {...params}
                  />
               )}
            />
         </LocalizationProvider>
      </div>
   );
};

export default OperationsDatePicker;
