import React, { createContext, useState } from 'react';

import axios from 'axios';

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [email, setEmail] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      const config = {
         header: {
            'Content-type': 'application/json',
         },
      };

      if (password !== confirmPassword) {
         setPassword('');
         setConfirmPassword('');
         setTimeout(() => {
            setError('');
         }, 5000);
         return setError('passwords do not match');
      }

      try {
         const data = await axios.post(
            'http://localhost:5000/admin/signup',
            {
               firstName,
               lastName,
               userName,
               password,
               email,
            },
            config
         );
         localStorage.setItem('authToken', data.data.token);
         if (data.data.token) {
            window.location = '/loginadmin';
         }
      } catch (err) {
         setError(err.response.data.error);
         setTimeout(() => {
            setError('');
         }, 5000);
      }
   };

   const state = {
      handleSubmit,
      setFirstName,
      setLastName,
      setUserName,
      setPassword,
      setConfirmPassword,
      setEmail,
      error,
   };

   return (
      <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
   );
};

export default GlobalContext;
