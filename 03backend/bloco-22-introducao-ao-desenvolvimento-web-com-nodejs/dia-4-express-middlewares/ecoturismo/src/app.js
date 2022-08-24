const express = require('express');
const {activities, users } = require('./files/ecoturismoDB.json');

const auth = require('./middlewares/auth');
const validate = require('./middlewares');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

app.get('/activities', async (_req, res) => {
  res.status(200).json({ activities });
});

app.get('/users', async (_req, res) => {
  res.status(200).json({ users });
});

app.post('/activities',
  auth,
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

app.put('/activities',
  validate.Difficulty,
  validate.Rating,
  validate.CreatedAt,  
  validate.Description,  
  validate.Name,
  validate.Price,
  (req, res) => {
  
  const activityToUpdate = activities.find((a) => a.name === req.body.name);
  
  if (activityToUpdate) {
    const index = activities.indexOf(activityToUpdate);
    const updated = { ...req.body };
    activities.splice(index, 1, updated);
    res.status(201).json({ message: 'Atividade atualizada com sucesso!' });
  } else {
    res.sendStatus(400);
  }
});

app.post('/signup', (_req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();
  const authorizedUser = { ...req.body, token };
  users.push(authorizedUser);

  return res.status(200).json({ token });
});

module.exports = app;