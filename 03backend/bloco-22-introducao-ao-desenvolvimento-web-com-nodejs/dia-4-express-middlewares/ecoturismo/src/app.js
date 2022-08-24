const express = require('express');
const activities = require('./files/activities.json');

const validate = require('./middlewares');

const app = express();
app.use(express.json());

app.get('/activities', async (_req, res) => {
  res.status(200).json({ activities });
});

app.post('/activities',
  validate.Difficulty,
  validate.Rating,
  validate.CreatedAt,  
  validate.Description,  
  validate.Name,
  validate.Price,
  (req, res) => {
  const activity = { ...req.body };
  activities.push(activity);
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;