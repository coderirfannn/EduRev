import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// simple tagline generator - replaceable with an AI call later
const generateTagline = (name) => {
  const templates = [
    `${name} — Aspiring Web Developer`,
    `${name} — Lifelong Learner`,
    `${name} — Building the next big thing`,
    `${name} — Curious about code and creativity`,
    `${name} — Turning ideas into projects`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
};

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required.' });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already registered.' });

    const hashed = await bcrypt.hash(password, 10);
    const tagline = generateTagline(name);
    const user = await User.create({ name, email, password: hashed, tagline });
    const { password: _, ...safeUser } = user.toObject();
    res.json({ message: 'Signup successful', user: safeUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password required.' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const { course } = req.body; // { id, title }
    if (!course || !course.id) return res.status(400).json({ message: 'Course info required' });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const already = user.enrolledCourses.find(c => c.id === course.id);
    if (already) return res.status(400).json({ message: 'Already enrolled' });

    user.enrolledCourses.push({ ...course, enrolledAt: new Date() });
    await user.save();
    res.json({ message: 'Enrolled successfully', enrolledCourses: user.enrolledCourses });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
