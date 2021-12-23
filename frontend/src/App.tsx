import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teams/:teamid" element={<TeamsPage />} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
};

export default App;
