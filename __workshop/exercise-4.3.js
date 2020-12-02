const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    const parsedResponse = JSON.parse(response);
    const joke = parsedResponse.joke;
    return joke;
  } catch (err) {
    console.log(err);
  }
};

//Testing
getGeekJoke().then((data) => console.log(data));