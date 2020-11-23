const fetch = require('node-fetch');

const BASE_URL = `https://api.jsonbin.io/b/5fbb876e90e7c66167f5c2b8`;

const key = '$2b$10$mDXX01aDThG5MWLz8So6TuS1S6j6EOhxM9q42fcJPkn67uCJuLLsu';

const options = {
  method: 'GET',
  headers: {
    'secret-key': key,
  },
};

export async function getUsers() {
  const response = await fetch(BASE_URL, options);
  const result = await response.json();

  return result;
}
