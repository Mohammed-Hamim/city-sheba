import React, { Children } from 'react';
import { AuthContext } from '../authContext/AuthContext';

const AuthProvider = ({children}) => {


    const authInfo = {

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;