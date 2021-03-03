const request = require("request-promise");

const getGeekJoke = async() => {
    try {
        const jokes = await request(
            "https://geek-jokes.sameerkumar.website/api?format=json'"
        );
        //console.log(jokes);
        const jokeParse = JSON.parse(jokes);
        //console.log(jokeParse);
        return jokeParse;
    } catch (err) {
        console.log(err);
    }
};

getGeekJoke().then((data) => console.log(data));