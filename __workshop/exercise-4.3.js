const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const response = await request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        method: 'GET',
        });
    const geekyJoke = JSON.parse(response);
    return geekyJoke.joke;
  } catch (err) {
      console.log('Error: ', err);
  }
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };