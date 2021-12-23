import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { UPDATE_TEAMS } from './store/actions';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import TeamsPage from './components/TeamsPage/TeamsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import './App.css';

const getAllTeamsDetailed = gql`
    query getAllTeamsDetailed {
        allTeams {
            tid
            region
            name
            abbrev
            pop
            strategy
            stadiumCapacity
            colors
            imgURL
            imgURLSmall
        }
    }
`;

const App = () => {
    const teamsDispatch: Dispatch = useDispatch();
    const { loading, data, error } = useQuery(getAllTeamsDetailed);
    if (data && data.allTeams) {
        // save teams detailed data to redux
        teamsDispatch({
            type: UPDATE_TEAMS,
            teams: [...data.allTeams]
        });
    }
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
