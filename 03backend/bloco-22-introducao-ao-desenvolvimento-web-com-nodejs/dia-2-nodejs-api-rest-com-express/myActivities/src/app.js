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

app.get('/filter/myActivities/', (req, res) => {
  const { status } = req.query;
  console.log(req.query);
  const filteredActivities = activities.filter((activity) => activity.status === status);

  res.status(200).json({ filteredActivities });
});
// See in the browser with: http://localhost:3001/filter/myActivities/?status=A%20fazer

app.get('/search/myActivities/', (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  const filteredActivities = activities.filter((activity) => activity.description.includes(q));

  res.status(200).json({ filteredActivities });
});
// See in the browser with: http://localhost:3001/search/myActivities/?q=ca returns: Banho no cachorro

module.exports = app;
