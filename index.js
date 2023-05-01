const express = require('express');
const cors = require('cors');
const chefsData = require('./data/chefs.json');
const recipesData = require('./data/recipes.json');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chef Recipe is going on');
});

app.get('/chefs', (req, res) => {
  res.send(chefsData);
});

app.get('/recipes', (req, res) => {
  res.send(recipesData);
});

app.listen(port, () => {
  console.log(`CORS enabled Chef recipe app is running on port: ${port} `);
});
