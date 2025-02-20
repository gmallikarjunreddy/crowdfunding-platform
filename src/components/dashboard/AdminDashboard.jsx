import React from 'react';
import './AdminDashboard.css'; // Import AdminDashboard styles
import { FaUsers, FaClipboardList, FaPlusCircle } from 'react-icons/fa'; // Import icons

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-content">
                <h2>Manage Users</h2>
                <div className="dashboard-cards">
                    <div className="card">
                        <FaUsers className="card-icon" />
                        <h3>View Users</h3>
                        <p>Manage and view all registered users.</p>
                        <button className="btn btn-primary">View Users</button>
                    </div>
                    <div className="card">
                        <FaPlusCircle className="card-icon" />
                        <h3>Add User</h3>
                        <p>Add new users to the platform.</p>
                        <button className="btn btn-secondary">Add User</button>
                    </div>
                </div>

                <h2>Manage Campaigns</h2>
                <div className="dashboard-cards">
                    <div className="card">
                        <FaClipboardList className="card-icon" />
                        <h3>View Campaigns</h3>
                        <p>Manage and view all active campaigns.</p>
                        <button className="btn btn-primary">View Campaigns</button>
                    </div>
                    <div className="card">
                        <FaPlusCircle className="card-icon" />
                        <h3>Add Campaign</h3>
                        <p>Create a new campaign for fundraising.</p>
                        <button className="btn btn-secondary">Add Campaign</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 