const request = require('request-promise');

const getTronaldDumpQuote = async () => {

  try {
    const res = await request({
        "uri": "https://api.tronalddump.io/random/quote",
        "headers": {
            "Accept": "application/json"
        }
    });
    const parsedRes = JSON.parse(res);
    const quote = parsedRes.value;
    return quote;
  } catch (err) {
    console.log('Error', err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

