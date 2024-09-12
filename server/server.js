import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import quotesRouter from './routes/emailsend.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Powerwashing Company API');
});
app.use('/api/quotes', quotesRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
