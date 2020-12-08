const request = require("request-promise");

const meta = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'
    }
}
// getDadJoke


const getDadJoke = async () => {
try {
    const result = await request(meta);
    const resultObj = JSON.parse(result);
    const dadJoke = resultObj.joke;
    console.log(dadJoke);
    return dadJoke;
    } catch(err) {
    console.log('Error: ', err);
    }
}

getDadJoke();

// 4.1
// getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };
