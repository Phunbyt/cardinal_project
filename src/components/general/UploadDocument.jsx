import React from 'react'
import { Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const UploadDocument = () => (
   <div>
      <label htmlFor="raised-button-file">
         <Button
            style={{ color: "#9991A1", borderColor: "#9991A1" }}
            variant="outlined"
            fullWidth
            component="span"
            endIcon={<FileUploadIcon />}
         >
            <input
               accept="image/*"
               style={{ display: "none", width: "100%" }}
               id="raised-button-file"
               multiple
               type="file"
            />
            Click to choose file{" "}
            <span style={{ marginLeft: "10px" }}>JPG / PNG {"<= "}100kb </span>
         </Button>
      </label>
   </div>
);

export default UploadDocument
