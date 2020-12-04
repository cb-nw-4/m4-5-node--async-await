const request = require('request-promise');

const getGeekJoke = async() => {
    try{
        const response = await request({
            "uri": "https://geek-jokes.sameerkumar.website/api?format=json",
            "method": "GET"
        });
        const parsedResponse = JSON.parse(response); 
        return parsedResponse.joke;
    } catch(err) {
        console.log('Error:',err);
    };
}

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };