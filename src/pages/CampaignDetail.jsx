import React from 'react';
import { useParams } from 'react-router-dom';
import './CampaignDetail.css'; // Import styles for the CampaignDetail page

const CampaignDetail = () => {
    const { id } = useParams();
    
    // Sample data for campaigns (you can replace this with actual data from your state or API)
    const campaigns = [
        {
            id: 1,
            title: "Community Garden Project",
            description: "Help us build a community garden to promote sustainability.",
            image: "/images/community-garden.jpg",
            goal: 5000,
            raised: 2000,
        },
        {
            id: 2,
            title: "Animal Shelter Renovation",
            description: "Renovate our local animal shelter to provide better care for animals.",
            image: "/images/Animal-Shelter-Renovation.jpg",
            goal: 8000,
            raised: 4000,
        },
        // Add more campaigns as needed
    ];

    const campaign = campaigns.find(c => c.id === parseInt(id));

    const handlePayment = () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
            amount: campaign.goal * 100, // Amount in paise
            currency: "INR",
            name: campaign.title,
            description: campaign.description,
            image: campaign.image,
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: '',
                email: '',
                contact: '',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="campaign-detail">
            {campaign ? (
                <>
                    <h1>{campaign.title}</h1>
                    <img src={campaign.image} alt={campaign.title} />
                    <p>{campaign.description}</p>
                    <p>Goal: ${campaign.goal}</p>
                    <p>Raised: ${campaign.raised}</p>
                    <button onClick={handlePayment} className="btn btn-primary">Donate Now</button>
                </>
            ) : (
                <p>Campaign not found.</p>
            )}
        </div>
    );
};

export default CampaignDetail; 