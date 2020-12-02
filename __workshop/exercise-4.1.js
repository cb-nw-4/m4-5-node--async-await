const request = require("request-promise");

const apiObj = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'
    }
}

const getDadJoke = async () => {
    try {
        const response = await request(apiObj);
        const parsedResponse = JSON.parse(response);
        const joke = parsedResponse.joke;
        return joke;
    } catch (err) {
        console.log(err);
    }
}

//Testing
getDadJoke().then((data) => console.log(data));
