import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static('../frontend'));
app.use(express.json());

app.get('/api/airquality', async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(`https://api.openaq.org/v2/latest?city=${city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'City not found or API error' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on http://localhost:3000');
});