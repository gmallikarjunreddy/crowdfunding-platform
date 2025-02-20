import React from 'react';
import './CampaignCard.css'; // Import styles for the CampaignCard

const CampaignCard = ({ title, description, image, goal, raised, id }) => {
    return (
        <a href={`/campaign/${id}`} className="campaign-card">
            <img src={image} alt={title} className="campaign-image" />
            <div className="campaign-details">
                <h2 className="campaign-title">{title}</h2>
                <p className="campaign-description">{description}</p>
                <div className="campaign-stats">
                    <p>Goal: <span className="goal">${goal}</span></p>
                    <p>Raised: <span className="raised">${raised}</span></p>
                </div>
            </div>
        </a>
    );
};

export default CampaignCard; 