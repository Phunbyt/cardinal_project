import React, { createContext, useState } from 'react';

const UserCreationContext = createContext();
export const UserCreationContextProvider = ({ children }) => {
   const [userToCreate, setUserToCreate] = useState('');
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleUserToCreate = (user) => {
      setUserToCreate(user);
   };
   const handleCreateUser = () => {
      console.log('works');
   };
   const state = {
      handleUserToCreate,
      handleCreateUser,
      userToCreate,
      open,
      handleOpen,
      handleClose,
   };
   return (
      <UserCreationContext.Provider value={state}>
         {children}
      </UserCreationContext.Provider>
   );
};

export default UserCreationContext;
