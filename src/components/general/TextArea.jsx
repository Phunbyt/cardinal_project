import React from 'react';
import TextField from '@mui/material/TextField';

const TextArea = ({ headerText, placeholder }) => (
   <div>
      <h2 className="textarea_header">{headerText}</h2>
      <TextField
         id="outlined-textarea"
         placeholder={placeholder}
         multiline
         rows={4}
         fullWidth
      />
   </div>
);

export default TextArea;
