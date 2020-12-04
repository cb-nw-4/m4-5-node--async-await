const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  const options = {
    uri: 'https://api.tronalddump.io/random/quote',        
    headers: {
        'User-Agent': 'Request-Promise',
        "Accept": "application/json"
    }
  };

  try {
      const quote =  await request(options) // 1
      const parsedQuote = JSON.parse(quote);
      return parsedQuote.value;
  } catch (err) {
      return err.error ? JSON.parse(err.error) : err;
  }
};

getTronaldDumpQuote().then(data=>(console.log(data)));

module.exports = { getTronaldDumpQuote };