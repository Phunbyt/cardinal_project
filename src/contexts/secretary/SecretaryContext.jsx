import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { pdfjs } from "react-pdf";

const SecretaryContext = createContext();

export const SecretaryContextProvider = ({ children }) => {
   const history = useHistory();

   const [open, setOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState('');

const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);
const url =
   "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const onDocumentLoadSuccess = ({ numPage }) => {
   setNumPages(numPage);
   setPageNumber(1);
};

const changePage = (offset) => {
   setPageNumber((prevPageNumber) => prevPageNumber + offset);
};

const previousPage = () => {
   changePage(-1);
};

const nextPage = () => {
   changePage(1);
};

   

   const handleOpen = () => setOpen(true);

   const handleClose = () => setOpen(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
   };
   const goToUserLogin = () => {
      history.push(`/loginuser`);
   };

   const handleChangedPassword = () => {
      history.push(`/passwordchanged`);
   };

   const handleSelectionChange = (e) => {
      const {
         target: { value },
      } = e;
      setSelectedItem(typeof value === 'string' ? value.split(',') : value);
   };

   const state = {
      selectedItem,
      handleSelectionChange,
      goToUserLogin,
      handleChangedPassword,
      handleOpen,
      open,
      handleClose,
      handleSubmit,
      previousPage,
      nextPage,
      url,
      onDocumentLoadSuccess,
      pageNumber,
   };
   return (
      <SecretaryContext.Provider value={state}>
         {children}
      </SecretaryContext.Provider>
   );
};

export default SecretaryContext;
