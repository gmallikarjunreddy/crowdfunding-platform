import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

// User routes
router.post('/users', createUser);

export default router;
