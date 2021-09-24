import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SecretaryContext = createContext();

export const SecretaryContextProvider = ({ children }) => {
   const [open, setOpen] = useState(false);

   const history = useHistory();

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

   const state = {
      goToUserLogin,
      handleChangedPassword,
      handleOpen,
      open,
      handleClose,
      handleSubmit,
   };
   return (
      <SecretaryContext.Provider value={state}>
         {children}
      </SecretaryContext.Provider>
   );
};

export default SecretaryContext;
