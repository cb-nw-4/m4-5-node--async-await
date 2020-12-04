const request = require('request-promise');
const requestObj = {
  uri: 'https://api.tronalddump.io/random/quote',
  headers: { 'accept': 'application/json' }
};

const getTronaldDumpQuote = async () => {
  try {
    const response = await request(requestObj);
    const quoteObj = JSON.parse(response);
    
    return quoteObj.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
