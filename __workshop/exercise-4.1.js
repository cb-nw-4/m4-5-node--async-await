const request = require("request-promise");

// getDadJoke

const getDadJoke = async() => {
    try{
        const response = await request({
            "uri": "https://icanhazdadjoke.com/",
            "headers": {
                "Accept": "application/json"
            }
        });
        const parsedResponse = JSON.parse(response); 
        return parsedResponse.joke;
    } catch(err) {
        console.log('Error:',err);
    };
}

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };

