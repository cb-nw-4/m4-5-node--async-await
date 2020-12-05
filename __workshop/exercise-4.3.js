const request = require('request-promise');

const getGeekJoke = async () => {
 let options = {
   url : 'https://geek-jokes.sameerkumar.website/api?format=json',
   headers : {
    'User-Agent': 'Request-Promise',
    "Accept": "application/json"
   }
 }
 try {
   const joke = await request(options);
   const parsedjoke = JSON.parse(joke);
   return parsedjoke.joke;
 }
 catch (err) {
   console.log(err, "Error")
 }
};

getGeekJoke().then((data) => { console.log(data)});
module.exports = { getGeekJoke };