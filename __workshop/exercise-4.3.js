const request = require("request-promise");

const getGeekJoke = async () => {
  // ha hahahh
  let options = {
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
  };
  let response = await request(options, (err, response, body) => {
    if (!err && response.statusCode == 200) ;
  });
  const parsed = JSON.parse(response)

  return parsed.joke
};

getGeekJoke().then((joke) => {console.log(joke)})

module.exports = {getGeekJoke}