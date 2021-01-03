const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  let quote = await request({uri: 'https://api.tronalddump.io/random/quote', headers:{accept:'application/json'}})
  let parsed = JSON.parse(quote)
  console.log(parsed.value)
};
getTronaldDumpQuote()