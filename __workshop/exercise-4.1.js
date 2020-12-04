const request = require("request-promise");

// getDadJoke
const getDadJoke = async () =>{
    var options = {
        uri: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    try {
        let response = await request(options);
        return response.joke;
    } catch(err){ 
        console.log(err);
    }


};

// 4.1
getDadJoke().then((data) => console.log(data));
