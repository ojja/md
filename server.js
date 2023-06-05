const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const { default: build } = require('@remix-run/dev/server-build');
import path from 'path';

const app = express();

const host = 'https://cloudhosta.com:67/';

// Set the NODE_ENV based on the host
let nodeEnv = 'development';

if (host === req.headers.host) {
  nodeEnv = 'production';
}

process.env.NODE_ENV = nodeEnv;


app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y', // Set cache max age to 1 year
  immutable: true, // Enable immutability for cache optimization
}));
app.all(
  '*',
  createRequestHandler({
    build,
    getLoadContext() {
      return {};
    },
    getRootLoader() {
      return require('./app/root.loader').default;
    },
  })
);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
