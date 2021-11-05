const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use('/api/v1/posts', require('./routes/post.routes'));

app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 2019;

app.listen(PORT, () =>
  console.log(`Server is live at: http://localhost:${PORT}`)
);
