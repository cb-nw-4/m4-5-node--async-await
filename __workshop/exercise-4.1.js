const { response } = require("express");
const request = require("request-promise");

// getDadJoke

// const getDadJoke = () => {
//   return request("https://icanhazdadjoke.com/")
//   .then((response) => {
//     let parsedJoke = JSON.parse(response);
//     console.log(parsedJoke);
//     return parsedJoke.joke;
//   })
//   .catch((err) => console.log('Error', err));
// };

const getDadJoke = async () => {
  try {
    let options = await request({
      uri: 'https://icanhazdadjoke.com/',
      headers: {
        "Accept": "application/json"
      }
    })
    let parsedJoke = JSON.parse(options);
    console.log(parsedJoke.joke);
    return parsedJoke.joke;
  }
  catch (err) {
    console.log(err);
  }
}

// 4.1
getDadJoke().then((response) => console.log(response));

module.exports = { getDadJoke };
