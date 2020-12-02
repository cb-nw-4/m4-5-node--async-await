const request = require("request-promise");


const getDadJoke = async () => {

    const options = {
        uri: 'https://icanhazdadjoke.com/',        
        headers: {
            'User-Agent': 'Request-Promise',
            "Accept": "application/json"
        }
    };

    try {
        const joke =  await request(options) // 1
        const parsedJoke = JSON.parse(joke);
        return parsedJoke.joke;
    } catch (err) {
        return err.error ? JSON.parse(err.error) : err;
    }
  };

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };