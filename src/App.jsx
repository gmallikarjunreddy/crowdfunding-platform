import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateCampaign from './pages/CreateCampaign';
import Profile from './pages/Profile';
import Campaigns from './pages/Campaigns';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackerDashboard from './components/dashboard/BackerDashboard';
import FundraiserDashboard from './components/dashboard/FundraiserDashboard';
import CampaignBuilder from './components/campaign/CampaignBuilder';
import SearchBar from './components/shared/SearchBar';
import FilterPanel from './components/shared/FilterPanel';
import DonationForm from './components/payment/DonationForm';
import AdminDashboard from './components/dashboard/AdminDashboard';
import CampaignCard from './components/CampaignCard';

function App() {
  const [user, setUser] = useState(null); // State to manage user authentication

  const handleLogin = (userData) => {
    setUser(userData); // Set user data on login
  };

  const handleRegister = (userData) => {
    // Handle registration logic (e.g., API call)
    setUser(userData); // Set user data on registration
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaign/create" element={<CreateCampaign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/backer-dashboard" element={<BackerDashboard />} />
        <Route path="/fundraiser-dashboard" element={<FundraiserDashboard />} />
        <Route path="/CreateCampaign" element={<CreateCampaign />} />
        <Route path="/CampaignBuilder" element={<CampaignBuilder />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;