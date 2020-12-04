const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    const jokeObj = JSON.parse(response);

    return jokeObj.joke;
  } catch (err) {
    console.log('Error: ', err);
  }
};

getGeekJoke().then(data => console.log(data));

module.exports = { getGeekJoke };
