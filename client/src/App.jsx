import { Home } from './pages/home/Home.jsx';
import './app.scss';
import Watch from './pages/watch/Watch.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
    const user = true;
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
                    <Route exact path="/" element={<Home type="movie" />} />

                    {/* MOVIES */}
                    <Route exact path="/bogia" element={<Home type="movie" title="bogia" />} />

                    <Route exact path="/cogaituquakhu" element={<Home type="movie" title="cogaituquakhu" />} />
                    <Route exact path="/haiphuong" element={<Home type="movie" title="haiphuong" />} />

                    {/* SERIES */}
                    <Route exact path="/chuyentruonglop" element={<Home type="series" title="chuyentruonglop" />} />
                    <Route exact path="/huongvitinhthan" element={<Home type="series" title="huongvitinhthan" />} />

                    <Route path="/watch" element={<Watch />} />
                    <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );

    // return <Home />;
    //return <Watch />;
    //return <Register />;
    //return <Login />;
};

export default App;
