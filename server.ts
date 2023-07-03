import { createRequestHandler } from '@remix-run/node';
import { getRootLoader } from '@remix-run/server';
import { getAppEntries } from '@remix-run/utils';
import { headers } from './headers'; // Import the headers function

const rootLoader = getRootLoader(getAppEntries());

// Add the headers function to the server routes
const handleRequest = createRequestHandler({
  getLoadContext() {
    return {};
  },
  async getSession() {
    return {};
  },
  rootLoader,
  headers, // Add the headers function here
});

// Rest of your server code...

export default handleRequest;
