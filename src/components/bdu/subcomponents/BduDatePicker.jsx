import React, { useContext } from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import BduContext from "../../../contexts/bdu/BduContext";

const BduDatePicker = () => {
   const { handleDateChange, selectedDate } = useContext(BduContext);
   return (
      <div>
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

export default BduDatePicker;
