const express = require('express');
const spdy = require('spdy');
const { createRequestHandler } = require('@remix-run/express');
const { default: build } = require('@remix-run/dev/server-build');

const app = express();
app.use(express.static('public', { maxAge: '1y', immutable: true }));

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
