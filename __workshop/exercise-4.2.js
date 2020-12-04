const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    let result = await request({
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        "Accept": "application/json"
      }
    })
    let quote = JSON.parse(result);
    return quote.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((response) => console.log(response));

module.exports = { getTronaldDumpQuote };
