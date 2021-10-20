

import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';
export const AllAuth=createContext('');

const AuthProvider = ({children}) => {
    const auth=UseFirebase();
    return (
        <AllAuth.Provider value={auth}>
            {children}
        </AllAuth.Provider>
    );
};

export default AuthProvider;