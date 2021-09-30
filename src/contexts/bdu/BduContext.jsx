import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const BduContext = createContext();

export const BduContextProvider = ({ children }) => {
   const history = useHistory();

   const [open, setOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState('');



   

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
   };
   return (
      <BduContext.Provider value={state}>
         {children}
      </BduContext.Provider>
   );
};

export default BduContext;
