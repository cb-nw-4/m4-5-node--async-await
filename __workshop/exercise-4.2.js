const request = require('request-promise');

const apiObj = {
  uri: 'https://api.tronalddump.io/random/quote',
  headers: {
      'Accept': 'application/json'
  }
}

const getTronaldDumpQuote = async () => {
  try {
    const response = await request(apiObj);
    const parsedResponse = JSON.parse(response);
    const joke = parsedResponse.value;
    return joke;
  } catch (err) {
    console.log(err);
  }
}

//Testing
getTronaldDumpQuote().then((data) => console.log(data));