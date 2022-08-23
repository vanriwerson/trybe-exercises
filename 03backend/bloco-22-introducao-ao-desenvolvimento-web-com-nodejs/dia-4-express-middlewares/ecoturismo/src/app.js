const express = require('express');
const activities = require('./files/activities.json');
const validateDescription = require('./middlewares/validateDescription');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');

const app = express();
app.use(express.json());

app.get('/activities', async (req, res) => {
  res.status(200).json({ activities });
});

app.post('/activities',
  validateDescription,  
  validateName,
  validatePrice,
  (req, res) => {
  const activity = { ...req.body };
  activities.push(activity);
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;