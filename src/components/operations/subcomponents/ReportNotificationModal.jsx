import React, { useContext } from "react";
import { Typography, Modal, Box } from "@mui/material";
import BlueButton from "../../general/BlueButton";
import OperationsContext from "../../../contexts/operations/OperationsContext";

const ReportNotificationModal = () => {
   const { open, handleClose } = useContext(OperationsContext);

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "500px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  boxShadow: 24,
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "1em 0",
               }}
            >
               <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{
                     fontWeight: 800,
                     fontSize: "1.5rem",
                     margin: "1em auto",
                  }}
               >
                  Success!
               </Typography>

               <hr className="modal_divider" />

               <Typography
                  id="modal-modal-description"
                  style={{
                     margin: "1em auto",
                  }}
               >
                  Report data has been uploaded successfully
               </Typography>

               <div className="box_buttons">
                  
                     <div className="reject_decision">
                        <BlueButton
                           click={handleClose}
                           buttonText="Close"
                        />

                  </div>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default ReportNotificationModal;
