const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/book', (req, res) => {
  const { pickup, dropoff } = req.body;
  if (!pickup || !dropoff) {
    return res.status(400).json({ error: 'Pickup and dropoff required' });
  }
  // Simulate ETA calculation
  const eta = Math.floor(Math.random() * 10) + 5;
  res.json({ message: 'Ride booked', eta });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});