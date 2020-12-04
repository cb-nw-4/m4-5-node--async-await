const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const res = await request({
        "uri": "https://geek-jokes.sameerkumar.website/api?format=json",
        "headers": {
            "Accept": "application/json"
        }
    });
    const parsedRes = JSON.parse(res);
    const joke = parsedRes.joke
    return joke;

} catch (err) {
    console.log('Error', err);
}
};

getGeekJoke().then((data) => console.log(data));
