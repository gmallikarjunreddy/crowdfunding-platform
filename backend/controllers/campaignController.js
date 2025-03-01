import Campaign from '../models/Campaign.js';

// Create a new campaign
export const createCampaign = async (req, res) => {
    try {
        const campaign = new Campaign(req.body);
        await campaign.save();
        res.status(201).send(campaign);
    } catch (error) {
        res.status(400).send(error);
    }
};
