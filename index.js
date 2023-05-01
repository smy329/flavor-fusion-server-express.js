const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chef Recipe is going on');
});

app.listen(port, () => {
  console.log(`CORS enabled Chef recipe app is running on port: ${port} `);
});
