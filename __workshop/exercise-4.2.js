const { response } = require('express');
const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      uri: 'http://tronalddump.io/random/quote',
      json: true
    });
    return response.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };