import React from 'react';
import Routes from '../src/Routes/routes';
import GlobalStyle from './GlobalStyle';
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <React.Fragment>
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={4000} />
            </React.Fragment>
        </AuthProvider>
    );
}

export default App;
