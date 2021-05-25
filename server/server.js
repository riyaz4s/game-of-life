const express = require('express');
const path = require('path');
const port = process.env.PORT || 4001
const view = `${__dirname}/../view`;
var app = express();

app.use(express.static('public'));

app.get('/gol', (req, res) => {
  res.sendFile(path.join(`${view}/index.html`));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`)
});
