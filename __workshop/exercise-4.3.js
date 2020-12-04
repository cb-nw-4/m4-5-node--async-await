const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request({
      uri: 'https://geek-jokes.sameerkumar.website/api',
      headers: {
        "Accept": "text/plain"
      }
    })
    return response;
  } catch(err) {
    console.log(err);
  }
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };