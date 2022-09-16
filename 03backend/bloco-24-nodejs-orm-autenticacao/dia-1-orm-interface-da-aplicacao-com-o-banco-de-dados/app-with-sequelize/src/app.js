const express = require('express');
const { usersRouter } = require('./routers');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

module.exports = app;