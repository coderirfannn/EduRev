import express from 'express';
import { signupUser, loginUser, getProfile, enrollCourse } from '../controllers/authController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.get('/me', protect, getProfile);
router.post('/enroll', protect, enrollCourse);

export default router;
