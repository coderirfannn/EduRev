import express from 'express';
import { signupUser, loginUser, getProfile, enrollCourse } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.get('/me', authMiddleware, getProfile);
router.post('/enroll', authMiddleware, enrollCourse);

export default router;
