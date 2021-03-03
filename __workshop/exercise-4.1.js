const request = require("request-promise");

const getDadJoke = async() => {
    try {
        const jokes = await request("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const jokeParse = JSON.parse(jokes);
        return jokeParse.joke;
    } catch (err) {
        console.log(err);
    }
};

getDadJoke().then((data) => console.log(data));