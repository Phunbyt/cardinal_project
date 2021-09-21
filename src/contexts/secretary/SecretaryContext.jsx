import React, {createContext} from 'react'
import { useHistory } from 'react-router-dom';

const SecretaryContext = createContext() 


export const SecretaryContextProvider = ({ children }) => {
   const history = useHistory();
const goToUserLogin = () => {
   history.push(`/loginuser`);
};
const handleChangedPassword= () => {
   history.push(`/passwordchanged`);
};
    const state = { goToUserLogin, handleChangedPassword };
    return <SecretaryContext.Provider value={state}>{children}</SecretaryContext.Provider>;
};

export default SecretaryContext
