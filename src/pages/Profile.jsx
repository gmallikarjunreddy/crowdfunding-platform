import React from 'react';
import './Profile.css'; // Ensure you have a CSS file for styling

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Passionate about crowdfunding and community projects.",
        profilePicture: "https://via.placeholder.com/150", // Replace with actual image URL
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button className="btn edit-profile">Edit Profile</button>
            </div>
            <div className="profile-bio">
                <h3>Bio</h3>
                <p>{user.bio}</p>
            </div>
            <div className="profile-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li>Created a campaign for community garden project.</li>
                    <li>Donated to local animal shelter renovation.</li>
                    <li>Joined a mental health awareness initiative.</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile; 