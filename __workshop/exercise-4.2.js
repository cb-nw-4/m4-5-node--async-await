const request = require('request-promise');

const meta = {
  uri: ' https://api.tronalddump.io/random/quote',
  headers: {
      'Accept': 'application/json'
  }
}

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const result = await request(meta);
    const resultObj = JSON.parse(result);
    const trumpQuote = resultObj.value;
    console.log(trumpQuote);
    return trumpQuote;
  } catch(err){
    console.log(err)
  }

};

getTronaldDumpQuote();
module.exports = { getTronaldDumpQuote };