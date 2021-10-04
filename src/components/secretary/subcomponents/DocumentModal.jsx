import React, { useContext } from "react";
import { Modal, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Document, Page } from "react-pdf";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BlueButton from "../../general/BlueButton";
import SecretaryContext from "../../../contexts/secretary/SecretaryContext";
import "./NotificationModal.css";

const DocumentModal = () => {
   const {
      open,
      handleClose,
      previousPage,
      nextPage,
      url,
      onDocumentLoadSuccess,
      pageNumber,
   } = useContext(SecretaryContext);

   return (
      <div>
         <Modal
            style={{
               display: "flex",
               alignItems: "center",
            }}
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
               <Carousel
                  NextIcon={<ArrowForwardIosOutlinedIcon />}
                  PrevIcon={<ArrowBackIosOutlinedIcon />}
                  prev={previousPage}
                  next={nextPage}
               >
                  <div
                     style={{
                        overflow: "scroll",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "70vh",
                     }}
                     className="modal_info"
                  >
                     <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                     </Document>
                  </div>
               </Carousel>

               <div className="view_document_btns">
                  <div className="view_document_download_btn">
                     <BlueButton
                        //  click={createAnotherUser}
                        buttonText="DOWNLOAD"
                     />
                  </div>

                  <div className="view_document_close_btn">
                     <BlueButton
                        buttonText="CLOSE"
                        bgColor="#ffffff"
                        textColor="#002564"
                        //  click={goToDashboard}
                     />
                  </div>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default DocumentModal;
