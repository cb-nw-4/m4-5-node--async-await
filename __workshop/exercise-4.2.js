const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const response = await request({
        url: "https://api.tronalddump.io/random/quote",
        headers: { Accept: "application/json" },
        });
    const trumpyQuote = JSON.parse(response);
    return trumpyQuote.value;
  } catch (err) {
      console.log('Error: ', err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };