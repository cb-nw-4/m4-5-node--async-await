const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  const options = {
    uri : "https://api.tronalddump.io/random/quote",
    headers: {
      'User-Agent': 'Request-Promise',
      "Accept": "application/json"
  }
   
  }

  try { 
    const joke = await request(options); 
    const parsedJoke = JSON.parse(joke);
    return parsedJoke.value;
  }
  catch (err) {
    console.log(err, "Error")
  }
}

getTronaldDumpQuote().then((data)=> console.log(data))
