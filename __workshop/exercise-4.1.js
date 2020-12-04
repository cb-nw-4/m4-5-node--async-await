const request = require("request-promise");

const getDadJoke = async () => {
    try {
        const response = await request({
            uri: 'https://icanhazdadjoke.com/',
            headers: {
                "Accept":"text/plain"
            },
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };