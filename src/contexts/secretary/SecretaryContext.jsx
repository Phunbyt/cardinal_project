import React, {createContext} from 'react'

const SecretaryContext = createContext() 


export const SecretaryContextProvider = ({ children }) => {
    const state={}
    return <SecretaryContext.Provider value={state}>{children}</SecretaryContext.Provider>;
};

export default SecretaryContext
