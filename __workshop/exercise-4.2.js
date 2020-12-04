const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  const options={
    uri:'https://api.tronalddump.io/random/quote',
    headers:{ Accept: "application/json" },
  }
  try{
    const response=await request(options);
    const parsed=JSON.parse(response);
    return parsed.value;
  }
  catch(err){
    console.log(err);
  }

};

//getTronaldDumpQuote().then((data)=>console.log(data));

module.exports={ getTronaldDumpQuote };
