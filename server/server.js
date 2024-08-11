import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js'; // Adjust similarly if needed


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
