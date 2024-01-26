import Typesense from 'typesense';

const typesense = new Typesense.Client({
  nodes: [
    {
      host: 'ENTER_HOST_HERE',
      port: 443,
      protocol: 'https',
    },
  ],
  apiKey: 'ENTER_API_KEY_HERE',
  numRetries: 3,
  connectionTimeoutSeconds: 25,
});

export {typesense};
