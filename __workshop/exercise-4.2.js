const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  var options = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
        'Accept':'application/json'
    },
    json:true
  };

  try{
    let joke = await request(options);
    return joke;
  } catch(err){
    console.log(err);
  }
};

getTronaldDumpQuote().then((res)=>console.log(res.value));
