const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const result = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    const resultObj = JSON.parse(result);
    const geekJoke = resultObj.joke;
    console.log(geekJoke);
    return geekJoke;
  } catch(err) {
    console.log(err)
  }
};

getGeekJoke();
module.exports = { getGeekJoke };