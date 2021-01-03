const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
    let response = await request({
        uri: "https://icanhazdadjoke.com/",
        headers: { Accept: "application/json" },
    });
    const parsed = JSON.parse(response)
    return parsed.joke
};
// 4.1
getDadJoke().then((data) => console.log(data));
