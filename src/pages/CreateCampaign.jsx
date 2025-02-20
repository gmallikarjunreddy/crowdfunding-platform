import React, { useState } from 'react';
import './CreateCampaign.css'; // This should be present

const CreateCampaign = ({ addCampaign }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a campaign object
        const newCampaign = {
            title,
            description,
            goal: parseFloat(goal),
            image,
            userId: 1, // Replace with actual user ID from context or state
        };

        // Call the addCampaign function to update the campaigns state in App
        addCampaign(newCampaign);

        // Reset form fields
        setTitle('');
        setDescription('');
        setGoal('');
        setImage(null);
        setSuccessMessage('Campaign created successfully!');

        // Optionally redirect or clear the message after a few seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="create-campaign-container">
            <h2>Create a New Campaign</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Campaign Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    
                    <label htmlFor="goal">Funding Goal ($)</label>
                    <input
                        type="number"
                        id="goal"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        required
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Campaign</button>
            </form>
        </div>
    );
};

export default CreateCampaign; 