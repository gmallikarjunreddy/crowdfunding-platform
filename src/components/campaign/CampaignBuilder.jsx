import React, { useState } from 'react';
import './CampaignBuilder.css'; // Ensure you have a CSS file for styling

const CampaignBuilder = () => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNext = () => {
        if (step === 1 && !title) {
            setErrorMessage('Campaign title is required.');
            return;
        }
        if (step === 2 && !description) {
            setErrorMessage('Description is required.');
            return;
        }
        if (step === 3 && (!goal || goal <= 0)) {
            setErrorMessage('Funding goal must be a positive number.');
            return;
        }
        setErrorMessage('');
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

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

        // Here you would typically send the newCampaign to your backend API
        console.log('Campaign Created:', newCampaign);

        // Reset form fields
        setTitle('');
        setDescription('');
        setGoal('');
        setImage(null);
        setSuccessMessage('Campaign created successfully!');
        setErrorMessage('');

        // Optionally redirect or clear the message after a few seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="campaign-builder-container">
            <h2>Create a New Campaign</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="step-indicator">
                <div className={`step ${step === 1 ? 'active' : ''}`}>Step 1</div>
                <div className={`step ${step === 2 ? 'active' : ''}`}>Step 2</div>
                <div className={`step ${step === 3 ? 'active' : ''}`}>Step 3</div>
            </div>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
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
                        <button type="button" className="btn" onClick={handleNext}>Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <button type="button" className="btn" onClick={handleBack}>Back</button>
                        <button type="button" className="btn" onClick={handleNext}>Next</button>
                    </div>
                )}
                {step === 3 && (
                    <div>
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
                            {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />}
                        </div>
                        <button type="button" className="btn" onClick={handleBack}>Back</button>
                        <button type="submit" className="btn">Create Campaign</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CampaignBuilder;