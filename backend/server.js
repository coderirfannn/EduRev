import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

dotenv.config();
const app = express();


app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/courses', courseRoutes);

app.get('/', (req, res) => res.send('EduRev API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
