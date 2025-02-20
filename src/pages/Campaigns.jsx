import React from 'react';
import './Campaigns.css'; // Import Campaigns page styles
import CampaignCard from '../components/CampaignCard'; // Import the CampaignCard component

const Campaigns = () => {
    // Sample data for campaigns
    const campaigns = [
        {
            id: 1,
            title: "Community Garden Project",
            description: "Help us build a community garden to promote sustainability.",
            image: "/images/community-garden.jpg", // Ensure this path is correct
            goal: 5000,
            raised: 2000,
        },
        {
            id: 2,
            title: "Animal Shelter Renovation",
            description: "Renovate our local animal shelter to provide better care for animals.",
            image: "/images/Animal-Shelter-Renovation.jpg", // Ensure this path is correct
            goal: 8000,
            raised: 4000,
        },
        {
            id: 3,
            title: "Local Artists Fund",
            description: "Support local artists in our city by funding their projects.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 3000,
            raised: 1500,
        },
        {
            id: 4,
            title: "New Playground for Kids",
            description: "Help us fund a new playground for children in our neighborhood.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 7000,
            raised: 3500,
        },
        {
            id: 5,
            title: "School Supplies Drive",
            description: "Collecting funds to provide school supplies for underprivileged children.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 2000,
            raised: 1200,
        },
        {
            id: 6,
            title: "Food Bank Support",
            description: "Help us stock our local food bank to feed those in need.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 6000,
            raised: 3000,
        },
        {
            id: 7,
            title: "Youth Sports Program",
            description: "Funding for a youth sports program to promote health and teamwork.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 4000,
            raised: 1800,
        },
        {
            id: 8,
            title: "Mental Health Awareness",
            description: "Support mental health initiatives in our community.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 5000,
            raised: 2500,
        },
        {
            id: 9,
            title: "Local History Museum",
            description: "Help us preserve our local history by funding the museum.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 10000,
            raised: 5000,
        },
        {
            id: 10,
            title: "Community Clean-Up Day",
            description: "Join us in cleaning up our local parks and streets.",
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            goal: 3000,
            raised: 1500,
        },
    ];

    return (
        <div className="campaigns-container">
            <h1>Our Campaigns</h1>
            <div className="campaigns-grid">
                {campaigns.map(campaign => (
                    <CampaignCard 
                        key={campaign.id}
                        title={campaign.title}
                        description={campaign.description}
                        image={campaign.image}
                        goal={campaign.goal}
                        raised={campaign.raised}
                        id={campaign.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Campaigns; 