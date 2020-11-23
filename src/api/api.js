import data from './users.json';

export async function getUsers() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return promise;
}
