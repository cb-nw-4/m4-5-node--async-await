const request = require("request-promise");

const getTronaldDumpQuote = async () => {
    try {
        const response = await request({
            uri: "https://api.tronalddump.io/random/quote",
            headers: {
                Accept: "application/hal+json",
            },
        });
        const parsedResponse = JSON.parse(response);
        return parsedResponse.value;
    } catch (err) {
        console.log("Error:", err);
    }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
