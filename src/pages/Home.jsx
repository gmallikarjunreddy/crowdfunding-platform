import React from 'react';
import './Home.css'; // Import Home page styles
import CampaignCard from '../components/CampaignCard'; // Import the CampaignCard component

const Home = () => {
    // Sample campaigns data (you can replace this with actual data)
    const campaigns = [
        {
            id: 1,
            title: "Community Garden Project",
            description: "Help us build a community garden to promote sustainability.",
            image: "/images/community-garden.jpg", // Ensure this path is correct
            goal: 5000,
            raised: 2000,
            userId: 1, // Example user ID
        },
        {
            id: 2,
            title: "Animal Shelter Renovation",
            description: "Renovate our local animal shelter to provide better care for animals.",
            image: "/images/Animal-Shelter-Renovation.jpg", // Ensure this path is correct
            goal: 8000,
            raised: 4000,
            userId: 2, // Example user ID
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

    // Assuming you have a currentUser object
    const currentUser = { id: 1 }; // Example current user

    // Filter campaigns based on the current user's ID
    const userCampaigns = campaigns.filter(campaign => campaign.userId === currentUser.id);

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome Partner</h1>
                <p>Your platform for crowdfunding innovative ideas and projects.</p>
                <a href="/CampaignBuilder" className="btn btn-primary">Start a Campaign</a>
            </header>

            <section className="features">
                <h2>Why Choose YellowFund?</h2>
                <div className="row">
                    <div className="col-md-4 feature">
                        <h3>Easy to Use</h3>
                        <p>Our user-friendly interface makes it simple to create and manage your campaigns.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <h3>Wide Reach</h3>
                        <p>Connect with backers from around the world and bring your ideas to life.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <h3>Secure Transactions</h3>
                        <p>We ensure that all transactions are secure and transparent for both fundraisers and backers.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 feature">
                        <h3>Community Support</h3>
                        <p>Join a community of like-minded individuals who support each other's projects.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <h3>Transparent Process</h3>
                        <p>We provide full transparency in funding and project progress.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <h3>Expert Guidance</h3>
                        <p>Get expert advice and support throughout your fundraising journey.</p>
                    </div>
                </div>
            </section>

            <section className="featured-campaigns">
                <h2>Your Campaigns</h2>
                <div className="row">
                    {userCampaigns.length > 0 ? (
                        userCampaigns.map(campaign => (
                            <div className="col-md-4" key={campaign.id}>
                                <CampaignCard 
                                    title={campaign.title}
                                    description={campaign.description}
                                    image={campaign.image}
                                    goal={campaign.goal}
                                    raised={campaign.raised}
                                    id={campaign.id}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No campaigns found. Please create a campaign.</p>
                    )}
                </div>
            </section>

            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} YellowFund. All rights reserved.</p>
                <p>Follow us on 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, and 
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>.
                </p>
            </footer>
        </div>
    );
};

export default Home; 