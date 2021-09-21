import React, { createContext, useState } from 'react';

const UserCreationContext = createContext();
export const UserCreationContextProvider = ({ children }) => {
   const [userToCreate, setUserToCreate] = useState('');
   const [open, setOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState([]);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleUserToCreate = (user) => {
      setUserToCreate(user);
   };
   const handleCreateUser = () => {
      console.log('works');
   };
   const handleSelectionChange = (e) => {
      const {
         target: { value },
      } = e;
      setSelectedItem(typeof value === 'string' ? value.split(',') : value);
   };
   const state = {
      handleUserToCreate,
      handleCreateUser,
      userToCreate,
      open,
      handleOpen,
      handleClose,
      handleSelectionChange,
      selectedItem,
   };
   return (
      <UserCreationContext.Provider value={state}>
         {children}
      </UserCreationContext.Provider>
   );
};

export default UserCreationContext;
