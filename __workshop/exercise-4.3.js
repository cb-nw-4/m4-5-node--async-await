const request = require('request-promise');

var options = {
  uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
  headers: {
      "Accept": "application/json"
  },
  json: true // Automatically parses the JSON string in the response
};

const getGeekJoke = async () => {
  try {
    const response = await request(options);
    
    console.log(response.joke);
    return response.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

//getGeekJoke();

module.exports = { getGeekJoke };