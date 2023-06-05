const express = require('express');
const spdy = require('spdy');
const { createRequestHandler } = require('@remix-run/express');
const { default: build } = require('@remix-run/dev/server-build');
import path from 'path';

const app = express();
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

const port = process.env.PORT || 3000;

const options = {
  key: /* path to your SSL/TLS private key file */,
  cert: /* path to your SSL/TLS certificate file */,
};

spdy
  .createServer(options, app)
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
