const express = require('express');
const app = express();

const base = `${__dirname}/page`;

app.use(express.static('page'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/main.html`);
  });

  app.get('/login', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });
  
  app.get('/repostories', (req, res) => {
    res.sendFile(`${base}/repos-table.html`);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
