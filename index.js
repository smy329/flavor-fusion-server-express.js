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

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = recipesData.filter(
    (cid) => cid.chef_id === parseInt(id)
  );
  res.send(selectedChef);
});

app.get('/recipes', (req, res) => {
  res.send(recipesData);
});

app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipesData.find(
    (rid) => rid.recipe_id === parseInt(id)
  );
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`CORS enabled Chef recipe app is running on port: ${port} `);
});
