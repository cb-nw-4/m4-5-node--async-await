const request = require("request-promise");

// getDadJoke
const getDadJoke = () =>{
    var options = {
        uri: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    return request(options).then((res)=>res.joke);

};

// 4.1
getDadJoke().then((data) => console.log(data));
