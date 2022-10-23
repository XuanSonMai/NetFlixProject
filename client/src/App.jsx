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
                    <Route exact path="/movies" element={<Home type="movie" />} />
                    <Route exact path="/movies/bogia" element={<Home type="movie" title="bogia" />} />

                    <Route exact path="/movies/cogaituquakhu" element={<Home type="movie" title="cogaituquakhu" />} />
                    <Route exact path="/movies/haiphuong" element={<Home type="movie" title="haiphuong" />} />
                    <Route exact path="/series" element={<Home type="series" />} />

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
