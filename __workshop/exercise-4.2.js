const request = require("request-promise");

const getTronaldDumpQuote = async() => {
    try {
        const jokes = await request("https://api.tronalddump.io/random/quote", {
            headers: {
                Accept: "application/json",
            },
        });
        //console.log(jokes);
        const jokeParse = JSON.parse(jokes);
        //console.log(jokeParse);
        return jokeParse.value;
    } catch (err) {
        console.log(err);
    }
};

getTronaldDumpQuote().then((data) => console.log(data));