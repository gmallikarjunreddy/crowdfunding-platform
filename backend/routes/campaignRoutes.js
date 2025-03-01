import express from 'express';
import { createCampaign } from '../controllers/campaignController.js';

const router = express.Router();

// Campaign routes
router.post('/campaigns', createCampaign);

export default router;
