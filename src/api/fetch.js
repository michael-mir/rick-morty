/* eslint-disable no-console */
export default async function fetcher(...args) {
  let result = {};

  try {
    const response = await fetch(...args);
    const data = await response.json();

    if (response.ok) {
      result = { ...data };
    }
  } catch ({ message }) {
    console.error(message);
  }

  return result;
}
