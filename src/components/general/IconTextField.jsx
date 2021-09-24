import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import './IconTextField.css';

const IconTextField = ({ headerText, fieldIcon, placeholder, labelFor, type="text" }) => (
   <div>
      <div className="icon_textfield_header">
         <h3>{headerText}</h3>
      </div>
      <TextField
            fullWidth
            type={type}
         placeholder={placeholder}
         labelFor={labelFor}
         InputProps={{
            endAdornment: (
               <InputAdornment>
                  <IconButton>{fieldIcon}</IconButton>
               </InputAdornment>
            ),
         }}
      />
   </div>
);

export default IconTextField;
