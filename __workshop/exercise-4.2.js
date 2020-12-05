const request = require('request-promise');

var options = {
  uri: 'https://api.tronalddump.io/random/quote',
  headers: {
      "Accept": "application/json"
  },
  json: true // Automatically parses the JSON string in the response
};

const getTronaldDumpQuote = async () => {
try {
  const response = await request(options);
  
  console.log(response.value);
  return response.value;
} catch (err) {
  console.log("Error: ", err);
}
};

//getTronaldDumpQuote();

module.exports = { getTronaldDumpQuote };
