import React from 'react';
import Routes from '../src/Routes/routes';
import GlobalStyle from './GlobalStyle';

import { AuthProvider } from './context/AuthContext';


const App = () => {
    return (
        <AuthProvider>
            <React.Fragment>
                <Routes />
                <GlobalStyle />
            </React.Fragment>
        </AuthProvider>
    );
}

export default App;
