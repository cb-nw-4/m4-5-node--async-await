const request = require("request-promise");

// getDadJoke

const getDadJoke = async () => {

    try {
        const res = await request({
            "uri": "https://icanhazdadjoke.com/",
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
}

// 4.1
getDadJoke().then((data) => console.log(data));



