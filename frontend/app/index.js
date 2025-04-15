const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong from BFF!' });
});

app.listen(PORT, () => {
  console.log(`✅ BFF running at http://localhost:${PORT}`);
});
