import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import CreateCampaign from './pages/CreateCampaign';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './components/dashboard/AdminDashboard';
import CampaignDetail from './pages/CampaignDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';
import { ThemeContext } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <Router>
            <div>
                <DarkModeToggle />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/create-campaign" element={<CreateCampaign />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/campaign/:id" element={<CampaignDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App; 