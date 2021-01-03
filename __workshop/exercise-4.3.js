const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const joke =  await request('https://geek-jokes.sameerkumar.website/api?format=json') 
    const parsedJoke = JSON.parse(joke);
    return parsedJoke.joke;
} catch (err) {
    return err.error;
}
};
getGeekJoke().then(data=>(console.log(data)));