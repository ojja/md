const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const { default: build } = require('@remix-run/dev/server-build');
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y', // Set cache max age to 1 year
  immutable: true, // Enable immutability for cache optimization
}));
app.all('*', (req, res, next) => {
  const host = req.hostname;

  if (host === 'localhost' || host === '127.0.0.1') {
    process.env.NODE_ENV = 'development';
  } else if (host === 'cloudhosta.com') {
    process.env.NODE_ENV = 'production';
  } else {
    // Set default environment if the host doesn't match any conditions
    process.env.NODE_ENV = 'development';
  }

  next();
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
