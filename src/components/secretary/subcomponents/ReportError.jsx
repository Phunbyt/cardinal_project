import React, { useContext } from "react";
import { Modal, Box } from "@mui/material";
import BlueButton from "../../general/BlueButton";
import SecretaryContext from "../../../contexts/secretary/SecretaryContext";
import "./NotificationModal.css";
import errorIcon from "../../../assets/file-error.png";

const ReportError = () => {
   const { open, handleClose } = useContext(SecretaryContext);

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
               <div className="modal_info">
                  <div className="modal_info_icon">
                     <img src={errorIcon} alt="alert.png" />
                  </div>
                  <div className="modal_info_text">
                     <p>
                        Sorry! the report would be ready on the 7th day of the
                        month, however older reports can be viewed
                     </p>
                  </div>
               </div>

               <div className="success_btns">
                  <BlueButton
                     //  click={createAnotherUser}
                     buttonText="VIEW OLDER REPORT"
                  />
                  <div className="dummydiv" />
                  <BlueButton
                     buttonText="CANCEL"
                     bgColor="#ffffff"
                     textColor="#002564"
                     //  click={goToDashboard}
                  />
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default ReportError;
