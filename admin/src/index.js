import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextConProvider } from './context/authContext/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextConProvider>
            <App />
        </AuthContextConProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
