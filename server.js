const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const { default: build } = require('@remix-run/dev/server-build');

const app = express();
app.use(express.static('public', { maxAge: '1y', immutable: true }));

app.all(
  '*',
  createRequestHandler({
    build,
    getLoadContext() {
      // Define any context needed for server rendering here
      // For example, you might set up a database connection or load user data
      return {};
    },
    getRootLoader() {
      // Define the root component loader here
      // This is the entry point for your server-rendered React components
      return require('./app/root.loader').default;
    },
  })
);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
