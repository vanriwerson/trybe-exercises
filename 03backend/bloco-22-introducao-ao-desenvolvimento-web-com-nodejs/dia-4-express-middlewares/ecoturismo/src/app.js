const express = require('express');

const app = express();
app.use(express.json());

app.post('/activities', (req, res) => {
  const activity = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

module.exports = app;