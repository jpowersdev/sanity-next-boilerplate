const sanityClient = require('@sanity/client');
export const client = sanityClient({
  projectId: 'e3cl9mbl',
  dataset: 'production',
  token: '',
  useCdn: true
});
