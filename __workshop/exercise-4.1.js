const request = require("request-promise");

// getDadJoke

const getDadJoke = async () => {
    try{

        var options = {
            uri: 'https://icanhazdadjoke.com/',
            headers: {
                "Accept": "application/json"
            },
            
        };

        const response = await request(options);

        return response.joke;

    } catch(error){
        console.log(error)
    }
}

// 4.1
getDadJoke().then((data) => console.log(data));
