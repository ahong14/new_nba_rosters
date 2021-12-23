import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TeamsPage from './components/TeamsPage/TeamsPage';

import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/teams/:teamid" element={<TeamsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
