const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    let result = await request({
      url: 'https://geek-jokes.sameerkumar.website/api?format=json',
      method: 'GET'
    })
    let randomJoke = JSON.parse(result);
    return randomJoke.joke
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke().then((response) => console.log(response));

module.exports = { getGeekJoke };
