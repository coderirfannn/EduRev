import express from 'express';
import { getCourses } from '../controllers/courseController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getCourses);

router.post('/enroll', authMiddleware, async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id;

  if (!courseId) return res.status(400).json({ message: 'Course ID required' });

  await Enrollment.create({ userId, courseId });
  res.json({ message: 'Enrolled successfully!' });
});


export default router;
