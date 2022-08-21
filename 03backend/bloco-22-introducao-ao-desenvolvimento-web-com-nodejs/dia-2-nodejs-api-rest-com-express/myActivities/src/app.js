const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.use(express.json());

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));
app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const selectedActivity = activities.find((activity) => activity.id === Number(id));

  res.status(200).json({ selectedActivity });
});

module.exports = app;
