import express from 'express';
const router = express.Router();

// Example route for services
router.get('/services', (req, res) => {
  res.json([
    { name: 'Residential Powerwashing', description: '...' },
    { name: 'Commercial Powerwashing', description: '...' },
    // other services
  ]);
});

export default router;
